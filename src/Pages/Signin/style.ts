import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 46.875rem;
  height: 40.625rem;
`;

export const ContainerResponse = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 52px;
`;

export const ImgBox = styled.img`
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const GauthLoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  max-width: 17rem;
  max-height: 5rem;
  white-space: nowrap;
  background: black;
  border: 0.25rem solid #fff;
  color: #2e80cc;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 1.5469rem;
  padding: 1.0125rem 0;
  font-weight: 600;
  outline: none;
  color: #23f69a;
`;
