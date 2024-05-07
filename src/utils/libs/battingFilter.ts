import { SetSelectBattingType } from '../../types/MyPageFilter';
import { MatchResultData } from '../../types/MatchData';

export const calculateBattingCondition = (
  matchResult: MatchResultData,
  selectBatting: SetSelectBattingType
): boolean => {
  if (selectBatting === 'greatSuccess') {
    return (
      (matchResult.bet_team_a_score ?? 0) === (matchResult.team_a_score ?? 0) &&
      (matchResult.bet_team_b_score ?? 0) === (matchResult.team_b_score ?? 0)
    );
  } else if (selectBatting === 'success') {
    return (
      ((matchResult.bet_team_a_score ?? 0) > (matchResult.bet_team_b_score ?? 0) &&
        (matchResult.team_a_score ?? 0) > (matchResult.team_b_score ?? 0)) ||
      ((matchResult.bet_team_a_score ?? 0) < (matchResult.bet_team_b_score ?? 0) &&
        (matchResult.team_a_score ?? 0) < (matchResult.team_b_score ?? 0))
    );
  } else if (selectBatting === 'failure') {
    return !(
      ((matchResult.bet_team_a_score ?? 0) === (matchResult.team_a_score ?? 0) &&
        (matchResult.bet_team_b_score ?? 0) === (matchResult.team_b_score ?? 0)) ||
      ((matchResult.bet_team_a_score ?? 0) > (matchResult.bet_team_b_score ?? 0) &&
        (matchResult.team_a_score ?? 0) > (matchResult.team_b_score ?? 0)) ||
      ((matchResult.bet_team_a_score ?? 0) < (matchResult.bet_team_b_score ?? 0) &&
        (matchResult.team_a_score ?? 0) < (matchResult.team_b_score ?? 0))
    );
  }
  return true;
};
