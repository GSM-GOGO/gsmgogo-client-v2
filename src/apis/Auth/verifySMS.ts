import apiClient from '../../utils/libs/apiClient'
import { toast } from 'react-toastify'
import { AxiosError } from 'axios'

interface ApiResponse {
  message: string
}

export const verifySMS = async (verificationCode: string): Promise<void> => {
  try {
    const token = localStorage.getItem('accessToken')

    await apiClient.post<void>(
      `/auth/verify?code=${verificationCode}`,
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    )
  } catch (error) {
    const axiosError = error as AxiosError<ApiResponse>
    const errorMessage =
      axiosError.response?.data?.message || '알 수 없는 오류가 발생했습니다.'
    toast.error(errorMessage, { autoClose: 1000 })
  }
}
