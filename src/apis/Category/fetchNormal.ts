import apiClient from '../../utils/libs/apiClient'
import { Dispatch, SetStateAction } from 'react'
import { Team } from '../../types/Team'

const fetchNormal = async (setTeamList: Dispatch<SetStateAction<Team[]>>) => {
  try {
    const token = localStorage.getItem('accessToken')
    const response = await apiClient.get(`/team?type=NORMAL`, {
      headers: {
        Authorization: `${token}`,
      },
    })
    setTeamList(response.data)
  } catch (error) {
    console.error(error)
  }
}

export default fetchNormal
