import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import { Form, InputWrapper, SubmitWrapper } from "./style";
import * as S from "./style";
import { useState } from "react";
import { Logo } from "../../assets/svg";
import { FormData } from "../../types/FormDataType";
export default function SignUp() {
  
  const [showVerification, setShowVerification] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
    reset
  } = useForm<FormData>({ mode: "onChange" });

  const onSubmit = (data: FormData) => {
    if (!showVerification) {
      console.log("전화번호가 제출되었습니다", data.phoneNumber);
      setShowVerification(true); // 인증번호 input 보이기
    } else {
      if (data.verificationCode !== "123456") {
        setError("verificationCode", {
          type: "manual",
          message: "인증번호가 올바르지 않습니다",
        });
      } else {
        console.log("인증번호가 제출되었습니다", data.verificationCode);
      }
    }
  };
  const handleButtonClick = () => {
    if (showVerification) {
      // 이전으로
      setShowVerification(false);
      reset(); 
    } else {
      // 넘어가기
      console.log("넘어가기");
    }
  };

  return (
    <S.Layout>
      <S.Wrapper>
        <S.Logo>
          <Logo/>
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
              register={register("phoneNumber", {
                required: "전화번호를 입력하지 않았습니다",
                pattern: {
                  value: /^010[0-9]{8}$/,
                  message: "올바른 전화번호 형식을 입력해주세요",
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
                reset={() => reset({ verificationCode: "" })}
                placeholder="인증번호를 입력해주세요"
                register={register("verificationCode", {
                  required: "인증번호를 입력하지 않았습니다",
                  pattern: {
                    value: /^[0-9]{6}$/,
                    message: "인증번호는 6자리의 숫자로 입력해주세요",
                  },
                })}
              />
            )}
          </InputWrapper>
          <SubmitWrapper>
            <S.ButtonContainer>
              <S.BeforeButton type="button" onClick={handleButtonClick}>
                {showVerification ? "이전으로" : "넘어가기"}
              </S.BeforeButton>
              <S.CertificationButton type="submit" SubmitOK={Object.keys(errors).length === 0} disabled={Object.keys(errors).length !== 0}>
                {showVerification ? "인증하기" : "인증번호"}
              </S.CertificationButton>
            </S.ButtonContainer>
          </SubmitWrapper>
        </Form>
      </S.Wrapper>
    </S.Layout>
  );
}
