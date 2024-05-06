export type MatchType = 'SOCCER' | 'BADMINTON' | 'VOLLEYBALL';
export type MatchLevel = 'TRYOUT' | 'SEMI_FINAL' | 'FINAL';
export type TeamGrade = 'ONE' | 'TWO' | 'THREE';
export type ClassType = 'SW' | 'EB';
export type BadmintonRank = 'A' | 'B' | 'C' | 'D';

export type MatchData = {
  match_id: number;
  match_type: MatchType;
  match_level: MatchLevel;
  team_a_id: number | null;
  team_a_name: string;
  team_a_grade: TeamGrade | null;
  team_a_class_type: ClassType | null;
  team_b_id: number | null;
  team_b_name: string;
  team_b_grade: TeamGrade | null;
  team_b_class_type: ClassType | null;
  badminton_rank?: BadmintonRank;
  badminton_a_participate_names?: string;
  badminton_b_participate_names?: string;
  match_start_at: string;
  match_end_at: string;
  is_vote: boolean;
  team_a_bet: number;
  team_b_bet: number;
  bet_team_a_score?: number | null;
  bet_team_b_score?: number | null;
  bet_point?: number | null;
};

export type MatchResultData = MatchData & {
  team_a_score: number;
  team_b_score: number;
  earned_point?: number | null;
  lose_point?: number | null;
  is_participate_team_id?: number | null;
  participate_earned_point?: number | null;
};

export type MatchResponse = {
  matches: MatchData[];
  match_result: MatchResultData[];
};
