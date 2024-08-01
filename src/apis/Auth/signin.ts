import apiClient from '../../utils/libs/apiClient.ts'
import { toast } from 'react-toastify'
import { AxiosError } from 'axios'

interface SignInResponse {
  redirect: string
}

interface ErrorResponse {
  message: string
}

export const signIn = async (
  setIsSigningIn: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  setIsSigningIn(true)

  try {
    const response = await apiClient.get<SignInResponse>('/auth/login')
    window.location.href = response.data.redirect
  } catch (error: unknown) {
    const axiosError = error as AxiosError<ErrorResponse>
    const errorMessage =
      axiosError.response?.data?.message || '알 수 없는 오류가 발생했습니다.'
    setTimeout(() => {
      toast.error(errorMessage, { autoClose: 1000 })
    }, 500)
  } finally {
    setTimeout(() => {
      setIsSigningIn(false)
    }, 800)
  }
}
