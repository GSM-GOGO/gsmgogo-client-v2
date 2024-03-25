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
  margin-bottom: 3rem;
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
  margin-bottom: 4rem;
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

export const TeamInputContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 2rem;
`

export const TeamInputBox = styled.div`
  display: flex;
  width: 37.5rem;
  padding: 1rem 1.5rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.75rem;
  border: 1px solid var(--colors-gray-gray-800, #44444B);
`

export const TeamInput = styled.input`
  width: 100%;
  color: var(--White, #FFF);
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem;
  outline: none;
  background: var(--Black, #1C1C1F);
  border: none;
`

export const TeamInputText = styled.span`
  color: var(--White, #FFF);
  text-align: center;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem;
`

export const FormationBtn = styled.button`
  display: flex;
  position: fixed;
  bottom: 7.5%;
  width: 20rem;
  height: 3.25rem;
  padding: 0.75rem 2rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
  border-radius: 0.5rem;
  background: var(--colors-gray-gray-800, #44444B);
  border: none;
  cursor: pointer;
`

export const FormationText = styled.p`
  color: var(--Gray1, #B7B7BE);
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.625rem;
`

export const NormalTeamContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
`

export const TeamAssign = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
`

export const TeamAssignSpan = styled.span`
  color: var(--Gray2, #6F6F7B);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem;
`

export const MapTeamMember = styled.div`
  display: flex;
  width: 37.5rem;
  padding: 1rem 1.5rem;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.75rem;
  background: var(--colors-gray-gray-900, #26262A);
  margin-bottom: 1rem;
  cursor: pointer;
`

export const MemberList = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--White, #FFF);
  text-align: center;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem;
`

export const MemberSelected = styled.div`
  display: flex;
  width: 37.5rem;
  align-items: flex-start;
  gap: 0.75rem;
`

export const MemberSelectList = styled.div`
  display: flex;
  padding: 0.5rem 0.75rem 0.5rem 1rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.75rem;
  border: 1px solid var(--colors-gray-gray-800, #44444B);
`

export const MemberName = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  color: var(--Gray1, #B7B7BE);
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.375rem;
`

export const overScroll = styled.div`
  height: 35rem;
  overflow: auto;
`