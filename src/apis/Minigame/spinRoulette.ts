import apiClient from '../../utils/libs/apiClient'

export const spinRoulette = async (token: string | null) => {
  try {
    const response = await apiClient.post(`/game/roulette`, null, {
      headers: {
        Authorization: `${token}`,
      },
    })
    return response.data
  } catch (error) {
    console.error(error)
  }
}
