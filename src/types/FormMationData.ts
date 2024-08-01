export interface Participate {
  user_id: number
  user_name: string
  position_x: number
  position_y: number
}

export interface FormMationData {
  team_id: number
  team_name: string
  team_type: 'SOCCER' | 'BADMINTON' | 'VOLLEYBALL'
  team_grade: 'ONE' | 'TWO' | 'THREE'
  team_class_type: 'SW' | 'EB'
  author_me: boolean
  win_count: number
  participates: Participate[]
  badminton_rank?: 'A' | 'B' | 'C' | 'D'
}
