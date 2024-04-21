import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  height: calc(100vh - 3.9375rem);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 25rem;
  text-align: -webkit-center;
`;

export const Rouletteimg = styled.img<{ isspin?: number | undefined }>`
  width: 100%;

  @media screen and (max-width: 500px) {
    width: 90%;
  }

  ${(props) =>
    props.isspin &&
    css`
      animation: rotateImage 1.5s linear infinite;
    `}

  @keyframes rotateImage {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const Button = styled.button<{ ishidden?: number | undefined; close?: number | undefined }>`
  margin-top: 4.5rem;
  display: flex;
  width: 15rem;
  height: 3.25rem;
  padding: 0.75rem 2rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
  border-radius: 0.5rem;
  border: ${(props) => (props.close ? 'var(--colors-gray-gray-800, #44444B)' : '1px solid var(--Main, #23f69a)')};
  background: ${(props) => (props.close ? 'var(--colors-gray-gray-800, #44444B)' : 'var(--Main, #23F69A)')};
  cursor: pointer;
  ${(props) =>
    props.ishidden &&
    css`
      visibility: hidden;
    `}
`;

export const Text = styled.p<{ close?: number | undefined }>`
  color: ${(props) => (props.close ? 'var(--Gray1, #B7B7BE)' : 'var(--Black, #1c1c1f)')};
  text-align: center;
  font-family: Pretendard;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.625rem;
`;

export const SubMent = styled.p`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem;
  margin: 0;
`;

export const Ment = styled.p`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.6875rem;
  margin: 0;
`;

export const MentContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  display: grid;
  width: 20rem;
  gap: 1rem;
`;
