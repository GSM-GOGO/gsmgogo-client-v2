import { TeamList } from '../../types/TeamFormationData'
import apiClient from '../../utils/libs/apiClient'
import { AxiosError } from 'axios'

interface ApiResponse {
  data: TeamList
}

export const fetchNormal = async (
  id: string,
  setTeamList: (teamList: TeamList) => void,
  setNotFound: (notFound: boolean) => void,
  setLoading: (loading: boolean) => void,
): Promise<void> => {
  setLoading(true)

  try {
    const token = localStorage.getItem('accessToken')
    if (!token) {
      throw new Error('No access token found')
    }

    const response = await apiClient.get<ApiResponse>(
      `/team/normal?teamId=${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )

    setTeamList(response.data.data)
  } catch (error) {
    const axiosError = error as AxiosError
    if (axiosError.response?.status === 404) {
      setNotFound(true)
    }
  } finally {
    setLoading(false)
  }
}
