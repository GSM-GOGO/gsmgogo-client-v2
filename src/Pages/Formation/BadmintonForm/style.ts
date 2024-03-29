import styled from 'styled-components';

export const PlayerContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 0.125rem;
  position: relative;
`;

export const PlayerText = styled.p`
  color: var(--White, #fff);
  text-align: center;
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem;
  margin: 0;
`;

export const ImgBox = styled.div<{ img: string }>`
  width: 452px;
  height: 319px;
  background: url(${({ img }) => img});
  background-repeat: no-repeat;
`;

export const MiniText = styled.p`
  color: var(--Gray2, #6f6f7b);
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem;
`;

export const DeleteBtn = styled.button`
  display: flex;
  width: 6.25rem;
  height: 2.5rem;
  padding: 0.75rem 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
  border-radius: 0.5rem;
  border: 1px solid var(--Gray2, #6f6f7b);
  background: var(--Black, #1c1c1f);
  cursor: pointer;
`;

export const DeleteText = styled.p`
  color: var(--Gray2, #6f6f7b);
  text-align: center;
  font-family: 'Pretendard Variable';
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.125rem;
  padding: 0;
`;
