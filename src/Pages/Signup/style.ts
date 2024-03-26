import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background: rgba(28, 28, 31, 1);
  justify-content: center;
  align-items: center;
  place-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 554px;
  font-size: 20px;
  padding: 60px 40px 50px;
  @media (max-width: 550px) {
    width: 78vw;
    height: 101vw;
    padding: 11vw 7vw 9vw;
    font-size: 3.6364vw;
  }
`;
export const SubmitWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;

export const StyledButton = styled.button`
  width: 50%;
  height: 52px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
`;

export const BeforeButton = styled(StyledButton)`
  background: none;
  border: 1px solid rgba(35, 246, 154, 1);
  color: rgba(35, 246, 154, 1);
`;

export const CertificationButton = styled(StyledButton)<{ SubmitOK?: boolean }>`
  background: ${({ SubmitOK }) =>
    SubmitOK ? "rgba(35, 246, 154, 1)" : "rgba(68, 68, 75, 1)"};
  color: ${({ SubmitOK }) =>
    SubmitOK ? "rgba(28, 28, 31, 1)" : "rgba(183, 183, 190, 1)"};
`;

export const SuccessButton = styled(StyledButton)`
  background: rgba(35, 246, 154, 1);
  color: rgba(28, 28, 31, 1);
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InputWrapper = styled.div`
  width: 100%;
  margin-top: 60px;
  p {
    margin-top: 12px;
    font-weight: 400;
    font-size: 12px;
    color: #f03131;
  }

  @media (max-width: 550px) {
    margin-top: 20px;
  }
`;

export const Title = styled.h2`
  font-weight: 400;
  font-size: 12px;
  color: #1c1c1c;
`;

export const Logo = styled.div`
  margin-top: 10px;
  align-self: center;
`;
