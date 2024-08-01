export interface Team {
  team_id: number
  team_name: string
  team_grade: 'ONE' | 'TWO' | 'THREE'
  team_class_type: 'SW' | 'EB'
  win_count: number
  follow: boolean
  my_team: boolean
  badminton_rank?: 'A' | 'B' | 'C' | 'D'
}

export interface CheerTeam {
  team_id?: number
}
