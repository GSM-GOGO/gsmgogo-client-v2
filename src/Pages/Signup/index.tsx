import Input from '../../components/Input';
import { useForm } from 'react-hook-form';
import { Form, InputWrapper, SubmitWrapper } from './style';
import * as S from './style';
import { useState } from 'react';
import { Logo } from '../../assets/svg';
import { FormData } from '../../types/FormDataType';
import { useAsyncError, useNavigate } from 'react-router-dom';
import apiClient from '../../utils/libs/apiClient';

export default function SignUp() {
  const navigate = useNavigate();

  const [showVerification, setShowVerification] = useState(false);
  const [phoneNumber, setPhoneNuber] = useState('');
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
    reset,
  } = useForm<FormData>({ mode: 'onChange' });

  const onSubmit = async (data: FormData) => {
    if (!showVerification) {
      console.log('전화번호가 제출되었습니다', data.phoneNumber);
      setPhoneNuber(data.phoneNumber);
      try {
        const token = localStorage.getItem('accessToken');
        await apiClient.post(
          `/auth/sms/test`,
          {
            phone_number: data.phoneNumber,
          },
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );

        setShowVerification(true);
      } catch (e) {
        alert('올바른 아이디와 비밀번호를 입력해주세요.');
      }
    } else {
      const verificationCode = data.verificationCode.toString();
      console.log(typeof verificationCode);
      try {
        const token = localStorage.getItem('accessToken');
        await apiClient.post(`/auth/verify?code=${verificationCode}`, {
          headers: {
            Authorization: `${token}`,
          },
        });
      } catch (e) {
        setError('verificationCode', {
          type: 'manual',
          message: '인증번호가 올바르지 않습니다',
        });
      }
      // if (data.verificationCode !== '123456') {
      //   setError('verificationCode', {
      //     type: 'manual',
      //     message: '인증번호가 올바르지 않습니다',
      //   });
      // } else {
      //   console.log('인증번호가 제출되었습니다', data.verificationCode);
      // }
    }
  };

  const handleButtonClick = () => {
    if (showVerification) {
      // 이전으로
      setShowVerification(false);
      reset();
    } else {
      navigate(`/`);
    }
  };

  return (
    <S.Layout>
      <S.Wrapper>
        <S.Logo>
          <Logo />
        </S.Logo>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputWrapper>
            <Input
              maxLength={11}
              label="전화번호"
              readOnly={showVerification}
              errors={!!errors.phoneNumber}
              message={errors.phoneNumber?.message}
              placeholder="전화번호를 입력해주세요"
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
                label="인증번호"
                errors={!!errors.verificationCode}
                message={errors.verificationCode?.message}
                setError={setError}
                reset={() => reset({ verificationCode: '' })}
                placeholder="재발송 3번 초과 시 24시간 후 시도할 수 있습니다"
                register={register('verificationCode', {
                  required: '인증번호를 입력하지 않았습니다',
                  pattern: {
                    value: /^[0-9]{6}$/,
                    message: '인증번호는 6자리의 숫자로 입력해주세요',
                  },
                })}
                resendLimitMessage="재발송 3번 초과 시 24시간 후 시도할 수 있습니다"
                phoneNumber={phoneNumber}
              />
            )}
          </InputWrapper>
          <SubmitWrapper>
            <S.ButtonContainer>
              <S.BeforeButton type="button" onClick={handleButtonClick}>
                {showVerification ? '이전으로' : '넘어가기'}
              </S.BeforeButton>
              <S.CertificationButton
                type="submit"
                SubmitOK={Object.keys(errors).length === 0}
                disabled={Object.keys(errors).length !== 0}
              >
                {showVerification ? '인증하기' : '인증번호'}
              </S.CertificationButton>
            </S.ButtonContainer>
          </SubmitWrapper>
        </Form>
      </S.Wrapper>
    </S.Layout>
  );
}
