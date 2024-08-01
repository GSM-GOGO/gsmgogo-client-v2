export type TeamFormationData = {
  team_id: number
  team_name: string
  team_type: 'SOCCER' | 'BADMINTON' | 'VOLLEYBALL'
  team_grade: 'ONE' | 'TWO' | 'THREE'
  team_class_type: 'SW' | 'EB'
  author_me: boolean
  win_count: number
  participates: {
    user_id: number
    user_name: string
    position_x: number
    position_y: number
  }[]
  badminton_rank?: 'A' | 'B' | 'C' | 'D' | undefined
}

export type NormalTeamType =
  | 'TOSS_RUN'
  | 'MISSION_RUN'
  | 'TUG_OF_WAR'
  | 'FREE_THROW'
  | 'GROUP_ROPE_JUMP'
  | 'CROSS_ROPE_JUMP'

export interface Team {
  team_type: NormalTeamType
  participates: { user_name: string }[]
}

export interface TeamList {
  team_grade: string
  team_class: string
  author_me: boolean
  team_list?: Team[]
}
