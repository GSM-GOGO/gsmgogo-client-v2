import styled from "styled-components";
type ErrorType = {
  erroredStyle ?: boolean;
};

export const Wrapper = styled.div`
  margin-bottom: 24px;
  position: relative;
`;

export const Label = styled.label<ErrorType>`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 12px;
  color: ${({ erroredStyle  }) => (erroredStyle  ? " #F03131" : "#929292")};
  margin-top:${({ erroredStyle  }) => (erroredStyle  ? "8px" : "")};
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input<ErrorType>`
  width: 100%;
  height: 44px;
  outline: none;
  border: none;
  border-bottom: 1px solid ${({ erroredStyle  }) => (erroredStyle  ? " #F03131" : "#929292")};
  color: white;
  background: transparent;
  font-size: 14px;
  @media (max-width: 550px) {
    height: 7.27vw;
  }
`;

export const CertificationNumberWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

