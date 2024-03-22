export interface ArrayProps {
  isPredictGame: boolean; //예선 본선 구별
  isFinal: boolean; //결승인지 구별
  Time: string[]; //투표시간, 경기시간
  SportsName: string[]; //무슨 종목인지
  TeamName: string[]; //팀 이름
  Grade: string[]; //몇학년 무슨 과인지
  isLive: boolean;  //경기중인지
  isVoting: boolean; //투표가능인지 아닌지
  isFavorite: boolean[]; //즐겨찾기인지 아닌지
  isFinish: boolean; //끝났는지 아닌지
}