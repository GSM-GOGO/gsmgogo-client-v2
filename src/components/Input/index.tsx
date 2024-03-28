import { ReactElement, useEffect } from 'react';
import { UseFormRegisterReturn, UseFormSetError } from 'react-hook-form';
import * as S from './style';
import { useState } from 'react';
import Timer from '../Timer';
import { FormData } from '../../types/FormDataType';
import apiClient from '../../utils/libs/apiClient';

interface Props {
  label: string;
  errors: boolean;
  message?: string;
  placeholder: string;
  register?: UseFormRegisterReturn;
  type?: string;
  fixed?: string | ReactElement;
  maxLength?: number;
  readOnly?: boolean;
  setError?: UseFormSetError<FormData>;
  reset?: (values?: FormData) => void;
  resendLimitMessage?: string;
  phoneNumber: string;
}

export type userCount = {
  userCnt: number;
};

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
  const validtime = 180; // 인증번호 시간
  const [count, setCount] = useState(validtime);
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    if (count === 0) {
      setExpired(true);
    }
  }, [count]);

  const resetTimer = () => {
    setCount(validtime);
    setExpired(false);
    if (setError) {
      setError('verificationCode', { type: 'manual', message: '' });
    }
    if (reset) {
      reset();
    }
  };

  return (
    <S.Wrapper>
      <S.Label style={{ height: '15px' }}>
        <div style={{ width: '70px' }}>{label}</div>
        {label == '인증번호' && (
          <S.CertificationNumberWrapper>
            <h4>
              <Timer count={count} setCount={setCount} setError={setError} />
            </h4>
            <h4
              onClick={async () => {
                resetTimer();
                try {
                  const token = localStorage.getItem('accessToken');
                  await apiClient.post(
                    `/auth/sms/test`,
                    {
                      phone_number: phoneNumber,
                    },
                    {
                      headers: {
                        Authorization: `${token}`,
                      },
                    }
                  );
                } catch (e) {
                  alert('올바른 아이디와 비밀번호를 입력해주세요.');
                }
                console.log(phoneNumber);
              }}
            >
              재발송
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
          autoComplete="off"
          readOnly={readOnly || expired}
        />
      </S.InputWrapper>
      <S.Label erroredStyle={errors}>{errors && message}</S.Label>
    </S.Wrapper>
  );
}
