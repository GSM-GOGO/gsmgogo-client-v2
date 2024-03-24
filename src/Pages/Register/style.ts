import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
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
  flex-wrap: wrap;
`;

export const CategoryContainer = styled.div`
  margin-top: 1.25rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
`

export const Category = styled.div`
  font-family: Pretendard;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.9375rem;
  margin: 0;
`;

export const SubjectContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
`

export const SubjectText = styled.div`
  color: var(--White, #FFF);
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem;
`

export const SubjectBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`

export const SubjectOne = styled.div`
  display: flex;
  padding: 0.5rem 1.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.75rem;
  border: 1px solid var(--Gray2, #6F6F7B);
  cursor: pointer;
`

export const SubjectOneText = styled.p`
  color: var(--Gray2, #6F6F7B);
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem;
  margin: 0;
`