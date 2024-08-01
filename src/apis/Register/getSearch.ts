import { SportsData } from '../../types/Register'
import apiClient from '../../utils/libs/apiClient'

type Numbertype = {
  [key: string]: number
}

const NumberMapping: Numbertype = {
  ONE: 1,
  TWO: 2,
  THREE: 3,
  FOUR: 4,
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
}

export const getSearch = async (
  searchedName: string,
  selectedSport: string,
  selectedMembers: SportsData[],
) => {
  try {
    const token = localStorage.getItem('accessToken')
    let endpoint = `/user/search?name=${searchedName}`

    if (selectedSport === '배드민턴') {
      endpoint += '&type=BADMINTON'
    } else if (selectedSport === '배구') {
      endpoint += '&type=VOLLEYBALL'
    } else if (selectedSport === '축구') {
      endpoint += '&type=SOCCER'
    }

    const response = await apiClient.get(endpoint, {
      headers: {
        Authorization: token,
      },
      withCredentials: true,
    })

    const sortedResults = response.data.sort(
      (
        a: { user_grade: string; user_class: string },
        b: { user_grade: string; user_class: string },
      ) => {
        const gradeComparison =
          NumberMapping[a.user_grade] - NumberMapping[b.user_grade]
        if (gradeComparison !== 0) {
          return gradeComparison
        }
        return NumberMapping[a.user_class] - NumberMapping[b.user_class]
      },
    )

    const filteredResults = sortedResults.filter(
      (result: { user_name: string }) =>
        !selectedMembers.some(
          (selected) => selected.user_name === result.user_name,
        ),
    )

    return filteredResults
  } catch (e) {
    console.error(e)
    throw e
  }
}
