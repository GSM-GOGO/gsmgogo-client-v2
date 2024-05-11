import styled from 'styled-components';

export const PlayingContainer = styled.div`
  /* display: flex;
  flex-direction:row;
  width: 100%;
  padding: 1rem 1.5rem;
  justify-content: space-between;
  align-items: center; */

  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 1rem 1.5rem;
  position: relative;
  justify-content: center;
  @media (max-width: 700px) {
    padding: 1rem 1.25rem;
  }
  @media (max-width: 650px) {
    width: 95%;
    padding: 1rem 1rem;
  }
  @media (max-width: 650px) {
    width: 90%;
    padding: 1rem 1rem;
  }
  @media (max-width: 500px) {
    width: 85%;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  justify-content: space-between;
  @media (max-width: 550px) {
    gap: 1rem;
  }
`;

export const EventContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const EventTexts = styled.div`
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.375rem;
  margin: 0;
  color: var(--Gray1, #b7b7be);
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

  @media (max-width: 370px) {
    gap: 0rem;
  }
`;

export const TeamName = styled.h3`
  color: #fff;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.375rem;
  margin: 0;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: var(--Gray2, #6f6f7b);
  }

  @media (max-width: 650px) {
    font-size: 0.75rem;
  }
`;

export const HoverTeamName = styled.h3`
  color: var(--Main, #23f69a);
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.375rem;
  margin: 0;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: var(--colors-main-main-900, #045d36);
  }

  @media (max-width: 650px) {
    font-size: 0.75rem;
  }
`;

export const TeamName1 = styled.h3`
  color: var(--White, #fff);
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

export const ForMedia = styled.div`
  /* width: 8.5rem; */
  /* @media (max-width: 650px) {
    width: 6.5rem;
  } */
`;

export const GradeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const GradeText1 = styled.p`
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem;
  margin: 0;
  @media (max-width: 650px) {
    font-size: 0.75rem;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;

export const GradeText2 = styled.p`
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

export const TimeText1 = styled.p`
  color: var(--Gray2, #6f6f7b);
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem;
  margin: 0;

  @media (max-width: 500px) {
    display: none;
  }
`;

export const TimeText2 = styled.p`
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
  background: var(--colors-gray-gray-800, #44444b);
`;

export const PredictContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 0.75rem;
  background: var(--colors-gray-gray-900, #26262a);
  width: 100%;
  padding: 1rem 1.5rem;

  @media (max-width: 700px) {
    padding: 1rem 1rem;
  }
  @media (max-width: 650px) {
    width: 95%;
    padding: 1rem 1rem;
  }
  @media (max-width: 650px) {
    width: 90%;
    padding: 1rem 1rem;
  }
  @media (max-width: 500px) {
    width: 85%;
  }
`;

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
  padding-top: 2rem;
  padding-bottom: 0.5rem;

  @media (max-width: 650px) {
    padding-top: 0.75rem;
  }
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
  color: var(--White, #fff);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  line-height: 1.25rem;
  margin: 0;
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
  gap: 0.5rem;
  flex-direction: column;
  justify-content: center;
  width: 14.875rem;
  div {
    font-size: 1rem;
    color: #23f69a;
  }
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

interface DateContainerProps {
  selected?: boolean;
}
export const WeatherWrapper = styled.div`
  display: inline-flex;
  align-items: flex-start;
  justify-content: center;
  gap: 1.75rem;

  margin-bottom: 2.5rem;
  @media (max-width: 650px) {
    gap: 1.25rem;
  }
  @media (max-width: 550px) {
    gap: 0.75rem;
    margin-bottom: 1.5rem;
  }
  @media (max-width: 450px) {
    gap: 0.35rem;
  }
`;

export const DateContainer = styled.div<DateContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  color: ${(props) => (props.selected ? 'var(--White, #FFF)' : 'var(--Gray2, #6F6F7B)')};
`;

export const DayText = styled.p`
  text-align: center;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.4rem;
  margin: 0;
  width: 2.1rem;
  @media (max-width: 550px) {
    font-size: 0.8rem;
    width: 1.75rem;
  }
  @media (max-width: 450px) {
    font-size: 0.7rem;
    width: 1.75rem;
  }
`;

export const MainContainers = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

export const VoteConatiner = styled.div`
  display: flex;
  padding: 0.5rem 1rem;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.75rem;

  @media (max-width: 500px) {
    padding: 0.5rem 0.75rem;
  }
`;

export const VoteText = styled.p`
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

export const ModalPointContainer = styled.div`
  display: flex;
  width: 14.375rem;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
`;

export const ModalPointInput = styled.input`
  display: flex;
  width: 100%;
  padding: 0.8125rem 1rem;
  justify-content: center;
  align-items: flex-start;
  gap: 5.4375rem;
  border-radius: 0.5rem;
  background: var(--colors-gray-gray-900, #26262a);
  border: none;
  outline: none;
  color: #fff;
`;

export const PText = styled.span`
  position: absolute;
  color: #fff;
  margin-right: 1rem;
`;

export const BottomText = styled.span`
  display: flex;
  justify-content: flex-start;
  width: 107.5%;
  margin-top: 1rem;

  @media (max-width: 650px) {
    width: 95%;
  }
`;

export const MatchResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  position: absolute;
  right: 16px;
`;

export const MatchResultText = styled.p`
  color: var(--White, #fff);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem;
  margin: 0;
  @media (max-width: 650px) {
    font-size: 0.7rem;
  }
`;

export const MatchScoreText = styled.p`
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem;
  margin: 0;
  color: var(--colors-gray-gray-400, #9f9fa8);

  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
`;

export const MatchScoreContainer = styled.div`
  display: flex;
  gap: 0.25rem;
`;

export const SuccessBetting = styled.p`
  color: var(--White, #fff);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem;
  margin: 0;
`;

export const SvgContainer = styled.div`
  margin-top: 9.25rem;
  display: flex;
  justify-content: center;

  @media (max-width: 650px) {
    margin-top: 7.5rem;
    width: 30rem;
  }
  @media (max-width: 500px) {
    width: 27.5rem;
  }
  @media (max-width: 450px) {
    margin-top: 0rem;
    width: 20rem;
  }
`;

export const contour = styled.div`
  border-radius: 5px;
  background: var(--colors-gray-gray-500, #878792);
  height: 16px;
  width: 1px;
  margin: 0 8px;
`;

export const matchResultContainer = styled.div`
  display: flex;
  gap: 1.5rem;
`;
