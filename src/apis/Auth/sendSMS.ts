import apiClient from '../../utils/libs/apiClient'
import { toast } from 'react-toastify'
import { AxiosError } from 'axios'

interface ErrorResponse {
  message: string
}

export const sendSMS = async (phoneNumber: string) => {
  try {
    const token = localStorage.getItem('accessToken')
    await apiClient.post(
      `/auth/sms`,
      { phone_number: phoneNumber },
      { headers: { Authorization: `${token}` } },
    )
  } catch (e) {
    const error = e as AxiosError<ErrorResponse>
    const errorMessage =
      error.response?.data?.message || '알 수 없는 오류가 발생했습니다.'
    toast.error(errorMessage, { autoClose: 1000 })
  }
}
