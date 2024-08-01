import apiClient from '../../utils/libs/apiClient'

export const fetchUserPoints = async (token: string | null) => {
  const response = await apiClient.get('/user/my-point', {
    headers: {
      Authorization: token,
    },
    withCredentials: true,
  })
  return response.data
}
