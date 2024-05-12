import * as S from './style';

import { DeleteIcon, DisabledFilterIcon, SelectFilterIcon } from '@/assets';
import {
  BATTING_LABELS,
  FilterType,
  SPORTS_LABELS,
  SelectSportsType,
  SetSelectBattingType,
} from '@/types/MyPageFilter';

interface FilterComponentProps {
  activeFilter: FilterType | null;
  handleFilterClick: (filter: FilterType) => void;
  selectSports: SelectSportsType | null;
  handleSports: (sports: SelectSportsType | null) => void;
  selectBatting: SetSelectBattingType | null;
  handleBatting: (batting: SetSelectBattingType | null) => void;
}

const FilterComponent = ({
  activeFilter,
  handleFilterClick,
  selectSports,
  handleSports,
  selectBatting,
  handleBatting,
}: FilterComponentProps) => {
  return (
    <S.FilterContainer>
      <S.FixedFilterContainer>
        <S.FixedFilter>
          {activeFilter === 'sports' ? (
            <S.FilterV1 onClick={() => handleFilterClick('sports')}>
              <SelectFilterIcon />
              종목 필터
            </S.FilterV1>
          ) : (
            <S.FilterV2 onClick={() => handleFilterClick('sports')}>
              <DisabledFilterIcon />
              종목 필터
            </S.FilterV2>
          )}

          {activeFilter === 'batting' ? (
            <S.FilterV1 onClick={() => handleFilterClick('batting')}>
              <SelectFilterIcon />
              성공 필터
            </S.FilterV1>
          ) : (
            <S.FilterV2 onClick={() => handleFilterClick('batting')}>
              <DisabledFilterIcon />
              성공 필터
            </S.FilterV2>
          )}
        </S.FixedFilter>
        <S.ViewSelectFilterContainer>
          {selectSports && (
            <S.ViewSelectFilter onClick={() => handleSports(null)}>
              {SPORTS_LABELS[selectSports]}
              <DeleteIcon />
            </S.ViewSelectFilter>
          )}
          {selectBatting && (
            <S.ViewSelectFilter onClick={() => handleBatting(null)}>
              {BATTING_LABELS[selectBatting]}
              <DeleteIcon />
            </S.ViewSelectFilter>
          )}
        </S.ViewSelectFilterContainer>
      </S.FixedFilterContainer>
      {activeFilter === 'sports' && (
        <S.SelectFilterContainer>
          {(['BADMINTON', 'SOCCER', 'VOLLEYBALL'] as SelectSportsType[]).map((sport: SelectSportsType) =>
            selectSports === sport ? (
              <S.SelectFilter key={sport} onClick={() => handleSports(sport)}>
                {SPORTS_LABELS[sport]}
              </S.SelectFilter>
            ) : (
              <S.DisabledSelectFilter key={sport} onClick={() => handleSports(sport)}>
                {SPORTS_LABELS[sport]}
              </S.DisabledSelectFilter>
            )
          )}
        </S.SelectFilterContainer>
      )}
      {activeFilter === 'batting' && (
        <S.SelectFilterContainer>
          {(['greatSuccess', 'success', 'failure'] as SetSelectBattingType[]).map((batting: SetSelectBattingType) =>
            selectBatting === batting ? (
              <S.SelectFilter key={batting} onClick={() => handleBatting(batting)}>
                {BATTING_LABELS[batting]}
              </S.SelectFilter>
            ) : (
              <S.DisabledSelectFilter key={batting} onClick={() => handleBatting(batting)}>
                {BATTING_LABELS[batting]}
              </S.DisabledSelectFilter>
            )
          )}
        </S.SelectFilterContainer>
      )}
    </S.FilterContainer>
  );
};

export default FilterComponent;
