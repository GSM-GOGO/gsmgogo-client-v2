import { useEffect } from 'react'
import { useLocation, Location, useNavigate } from 'react-router-dom'
import apiClient from '../../utils/libs/apiClient'

export function Login() {
  const navigate = useNavigate()
  const location: Location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const gauthCode: string | null = searchParams.get('code')

  const fetch = async (data: { code: string }) => {
    try {
      await apiClient.get(`/auth/callback?code=${data.code}`)
      navigate('/')
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (!gauthCode) return
    fetch({ code: gauthCode })
  }, [gauthCode])
}
