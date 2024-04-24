import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 40.5rem;
  padding: 1rem;
  display: grid;
  gap: 2.5rem;
  margin-top: 1.5rem;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  margin: 0 auto;
  border: 1px solid var(--Gray2, #6f6f7b);
`;

export const GridItem = styled.div<{ diagonal?: string }>`
  color: #fff;
  flex-direction: column;
  text-align: center;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4.15rem;
  border: 1px solid var(--Gray2, #6f6f7b);
  background: ${(props) =>
    props.diagonal &&
    `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><line x1="100%" y1="100%" x2="0" y2="0" stroke="gray" /></svg>')`};

  @media screen and (max-width: 550px) {
    font-size: 0.8rem;
  }
`;

export const BeforeButtonCotainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

export const BeforeButton = styled.button`
  width: 320px;
  height: 52px;
  border-radius: 8px;
  border: 1px solid #23f69a;
  color: #23f69a;
  background-color: transparent;

  font-family: Pretendard;
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
  text-align: center;

  cursor: pointer;
`;

export const TopMentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  gap: 0.5rem;

  @media (max-width: 500px) {
    display: block;
  }
`;

const Ment = styled.p`
  margin: 0;
  font-family: Pretendard;
  font-weight: 400;
  font-size: 1rem;

  @media (max-width: 620px) {
    font-size: 0.7rem;
  }
`;

export const Ment1 = styled(Ment)`
  color: var(--Main, #23f69a);
`;

export const Ment2 = styled(Ment)`
  color: #fff;
`;

export const Ment3 = styled(Ment)`
  color: var(--Gray1, #b7b7be);
  font-size: 0.875rem;

  @media (max-width: 550px) {
    font-size: 0.48rem;
  }
`;
