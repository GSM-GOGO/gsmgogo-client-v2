import styled from 'styled-components';

interface MoneyBoxProps {
  active: boolean;
}

export const Wrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 154px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Container = styled.div`
  width: 40.5rem;
  height: 100%;
`;
export const ContainerResponse = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const ComponentsWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  margin: auto 0;
`;

export const ResultText = styled.p`
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 600;
  line-height: 31px;
  text-align: center;
  color: #23f69a;
  margin: 0;
`;

export const ImgBox = styled.img`
  width: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ButtonWrapper = styled.div`
  margin-top: 2.0625rem;
  width: 25rem;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  justify-content: space-around;
`;
export const CoinButton = styled.button`
  width: 11.25rem;
  height: 3.25rem;
  box-sizing: border-box;
  padding: 0.75rem 2rem;
  background-color: #23f69a;
  border-radius: 0.5rem;
  border: none;

  font-family: Pretendard;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.625rem;
  text-align: center;
  color: #1c1c1f;
  cursor: pointer;
`;

export const AtomWrapper = styled.div`
  width: 23.375rem;
`;

export const AtomContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.p`
  font-family: Pretendard;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem;
  text-align: center;
  color: #b7b7be;
  margin: 0;
  margin-top: 1.25rem;
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
  height: 11.625rem;
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
  align-items: center;
  gap: 0.25rem;
`;

export const ModalTitleContainer = styled.div`
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.375rem;
  text-align: center;
  color: #fff;
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
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: center;
  color: #6f6f7b;
  margin: 0;
`;

export const CoinInputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const CoinInput = styled.input`
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  width: 14.375rem;
  height: 3rem;
  padding: 0.8125rem 1rem;
  border-radius: 0.5rem;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: #26262a;

  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.375rem;
  color: #fff;

  &::placeholder {
    color: #6f6f7b;
  }
`;

export const CoinIconCotainer = styled.div`
  position: absolute;
  right: 2.1875rem;
  top: 1rem;
`;

export const ModalButtonContainer = styled.div`
  width: 100%;
  margin-top: 0.3125rem;
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
  height: 44px;
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

export const SelectMoney = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  gap: 0.25rem;
  margin-bottom: 1rem;
`;

export const MoneyBox = styled.button<MoneyBoxProps>`
  display: flex;
  padding: 0.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.5rem;
  background: ${({ active }) => (active ? 'var(--Main, #23F69A)' : 'var(--colors-gray-gray-900, #26262A)')};
  color: ${({ active }) => (active ? 'var(--Black, #1C1C1F)' : 'var(--Gray1, #B7B7BE)')};
  border: none;
  cursor: pointer;
`;

export const MoneyText = styled.p`
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
`;
