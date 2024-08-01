import { toast } from 'react-toastify'
import { NavigateFunction } from 'react-router-dom'
import apiClient from '../../utils/libs/apiClient'
import { AxiosError } from 'axios'

interface ParticipantPosition {
  id: number
  position_x: number
  position_y: number
}

interface ConvertedMember {
  id: number
  x: number
  y: number
}

interface PostTeamRequest {
  team_name: string
  team_type: 'SOCCER' | 'BADMINTON' | 'VOLLEYBALL'
  participates: {
    user_id: string
    position_x: number
    position_y: number
  }[]
}

interface ApiResponse {}

export const postTeam = async (
  teamName: string,
  convertedMembers: ConvertedMember[],
  participantPositions: ParticipantPosition[],
  navigate: NavigateFunction,
  teamType: 'SOCCER' | 'BADMINTON' | 'VOLLEYBALL',
  endpoint: string,
  successCallback: () => void,
): Promise<void> => {
  try {
    const token = localStorage.getItem('accessToken')
    if (!token) {
      throw new Error('No access token found')
    }
    const participates = convertedMembers.map((player) => {
      const participantPosition = participantPositions.find(
        (p) => p.id === player.id,
      )
      return {
        user_id: String(player.id),
        position_x: participantPosition?.position_x ?? player.x,
        position_y: participantPosition?.position_y ?? player.y,
      }
    })

    const requestData: PostTeamRequest = {
      team_name: teamName,
      team_type: teamType,
      participates: participates,
    }

    await apiClient.post<ApiResponse>(endpoint, requestData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    })

    navigate(`/matches/${teamType.toLowerCase()}`)
    setTimeout(() => {
      successCallback()
    }, 500)
  } catch (error) {
    navigate(`/matches/${teamType.toLowerCase()}`)
    const axiosError = error as AxiosError<{ message?: string }>
    const errorMessage =
      axiosError.response?.data?.message || '알 수 없는 오류가 발생했습니다.'
    setTimeout(() => {
      toast.error(errorMessage, { autoClose: 1000 })
    }, 500)
  }
}
