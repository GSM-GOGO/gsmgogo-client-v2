import { toast } from 'react-toastify'
import apiClient from '../../utils/libs/apiClient'
import { NavigateFunction } from 'react-router-dom'

interface ApiError {
  response?: {
    data: {
      message: string
    }
  }
}
export const deleteTeamApi = async (
  teamId: string | number | undefined,
  navigate: NavigateFunction,
  path: string,
) => {
  const deleteTeamFail = () => {
    toast.error('팀 삭제를 실패하였습니다!', { autoClose: 1000 })
  }

  const deleteTeamSuccess = () => {
    toast.success('팀이 삭제되었습니다!', { autoClose: 1000 })
  }

  try {
    const token = localStorage.getItem('accessToken')

    await apiClient.delete(`/team`, {
      data: { team_id: teamId },
      headers: {
        Authorization: token ? `Bearer ${token}` : '',
      },
      withCredentials: true,
    })

    navigate(path)
    setTimeout(deleteTeamSuccess, 500)
  } catch (e) {
    const error = e as ApiError
    navigate(path)
    setTimeout(deleteTeamFail, 500)

    if (error.response) {
      const errorMessage =
        (error as ApiError).response?.data?.message ||
        '알 수 없는 오류가 일어났습니다.'
      toast.error(errorMessage)
    }
  }
}
