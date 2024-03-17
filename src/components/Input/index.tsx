import { ReactElement } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import * as S from "./style";

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
}

export default function Input({ label, errors, message, register, type = "tel", maxLength, placeholder, readOnly }: Props) {
  return (
    <S.Wrapper>
      <S.Label style={{ height: "15px" }}>
        <div style={{ width: "70px" }}>{label}</div>
        {label == "인증번호" && (
          <S.CertificationNumberWrapper>
            <h4>5:00</h4>
            <h4>재발송</h4>
          </S.CertificationNumberWrapper>
        )}
      </S.Label>
      <S.InputWrapper>
        <S.Input type={type} {...register} maxLength={maxLength} placeholder={placeholder} erroredStyle={errors} autoComplete="off" readOnly={readOnly} />
      </S.InputWrapper>
      <S.Label  erroredStyle={errors}>{message && message}</S.Label>
    </S.Wrapper>
  );
}
