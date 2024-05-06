export type FilterType = 'sports' | 'batting';
export type SelectSportsType = 'SOCCER' | 'BADMINTON' | 'VOLLEYBALL';
export type SetSelectBattingType = 'greatSuccess' | 'success' | 'failure';

export const SPORTS_LABELS: Record<SelectSportsType, string> = {
  SOCCER: '축구',
  BADMINTON: '배드민턴',
  VOLLEYBALL: '배구',
};

export const BATTING_LABELS: Record<SetSelectBattingType, string> = {
  greatSuccess: '대성공🔥',
  success: '성공',
  failure: '실패',
};
export const matchLevelType: { [key: string]: string } = {
  TRYOUT: '예선 ',
  SEMI_FINAL: '본선 ',
  FINAL: '결승전🔥 ',
};
