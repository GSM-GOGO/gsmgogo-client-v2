import apiClient from '../../utils/libs/apiClient'

export const getNunchiGame = async (
  token: string | null,
  month: number,
  day: number,
) => {
  const response = await apiClient.get(`/game/button?m=${month}&d=${day}`, {
    headers: {
      Authorization: token,
    },
    withCredentials: true,
  })
  return response.data
}
