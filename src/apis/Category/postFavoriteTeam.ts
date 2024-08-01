import { Dispatch, SetStateAction } from 'react'
import { toast } from 'react-toastify'
import apiClient from '../../utils/libs/apiClient'

export const postFavoriteTeamApi = async (
  teamId: number,
  setCheer: Dispatch<SetStateAction<boolean>>,
) => {
  try {
    const token = localStorage.getItem('accessToken')
    const registerFollow = () => {
      toast.success('팀이 팔로우 되었습니다!', { autoClose: 1000 })
    }

    await apiClient.post(
      `/team/follow`,
      {
        team_id: teamId,
      },
      {
        headers: {
          Authorization: token,
        },
        withCredentials: true,
      },
    )
    setCheer(false)
    window.location.reload()
    setTimeout(() => {
      registerFollow()
    }, 500)
  } catch (e) {
    setCheer(false)
    window.location.reload()
  }
}
