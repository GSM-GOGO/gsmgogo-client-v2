import apiClient from '../../utils/libs/apiClient'

export const getIsLeader = async () => {
  try {
    const token = localStorage.getItem('accessToken')

    const response = await apiClient.get(`/user/is-leader`, {
      headers: {
        Authorization: token,
      },
      withCredentials: true,
    })

    return response.data.leader
  } catch (e) {
    console.error(e)
    throw e
  }
}
