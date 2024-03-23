import styled from 'styled-components';

export const PlayingContainer = styled.div`
  display: flex;
  width: 37.5rem;
  padding: 1rem 1.5rem;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 650px) {
    width: 30rem;
  }
  @media (max-width: 500px) {
    width: 27.5rem;
  }
  @media (max-width: 450px) {
    width: 25rem;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  @media (max-width: 650px) {
    gap: 1rem;
  }
`;

export const EventContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const EventTexts = styled.h2`
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.375rem;
  margin: 0;
  @media (max-width: 650px) {
    font-size: 0.7rem;
  }
`;

export const GradeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.75rem;
`;

export const OneGrade = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const TeamName = styled.h3`
  color: #fff;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.375rem;
  margin: 0;
  @media (max-width: 650px) {
    font-size: 0.75rem;
  }
`;

export const ForMedia = styled.div`
  width: 6.25rem;
  @media (max-width: 650px) {
    width: 5rem;
  }
`;

export const GradeText = styled.p`
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem;
  margin: 0;
  @media (max-width: 650px) {
    font-size: 0.75rem;
  }
`;

export const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
`;

export const OneTimeBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const TimeText = styled.p`
  color: var(--Gray2, #6f6f7b);
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem;
  margin: 0;
`;

export const GrayLine = styled.div`
  width: 37.5rem;
  height: 0.0625rem;
  background: var(--colors-gray-gray-800, #44444B);
`;


export const PredictContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 0.75rem;
  background: var(--colors-gray-gray-900, #26262A);
`

export const PercentBar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const UnderTextBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1 0 0;
`;

export const WinORLosestyled = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const PredictPointBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const PredictText = styled.p`
  color: var(--White, #FFF);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  line-height: 1.25rem;
`;

export const PredictScoreBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  background: #000000b2;
  z-index: 100;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 16.875rem;
  background-color: #1d1d1d;
  border-radius: 0.875rem;
  padding: 1.1875rem 0 0 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const ModalTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;
`;

export const ModalTextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  justify-content: centers;
  align-items: center;
`;

export const ModalTitleContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  width: 14.875rem;
`;

export const ModalTitle = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 1rem;
  font-family: pretendard;
  color: #fff;
`;

export const ModalNovelContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  width: 14.875rem;
`;

export const ModalNovel = styled.p`
  text-align: center;
  margin: 0;
  font-weight: 400;
  font-size: 0.875rem;
  font-family: pretendard;
  color: #6f6f7b;
`;

export const ModalInputContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
`;

export const ModalInput = styled.input`
  background: #26262a;
  width: 2.5rem;
  height: 3rem;
  border-radius: 0.5rem;
  border: none;
  outline: none;
  text-align: center;

  font-size: 1rem;
  font-weight: 400;
  font-family: pretendard;
  color: #fff;
`;

export const ModalInputText = styled.p`
  margin: 0;
  font-size: 1rem;
  font-weight: 400;
  font-family: pretendard;
  color: #b7b7be;
`;

export const ModalButtonContainer = styled.div`
  width: 100%;
  height: 2.75rem;
  display: flex;
`;

export const ModalCencleButton = styled.div`
  border-top: 0.0206rem solid #545458a6;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8.4269rem;
  height: 2.75rem;
  cursor: pointer;

  color: #6f6f7b;
  font-size: 1.0625rem;
  font-weight: 400;
  font-family: pretendard;
`;

export const ModalCheerButton = styled.div`
  border-top: 0.0206rem solid #545458a6;
  border-left: 0.0206rem solid #545458a6;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8.4269rem;
  height: 2.75rem;
  cursor: pointer;

  color: #23f69a;
  font-size: 1.0625rem;
  font-weight: 400;
  font-family: pretendard;
`;

export const ModalInputError = styled.p`
  margin: 0;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  color: #df454a;
`;