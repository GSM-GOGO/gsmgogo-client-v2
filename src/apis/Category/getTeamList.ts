import { Team } from '../../types/Team'
import apiClient from '../../utils/libs/apiClient'

export const getTeamList = async (
  sportName: string,
  setTeams: (teams: Team[]) => void,
) => {
  try {
    const token = localStorage.getItem('accessToken')

    const response = await apiClient.get(`/team?type=${sportName}`, {
      headers: {
        Authorization: token,
      },
      withCredentials: true,
    })
    setTeams(response.data)
  } catch (error) {
    console.error(error)
  }
}
