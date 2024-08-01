import apiClient from '../../utils/libs/apiClient'

export const placeBetCoin = async (
  coinButton: string,
  coinInput: number | null,
  token: string | null,
) => {
  const response = await apiClient.post(
    '/game/coin',
    {
      prediction: coinButton,
      point: coinInput,
    },
    {
      headers: {
        Authorization: `${token}`,
      },
    },
  )
  return response.data
}
