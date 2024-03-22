export interface ArrayProps {
  isYes: boolean;
  isFinal: boolean;
  Playing: string[];
  TeamName: string[];
  Grade: string[];
  Time: string[];
  isLive: boolean;
  isVoting: boolean;
  isFavorite: boolean[];
  isFinish: boolean; //끝났는지
  isPredict: boolean; //예측을 했는지
  isSuccess: boolean[]; //예측 성공을 했는지
  PredictScore: string[]; //에측한 score가 뭔지
  Score: string //경기의 score가 뭔지
  ScorePoint: string; //배팅한 포인트
}