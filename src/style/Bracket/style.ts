import styled from 'styled-components';

type WinORLoseType = {
  Win?: boolean;
};

export const NomalBracket = styled.div<WinORLoseType>`
  width: 8.0625rem;
  height: 2.75rem;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  border: ${({ Win }) => (Win ? '1px solid var(--Main, #23F69A)' : '1px solid var(--Gray2, #6F6F7B)')};

  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: Pretendard;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem;
  color: ${({ Win }) => (Win ? 'var(--Main, #23F69A)' : Win === undefined ? '#FFF' : 'var(--Gray2, #6F6F7B)')};
`;
