import styled from "styled-components";

export const PlayerContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 0.125rem;
  position: relative;
`

export const PlayerText = styled.p`
  color: var(--White, #FFF);
  text-align: center;
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem;
  margin: 0;
`

export const ImgBox = styled.div<{img : any}>`
  width: 365px;
  height: 550px;
  background: url(${({ img  }) => (img)});
  background-repeat: no-repeat;
`;