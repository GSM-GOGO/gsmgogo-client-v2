import { Dispatch, SetStateAction } from 'react'
import { TeamFormationData } from '../../types/TeamFormationData'
import apiClient from '../../utils/libs/apiClient'
import { AxiosError } from 'axios'

export const getTeamFormationData = async (
  teamId: string | undefined,
  setFormData: Dispatch<SetStateAction<TeamFormationData | null>>,
  setNotFound: Dispatch<SetStateAction<boolean>>,
  setLoading: Dispatch<SetStateAction<boolean>>,
): Promise<void> => {
  setLoading(true)

  try {
    const token = localStorage.getItem('accessToken')
    if (!token) {
      throw new Error('No access token found')
    }

    const response = await apiClient.get<TeamFormationData>(
      `/team/formation?teamId=${teamId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      },
    )

    setFormData(response.data)
  } catch (error) {
    const axiosError = error as AxiosError
    if (axiosError.response?.status === 404) {
      setNotFound(true)
    }
  } finally {
    setLoading(false)
  }
}
