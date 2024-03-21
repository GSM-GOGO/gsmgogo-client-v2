import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 37.5rem;
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

export const CategoryContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 40px;
  display: flex;
  gap: 28px;
`;

export const Category = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #6f6f7b;
`;

export const ListWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 16px;
`;

export const ListContainer = styled.div`
  display: flex;
`;

export const List = styled.div`
  padding: 0px 1rem;
  width: 100%;
  height: 54px;
  border-radius: 0.5rem;
  font-size: 0.875rem;

  background: #26262a;
`;

export const Button = styled.button`
  border: none;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  font-weight: 600;
  font-size: 1.125rem;
  color: #fff;
  align-items: center;
  background-color: #fcc300;
  width: 100%;
  height: 3.25rem;
`;
