import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 35rem;
`;

export const ContainerResponse = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const ListWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1.5rem;
  height: calc(100vh - 9.75rem);
  position: relative;
`;

export const ListContainer = styled.div`
  display: flex;
`;

export const List = styled.div`
  padding: 1.5rem 1rem;
  width: 100%;
  height: 4.25rem;
  border-radius: 0.75rem;
  font-size: 0.875rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;

  background: #26262a;
  justify-content: space-between;
`;

export const TextContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;

  @media screen and (max-width: 500px) {
    gap: 1rem;
  }
`;

export const WinText = styled.p`
  line-height: 1.375rem;
  color: #23f69a;
  font-family: pretendard;
  font-size: 1rem;
  font-weight: 400;
  margin: 0;

  @media screen and (max-width: 500px) {
    font-size: 0.75rem;
  }
`;

export const TeamTextContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const TeamName = styled.p`
  line-height: 1.375rem;
  margin: 0;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  font-family: pretendard;

  @media screen and (max-width: 500px) {
    font-size: 0.75rem;
  }
`;

export const TeamClass = styled.p`
  line-height: 1.25rem;
  margin: 0;
  color: #6f6f7b;
  font-size: 0.875rem;
  font-weight: 400;
  font-family: pretendard;

  @media screen and (max-width: 500px) {
    font-size: 0.5rem;
  }
`;

export const Stroke = styled.div`
  width: 100%;
  height: 0.0625rem;
  background-color: #44444b;
`;

export const FormationButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 0.0625rem solid #b7b7be;
  color: #b7b7be;
  cursor: pointer;
  font-family: Pretendard;
  font-size: 0.875rem;
  line-height: 1.25rem;
  border-radius: 0.75rem;
  padding: 0.5rem 1.25rem;
  font-weight: 400;

  @media screen and (max-width: 500px) {
    font-size: 0.75rem;
  }
`;

export const CheerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #23f69a;
  border: none;
  color: #1c1c1f;
  cursor: pointer;
  font-family: Pretendard;
  font-size: 0.875rem;
  line-height: 1.25rem;
  border-radius: 0.75rem;
  padding: 0.5rem 1.25rem;
  font-weight: 400;

  @media screen and (max-width: 500px) {
    font-size: 0.75rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media screen and (max-width: 500px) {
    gap: 1.2rem;
  }
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
  height: 10.5rem;
  background-color: #1d1d1d;
  border-radius: 0.875rem;
  padding: 1.1875rem 0 0 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const ModalTextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  align-items: center;
`;

export const ModalTitleContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  width: 14.875rem;
  height: 2.75rem;
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
  height: 2.75rem;
`;

export const ModalNovel = styled.p`
  text-align: center;
  margin: 0;
  font-weight: 400;
  font-size: 0.875rem;
  font-family: pretendard;
  color: #6f6f7b;
  line-height: 1.25rem;
`;

export const ModalButtonContainer = styled.div`
  width: 100%;
  height: 2.75rem;
  display: flex;
`;

export const ModalCencleButton = styled.div`
  line-height: 1.375rem;
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
  line-height: 1.375rem;
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

export const AddButton = styled.div`
  cursor: pointer;

  svg {
    position: absolute;
    bottom: 2.5rem;
    right: 1.5rem;
  }
`;

export const SvgContainer = styled.div`
  margin-top: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 650px) {
    margin-top: 12.5em;
    width: 30rem;
  }
  @media (max-width: 500px) {
    width: 27.5rem;
  }
  @media (max-width: 450px) {
    margin-top: 2rem;
    width: 20rem;
  }
`;
