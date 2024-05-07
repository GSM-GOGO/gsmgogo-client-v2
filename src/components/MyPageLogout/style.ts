import styled from 'styled-components';

export const FirstHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FirstHeaderTitleContainer = styled.div`
  width: fit-content;
`;

export const FirstHeaderTitleContainerResponse = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Title = styled.p`
  font-family: Pretendard;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.9375rem;
  color: #fff;
  margin: 0;

  @media screen and (max-width: 570px) {
    font-size: 1.25rem;
  }
`;

export const LogoutContainer = styled.div`
  width: 5.375rem;

  cursor: pointer;
`;

export const LogoutContainerResponse = styled.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;
`;

export const LogoutText = styled.p`
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
  margin: 0;

  color: #df454a;
`;
