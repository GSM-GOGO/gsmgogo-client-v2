import { Dispatch, SetStateAction } from 'react'
import apiClient from '../../utils/libs/apiClient'
import { CheerTeam } from '../../types/Team'

export const getCheerTeam = async (
  setCheerTeam: Dispatch<SetStateAction<CheerTeam>>,
) => {
  try {
    const token = localStorage.getItem('accessToken')
    const response = await apiClient.get(`/user/follow-team-id`, {
      headers: {
        Authorization: token,
      },
      withCredentials: true,
    })
    setCheerTeam(response.data)
  } catch (error) {
    console.error(error)
  }
}
