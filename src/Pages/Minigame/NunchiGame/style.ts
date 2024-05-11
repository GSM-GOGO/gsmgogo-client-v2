import styled from 'styled-components';

export const Wrapper = styled.div`
  height: calc(100vh - 3.9375rem);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 30rem;
  text-align: -webkit-center;
`;

export const InfoContainer = styled.div`
display: inline-flex;
padding: 0.75rem 2.5rem;
justify-content: center;
align-items: center;
gap: 1rem;
border-radius: 0.75rem;
border: 1px solid var(--Main, #23F69A);
background: var(--colors-gray-gray-900, #26262A);
`;

export const Text1 = styled.div`

color: #FFF;

text-align: center;
font-family: Pretendard;
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: 1.375rem; 
`;

export const Text2 = styled.div`
color: var(--Gray1, #B7B7BE);
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
background: var(--colors-gray-gray-800, #44444B);
`;

export const ButtonContainer = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: 100px 50px 100px;
  gap: 10px;
  width: 340px;
  height: 340px;
`;
