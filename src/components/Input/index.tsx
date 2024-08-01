import { ReactElement, useEffect, useState } from 'react'
import { UseFormRegisterReturn, UseFormSetError } from 'react-hook-form'
import * as S from './style'
import Timer from '../Timer'
import { FormData } from '../../types/FormDataType'
import { ToastContainer } from 'react-toastify'
import { Toaster } from 'react-hot-toast'
import 'react-toastify/dist/ReactToastify.css'
import { sendSMS } from '../../apis/Auth/sendSMS'

interface Props {
  label: string
  errors: boolean
  message?: string
  placeholder: string
  register?: UseFormRegisterReturn
  type?: string
  fixed?: string | ReactElement
  maxLength?: number
  readOnly?: boolean
  setError?: UseFormSetError<FormData>
  reset?: (values?: FormData) => void
  phoneNumber?: string
}

export default function Input({
  label,
  errors,
  message,
  register,
  type = 'tel',
  maxLength,
  placeholder,
  readOnly,
  setError,
  reset,
  phoneNumber,
}: Props) {
  const validtime = 300
  const [count, setCount] = useState(validtime)
  const [expired, setExpired] = useState(false)
  const [resending, setResending] = useState(false)
  const [isResendDisabled, setIsResendDisabled] = useState(false)

  useEffect(() => {
    if (count === 0) {
      setExpired(true)
    }
  }, [count])

  const resetTimer = () => {
    setCount(validtime)
    setExpired(false)
    if (setError) {
      setError('verificationCode', { type: 'manual', message: '' })
    }
    if (reset) {
      reset()
    }
  }

  const handleResend = async () => {
    if (resending || isResendDisabled) return

    setResending(true)
    setIsResendDisabled(true)

    resetTimer()

    try {
      await sendSMS(phoneNumber || '')
    } finally {
      setResending(false)
      setTimeout(() => {
        setIsResendDisabled(false)
      }, 2000)
    }
  }

  return (
    <>
      <S.Wrapper>
        <ToastContainer autoClose={2000} />
        <S.Label style={{ height: '15px' }}>
          <div style={{ width: '70px' }}>{label}</div>
          {label === '인증번호' && (
            <S.CertificationNumberWrapper>
              <h4>
                <Timer count={count} setCount={setCount} setError={setError} />
              </h4>
              <h4
                onClick={handleResend}
                style={{ cursor: isResendDisabled ? 'not-allowed' : 'pointer' }}
              >
                {isResendDisabled ? '잠시만 기다려주세요...' : '재발송'}
              </h4>
            </S.CertificationNumberWrapper>
          )}
        </S.Label>
        <S.InputWrapper>
          <S.Input
            type={type}
            {...register}
            maxLength={maxLength}
            placeholder={placeholder}
            erroredStyle={errors}
            autoComplete='off'
            readOnly={readOnly || expired}
          />
        </S.InputWrapper>
        <S.Label erroredStyle={errors}>{errors && message}</S.Label>
      </S.Wrapper>
      <ToastContainer autoClose={1000} />
      <div>
        <Toaster position='top-right' reverseOrder={true} />
      </div>
    </>
  )
}
