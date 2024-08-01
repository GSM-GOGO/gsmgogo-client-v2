import { useEffect } from 'react'
import { useLocation, Location, useNavigate } from 'react-router-dom'
import Loading from '../../components/Loading/index.tsx'
import authCallBack from '../../apis/Auth/authCallBack.ts'

const AuthCallBack = () => {
  const navigate = useNavigate()
  const location: Location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const gauthCode: string | null = searchParams.get('code')

  useEffect(() => {
    authCallBack(gauthCode, navigate)
  }, [])
  return (
    <>
      <Loading />;
    </>
  )
}

export default AuthCallBack
