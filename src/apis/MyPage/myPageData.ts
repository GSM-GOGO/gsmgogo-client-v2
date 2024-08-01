import {
  MatchData,
  MatchResultData,
  MatchResponse,
} from '../../types/MatchData'
import apiClient from '../../utils/libs/apiClient'

export const myPageData = async (
  setMatches: (matches: MatchData[]) => void,
  setMatchResult: (matchResult: MatchResultData[]) => void,
): Promise<void> => {
  try {
    const token = localStorage.getItem('accessToken')
    const response = await apiClient.get<MatchResponse>(`/user/match`, {
      headers: {
        Authorization: `${token}`,
      },
    })
    setMatches(response.data.matches)
    setMatchResult(response.data.match_result)
  } catch (e) {
    console.error(e)
  }
}
