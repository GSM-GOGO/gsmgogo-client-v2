import { useNavigate } from 'react-router-dom'
import apiClient from '../../utils/libs/apiClient'

const authCallBack = async (
  gauthCode: string | null,
  navigate: ReturnType<typeof useNavigate>,
) => {
  try {
    if (gauthCode) {
      const response = await apiClient.get(`/auth/callback?code=${gauthCode}`)
      const accessToken = response.headers['authorization']
      const refreshToken = response.headers['refresh-token']
      localStorage.setItem('accessToken', accessToken)
      localStorage.setItem('refreshToken', refreshToken)
      if (response.data.isSignup === false) {
        navigate('/signup')
      } else {
        navigate('/')
      }
    }
  } catch (error) {
    console.error(error)
  }
}

export default authCallBack
