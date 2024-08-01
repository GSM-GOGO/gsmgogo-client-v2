import * as S from './style.ts'
import { GAuthLogo, SignInLogo } from '../../assets'
import '@msg-team/gauth-react/dist/index.css'
import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import { Toaster } from 'react-hot-toast'
import 'react-toastify/dist/ReactToastify.css'
import { signIn } from '../../apis/Auth/signin.ts'

const Signin = () => {
  const [isSigningIn, setIsSigningIn] = useState(false)

  return (
    <S.Wrapper>
      <S.Container>
        <S.ContainerResponse>
          <S.ImgBox src={SignInLogo} alt='SigninLogo' />
          <S.GauthLoginButton
            onClick={() => signIn(setIsSigningIn)}
            disabled={isSigningIn}
          >
            <GAuthLogo />
            Sign up with GAuth
          </S.GauthLoginButton>
        </S.ContainerResponse>
      </S.Container>
      <ToastContainer autoClose={1000} />
      <div>
        <Toaster position='top-right' reverseOrder={true} />
      </div>
    </S.Wrapper>
  )
}

export default Signin
