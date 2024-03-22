export interface PredictTypes {
  isPredict: boolean; //예측을 했는지
  isSuccess: boolean[]; //예측 성공을 했는지
  PredictScore: string[]; //에측한 score가 뭔지
  Score: string //경기의 score가 뭔지
  ScorePoint: string; //배팅한 포인트
  SportsName: string[]; //무슨 종목인지
  TeamName: string[]; //팀 이름
  Grade: string[]; //몇학년 무슨 과인지
}