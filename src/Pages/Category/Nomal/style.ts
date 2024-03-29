import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 40.5rem;
`;

export const ContainerResponse = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const ListWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1.5rem;
  height: calc(100vh - 9.75rem);
  position: relative;
`;

export const ListContainer = styled.div`
  display: flex;
`;

export const List = styled.div`
  padding: 1.5rem 1rem;
  width: 100%;
  height: 4.25rem;
  border-radius: 0.75rem;
  font-size: 0.875rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;

  background: #26262a;
  justify-content: space-between;
`;

export const TextContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;
export const TeamTextContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const TeamClass = styled.p`
  margin: 0;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  font-family: pretendard;
  line-height: 1.375rem;

  @media screen and (max-width: 500px) {
    font-size: 0.855rem;
  }
`;

export const Stroke = styled.div`
  width: 100%;
  height: 0.0625rem;
  background-color: #44444b;
`;

export const CheckButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 0.0625rem solid #b7b7be;
  color: #b7b7be;
  cursor: pointer;
  font-family: Pretendard;
  font-size: 0.875rem;
  line-height: 1.25rem;
  border-radius: 0.75rem;
  padding: 0.5rem 1.25rem;
  font-weight: 400;

  @media screen and (max-width: 500px) {
    font-size: 0.75rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const AddButton = styled.div`
  cursor: pointer;

  svg {
    position: absolute;
    bottom: 2.5rem;
    right: 1.5rem;
  }
`;
