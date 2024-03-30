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

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  background: #000000b2;
  z-index: 100;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 16.875rem;
  height: 10.5rem;
  background-color: #1d1d1d;
  border-radius: 0.875rem;
  padding: 1.1875rem 0 0 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const ModalTextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  align-items: center;
`;

export const ModalTitleContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  width: 14.875rem;
  height: 2.75rem;
`;

export const ModalTitle = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 1rem;
  font-family: pretendard;
  color: #fff;
`;

export const ModalNovelContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  width: 14.875rem;
  height: 2.75rem;
`;

export const ModalNovel = styled.p`
  text-align: center;
  margin: 0;
  font-weight: 400;
  font-size: 0.875rem;
  font-family: pretendard;
  color: #6f6f7b;
  line-height: 1.25rem;
`;

export const ModalButtonContainer = styled.div`
  width: 100%;
  height: 2.75rem;
  display: flex;
`;

export const ModalCencleButton = styled.div`
  line-height: 1.375rem;
  border-top: 0.0206rem solid #545458a6;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8.4269rem;
  height: 2.75rem;
  cursor: pointer;

  color: #6f6f7b;
  font-size: 1.0625rem;
  font-weight: 400;
  font-family: pretendard;
`;

export const ModalCheerButton = styled.div`
  line-height: 1.375rem;
  border-top: 0.0206rem solid #545458a6;
  border-left: 0.0206rem solid #545458a6;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8.4269rem;
  height: 2.75rem;
  cursor: pointer;

  color: #23f69a;
  font-size: 1.0625rem;
  font-weight: 400;
  font-family: pretendard;
`;

export const AddButton = styled.div`
  cursor: pointer;

  svg {
    position: absolute;
    bottom: 2.5rem;
    right: 1.5rem;
  }
`;
