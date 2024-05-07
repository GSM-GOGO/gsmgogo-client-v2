import styled from 'styled-components';

export const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FixedFilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FixedFilter = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const FilterV1 = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 0.75rem;
  gap: 0.25rem;
  border-radius: 0.75rem;
  background-color: #23f69a;
  cursor: pointer;

  font-family: Pretendard;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem;

  @media screen and (max-width: 570px) {
    font-size: 0.625rem;
    padding: 0.25rem 0.375rem;
  }
`;

export const FilterV2 = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 0.75rem;
  gap: 0.25rem;
  border-radius: 0.75rem;
  background-color: #26262a;
  cursor: pointer;

  font-family: Pretendard;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem;
  color: #fff;

  @media screen and (max-width: 570px) {
    font-size: 0.625rem;
    padding: 0.25rem 0.375rem;
  }
`;

export const SelectFilterContainer = styled.div`
  display: flex;
  gap: 1rem;

  @media screen and (max-width: 570px) {
    gap: 0.5rem;
  }
`;

export const SelectFilter = styled.div`
  padding: 0.5rem 1.25rem;
  border-radius: 0.75rem;
  border: 0.0625rem solid #23f69a;
  background: #23f69a1a;

  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.375rem;

  color: #23f69a;

  cursor: pointer;

  @media screen and (max-width: 570px) {
    font-size: 0.75rem;
    padding: 0.25rem 0.625rem;
  }
`;

export const DisabledSelectFilter = styled.div`
  padding: 0.5rem 1.25rem;
  border-radius: 0.75rem;
  border: 0.0625rem solid #6f6f7b;

  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.375rem;
  color: #6f6f7b;

  cursor: pointer;

  @media screen and (max-width: 570px) {
    font-size: 0.75rem;
    padding: 0.25rem 0.625rem;
  }
`;

export const ViewSelectFilterContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  align-self: flex-end;
`;

export const ViewSelectFilter = styled.div`
  padding: 0.5rem 0.5rem 0.5rem 0.75rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  background: #b7b7be1a;

  font-family: Pretendard;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem;
  color: #b7b7be;

  cursor: pointer;

  @media screen and (max-width: 570px) {
    font-size: 0.625rem;
    padding: 0.25rem 0.25rem 0.25rem 0.375rem;
  }
`;
