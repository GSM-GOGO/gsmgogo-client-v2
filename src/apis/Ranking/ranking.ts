import apiClient from '../../utils/libs/apiClient'
import { useQuery } from 'react-query'

interface RankData {
  user_id: number
  user_name: string
  user_grade: string
  user_class: string
  user_point: number
}

interface MyIdResponse {
  user_id: number
}

export const useRankData = () => {
  return useQuery<RankData[]>(
    'rankData',
    async () => {
      const token = localStorage.getItem('accessToken')
      const response = await apiClient.get<RankData[]>('/rank', {
        headers: {
          Authorization: `${token}`,
        },
      })
      return response.data
    },
    {
      cacheTime: 300000,
      staleTime: Infinity,
    },
  )
}

export const useMyId = () => {
  return useQuery<number>(
    'myId',
    async () => {
      const token = localStorage.getItem('accessToken')
      const response = await apiClient.get<MyIdResponse>('/user/my-id', {
        headers: {
          Authorization: `${token}`,
        },
      })
      return response.data.user_id
    },
    {
      cacheTime: Infinity,
      staleTime: Infinity,
    },
  )
}
