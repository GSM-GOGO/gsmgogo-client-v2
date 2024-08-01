import apiClient from '../../utils/libs/apiClient'
import { toast } from 'react-toastify'
import { AxiosError } from 'axios'

interface ApiResponse {
  message: string
}

export const skipSMSVerification = async (): Promise<void> => {
  try {
    const token = localStorage.getItem('accessToken')
    if (!token) {
      throw new Error('No access token found')
    }

    await apiClient.patch<void>(
      '/auth/sms/skip',
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true,
      },
    )
  } catch (error) {
    const axiosError = error as AxiosError<ApiResponse>
    const errorMessage =
      axiosError.response?.data?.message || '알 수 없는 오류가 발생했습니다.'
    toast.error(errorMessage, { autoClose: 1000 })
  }
}
