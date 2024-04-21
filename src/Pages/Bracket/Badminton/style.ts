import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 40.5rem;
  display: grid;
  gap: 2.5rem;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 80%;
  margin: 0 auto;
  border: 1px solid var(--Gray2, #6f6f7b);
`;

export const GridItem = styled.div<{ diagonal?: string }>`
  color: #fff;

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
`;
