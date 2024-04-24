import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 40.5rem;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-items: center;
  gap: 1.5rem;
`;

export const LankWrapper = styled(Wrapper)`
  width: 100%;
  gap: 1.25rem;
  align-items: flex-end;
`;

export const LankContainer = styled.div`
  display: grid;
  position: relative;
  gap: 0.5rem;
  text-align: center;
`;

export const ListWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 1.5rem;
`;

export const ListContainer = styled.div`
  display: flex;
`;

export const List = styled.div<{ myrank: boolean }>`
  padding: 1rem 1.3rem;
  margin: 0 1rem;
  border-radius: 0.75rem;
  font-size: 0.875rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  background: #26262a;
  justify-content: space-between;
  border: ${(props) => (props.myrank ? '1px solid var(--Main, #23F69A)' : 'none')};
`;

export const TextContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

export const Text = styled(TextContainer)`
  gap: 0.5rem;
`;

export const Name = styled.p`
  margin: 0;
  color: #fff;
  font-size: 1rem;
  font-weight: 400;
  font-family: pretendard;
`;

export const Win = styled(Name)`
  position: absolute;
  bottom: 1rem;
  justify-self: center;
`;

export const Lank = styled.p<{ rank?: boolean }>`
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  font-family: pretendard;
  color: ${(props) => (props.rank ? 'rgba(35, 246, 154, 1)' : 'rgba(183, 183, 190, 1)')};
`;

export const Point = styled.p`
  margin: 0;
  color: rgba(35, 246, 154, 1);
  font-size: 0.875rem;
  font-weight: 400;
  font-family: pretendard;
`;

export const Stroke = styled.div`
  margin: 0.3rem 1rem;
  height: 0.0625rem;
  background-color: #44444b;
`;
