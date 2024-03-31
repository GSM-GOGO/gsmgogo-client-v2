import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 40.5rem;
`;

export const ContainerResponse = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
  /* align-items: center; */
`;

export const TeamTitleContainer = styled.div`
  margin-top: 1.25rem;
  margin-bottom: 2.5rem;
  display: flex;
  justify-content: space-between;
`;

export const TeamTextContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const DeleteButton = styled.button`
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

  color: var(--Gray2, #6f6f7b);
  text-align: center;
  font-family: 'Pretendard Variable';
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.125rem;
  padding: 0;
`;

export const TeamName = styled.p`
  margin: 0;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 600;
  font-family: pretendard;
  line-height: 1.9375rem;
  align-self: center;

  @media screen and (max-width: 500px) {
    font-size: 1.2rem;
  }
`;

export const TeamClass = styled.p`
  line-height: 1.375rem;
  margin: 0;
  color: #6f6f7b;
  font-size: 1rem;
  font-weight: 400;
  font-family: pretendard;
  align-self: flex-end;

  @media screen and (max-width: 500px) {
    font-size: 0.75rem;
  }
`;

export const ListWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 0.75rem;

  @media screen and (max-width: 680px) {
    margin: 0 1rem 0.75rem 1rem;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const List = styled.div`
  padding: 1rem 1.5rem;
  width: 100%;
  border-radius: 0.75rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: #26262a;
`;

export const ListTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface ContainerProps {
  active: boolean;
}

export const CandiateContainer = styled.div<ContainerProps>`
  display: ${(props) => (props.active ? 'flex' : 'none')};
  gap: 1rem;
  flex-wrap: wrap;
`;

export const CandiateButton = styled.div`
  width: 4.625rem;
  height: 2.375rem;
  box-sizing: border-box;
  padding: 0.5rem 0rem;
  border-radius: 0.75rem;
  display: flex;
  justify-content: center;

  border: 0.0625rem solid #44444b;

  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.375rem;
  text-align: left;

  color: #b7b7be;
`;

export const SportsText = styled.p`
  line-height: 1.375rem;
  margin: 0;
  font-weight: 600;
  font-size: 1rem;
  font-family: pretendard;
  color: #fff;
`;

export const ReturnButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ReturnButton = styled.button`
  width: 20rem;
  height: 3.25rem;
  padding: 0.75rem 2rem;
  background: #1c1c1f;

  border-radius: 0.5rem;
  border: 0.0625rem solid #23f69a;

  font-family: Pretendard;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.625rem;
  text-align: center;
  color: #23f69a;

  cursor: pointer;
`;
