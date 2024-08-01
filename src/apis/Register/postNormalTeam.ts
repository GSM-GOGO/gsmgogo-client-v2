import apiClient from '../../utils/libs/apiClient'

export const postNormalTeam = async (userTeamData: any) => {
  try {
    const token = localStorage.getItem('accessToken')
    await apiClient.post(`/team/normal`, userTeamData, {
      headers: {
        Authorization: `${token}`,
      },
    })
  } catch (e: any) {
    console.error(e)
    throw e
  }
}
