import Input from '../../components/Input'
import { useForm } from 'react-hook-form'
import { Form, InputWrapper, SubmitWrapper } from './style'
import * as S from './style'
import { useState } from 'react'
import { Logo } from '../../assets/svg'
import { FormData } from '../../types/FormDataType'
import { useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify'
import { sendSMS } from '../../apis/Auth/sendSMS'
import { verifySMS } from '../../apis/Auth/verifySMS'
import { skipSMSVerification } from '../../apis/Auth/skipSMSVerification'

export default function SignUp() {
  const navigate = useNavigate()

  const [showVerification, setShowVerification] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState('')
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
    reset,
  } = useForm<FormData>({ mode: 'onChange' })

  const onSubmit = async (data: FormData) => {
    if (isButtonDisabled) return

    setIsButtonDisabled(true)
    if (!showVerification) {
      setPhoneNumber(data.phoneNumber)
      try {
        await sendSMS(data.phoneNumber)
        setShowVerification(true)
      } catch {
        // Error handling is done in sendSMS function
      } finally {
        setTimeout(() => {
          setIsButtonDisabled(false)
        }, 2000)
      }
    } else {
      const verificationCode = data.verificationCode.toString()
      try {
        await verifySMS(verificationCode)
        navigate('/')
        setTimeout(() => {
          toast.success('메시지 인증에 성공하였습니다!', { autoClose: 1000 })
        }, 500)
      } catch {
        setError('verificationCode', {
          type: 'manual',
          message: '인증번호가 올바르지 않습니다',
        })
        // Error handling is done in verifySMS function
      } finally {
        setTimeout(() => {
          setIsButtonDisabled(false)
        }, 2000)
      }
    }
  }

  const handleButtonClick = () => {
    if (showVerification) {
      setShowVerification(false)
      reset()
    } else {
      handleSkip()
    }
  }

  const handleSkip = async () => {
    try {
      await skipSMSVerification()
      navigate(`/`)
    } catch {}
  }

  return (
    <S.Layout>
      <ToastContainer autoClose={2000} />
      <S.Wrapper>
        <S.Logo>
          <Logo />
        </S.Logo>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputWrapper>
            <Input
              maxLength={11}
              label='전화번호'
              readOnly={showVerification}
              errors={!!errors.phoneNumber}
              message={errors.phoneNumber?.message}
              placeholder='전화번호를 입력해주세요'
              register={register('phoneNumber', {
                required: '전화번호를 입력하지 않았습니다',
                pattern: {
                  value: /^010[0-9]{8}$/,
                  message: '올바른 전화번호 형식을 입력해주세요',
                },
              })}
            />
            {showVerification && (
              <Input
                maxLength={6}
                label='인증번호'
                errors={!!errors.verificationCode}
                message={errors.verificationCode?.message}
                setError={setError}
                reset={() => reset({ verificationCode: '' })}
                placeholder='재발송 3번 초과 시 24시간 후 시도할 수 있습니다'
                register={register('verificationCode', {
                  required: '인증번호를 입력하지 않았습니다',
                  pattern: {
                    value: /^[0-9]{6}$/,
                    message: '인증번호는 6자리의 숫자로 입력해주세요',
                  },
                })}
                phoneNumber={phoneNumber}
              />
            )}
          </InputWrapper>
          <SubmitWrapper>
            <S.ButtonContainer>
              <S.BeforeButton type='button' onClick={handleButtonClick}>
                {showVerification ? '이전으로' : '넘어가기'}
              </S.BeforeButton>
              <S.CertificationButton
                type='submit'
                SubmitOK={Object.keys(errors).length === 0}
                disabled={Object.keys(errors).length !== 0 || isButtonDisabled}
              >
                {showVerification ? '인증하기' : '인증번호'}
              </S.CertificationButton>
            </S.ButtonContainer>
          </SubmitWrapper>
        </Form>
      </S.Wrapper>
    </S.Layout>
  )
}
