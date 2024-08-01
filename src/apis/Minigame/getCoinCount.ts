import apiClient from '../../utils/libs/apiClient'

export const getCoinCount = async (
  setCoinCnt: React.Dispatch<React.SetStateAction<number | undefined>>,
) => {
  try {
    const token = localStorage.getItem('accessToken')

    const response = await apiClient.get(`/game/coin`, {
      headers: {
        Authorization: token,
      },
      withCredentials: true,
    })
    setCoinCnt(response.data.count)
  } catch (error) {
    console.error(error)
  }
}
