import { useNavigate } from 'react-router-dom'
import apiClient from '../../utils/libs/apiClient'

export const logout = async (navigate: ReturnType<typeof useNavigate>) => {
  try {
    const accessToken = localStorage.getItem('accessToken')

    await apiClient.delete(`/auth/logout`, {
      headers: {
        Authorization: accessToken!,
      },
      withCredentials: true,
    })
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    navigate('/signin')
  } catch (error) {
    console.error(error)
  }
}
