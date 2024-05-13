import styled from 'styled-components';

interface DateContainerProps {
  selected?: boolean;
}

export const Wrapper = styled.div`
  height: calc(100vh - 154px);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 550px) {
    height: 100vh;
  }

`;

export const Container = styled.div`
  width: 40.5rem;
  height: 100%;
`;

export const ContainerResponse = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const WeatherWrapper = styled.div`
  display: inline-flex;
  align-items: flex-start;
  justify-content: center;
  gap: 1.75rem;

  margin-bottom: 1rem;
  
  @media (max-width: 650px) {
    gap: 1.25rem;
  }
  @media (max-width: 550px) {
    gap: 0.75rem;
    margin-bottom: 0;
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

export const InfoContainer = styled.div`
  display: inline-flex;
  padding: 0.75rem 2.5rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
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
  span {
    color: #df454a;
  }

  @media (max-width: 400px) {
    font-size: 0.75rem;
  }
`;

export const Text1 = styled.div<{ color?: boolean }>`
  color: ${({ color }) => (color ? 'var(--Main, #23F69A)' : ' #fff')};
  text-align: center;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem;
`;

export const Text2 = styled.div<{ color?: boolean }>`
  color: ${({ color }) => (color ? 'var(--Main, #23F69A)' : ' #fff')};
  text-align: center;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem;
`;

export const Contour = styled.div`
  width: 0.0625rem;
  height: 2.5rem;
  background: var(--colors-gray-gray-800, #44444b);
`;

export const ButtonWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ButtonContainer = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(3, 7.5rem);
  grid-template-rows: repeat(3, 6rem);
  margin: 2rem;

  @media (max-width: 500px) {
    grid-template-columns: repeat(3, 5rem);
    grid-template-rows: repeat(3, 4rem);
    margin: 1rem;
  }
`;

export const ButtonIMG = styled.img`
  width: 10rem;

  @media (max-width: 500px) {
    width: 7rem;
  }
`;

export const ButtonText = styled.div`
  text-align: center;
  -webkit-text-stroke-width: 1;
  -webkit-text-stroke-color: #000;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.375rem;
  background: linear-gradient(118deg, #d6d6d6 10.26%, #a5a5a5 99.72%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: absolute;
  bottom: 0.5rem;
  
  @media (max-width: 500px) {
    font-size: 0.7rem;
    bottom: 0.1rem;
  }
  left: 50%;
  transform: translateX(-50%);
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10rem;
`;

export const Button = styled.div<{ color?: boolean|number }>`
  display: flex;
  width: 18.75rem;
  height: 3.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
  border-radius: 0.5rem;
  cursor: pointer;
  background: ${({ color }) => (color ? 'var(--Main, #23F69A)' : '#44444B')};
  color: ${({ color }) => (color ? 'var(--Black, #1C1C1F)' : 'var(--Gray1, #B7B7BE)')};
  font-family: Pretendard;
  font-size: 1.125rem;
  font-weight: 500;
`;

export const Info =  styled.div<{ color?: boolean }>`

display: inline-flex;
padding: 0.75rem 1.25rem;
flex-direction: column;
align-items: flex-start;
gap: 0.625rem;
border-radius: 3.125rem;
background: ${({ color }) => (color ? 'var(--Main, #23F69A)' : 'var(--colors-gray-gray-900, #26262A)')};
color: ${({ color }) => (color ? '#1C1C1F' : '#FFF')};
text-align: center;
/* BodyLarge */
font-family: Pretendard;
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: 1.375rem;
`;