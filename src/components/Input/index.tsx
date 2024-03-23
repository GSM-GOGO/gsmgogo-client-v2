import { ReactElement, useEffect } from "react";
import { UseFormRegisterReturn, UseFormSetError } from "react-hook-form";
import * as S from "./style";
import { useState } from "react";
import Timer from "../Timer";
import { FormData } from "../../types/FormDataType";

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
}

export type userCount = {
  userCnt: number;
}

export default function Input({ label, errors, message, register, type = "tel", maxLength, placeholder, readOnly, setError, reset }: Props) {
  const validtime = 10; // 인증번호 시간
  const [count, setCount] = useState(validtime);
  const [expired, setExpired] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [clickedCount, setClickedCount] = useState(0)

  useEffect(() => {
    if (count === 0) {
      setExpired(true);
    }
  }, [count]);

  useEffect(() => {
    if (clickedCount >= 3) {
      setButtonDisabled(true); // 클릭 횟수가 3회 이상이면 버튼 비활성화
    }
  }, [clickedCount]);

  const resetTimer = () => {
    setCount(validtime);
    setExpired(false);
    if (setError) {
      setError("verificationCode", { type: "manual", message: "" });
    }
    if (reset) {
      reset();
    }
  };

  const userBtnClick = () => {
    if(clickedCount < 3) {
      console.log(clickedCount)
      setClickedCount((prev) => prev + 1);
    } else {
      console.log("초과");
    }
  }

  return (
    <S.Wrapper>
      <S.Label style={{ height: "15px" }}>
        <div style={{ width: "70px" }}>{label}</div>
        {label == "인증번호" && (
          <S.CertificationNumberWrapper>
            <h4>
              <Timer count={count} setCount={setCount} setError={setError} />
            </h4>
            <h4 onClick={() => {
                if (!buttonDisabled) {
                  resetTimer();
                  userBtnClick();
                }
              }}
              style={{ 
                cursor: buttonDisabled ? "not-allowed" : "pointer",
                color: buttonDisabled ? "var(--Error, #DF454A)" : "var(--Gray2, #6F6F7B)",
              }}>재발송</h4>
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
