import HeaderContainer from '../../components/HeaderContainer/index.tsx';
import PlayingContainer from '../../components/PlayingContainer/index.tsx';
import WeatherContainer from '../../components/WeatherContainer/index.tsx';
import * as S from './style';
import { ArrayProps } from '../../types/ArrayProps.ts';
import Category from '../../components/Category/index.tsx';

const dataArray: Array<ArrayProps> = [
  {
    isPredictGame: true,
    isFinal: false,
    SportsName: ['농구', '축구'],
    TeamName: ['쌲싹싺싺싹', '나이스나이스'],
    Grade: ['2학년 SW', '2학년 임베'],
    Time: ['00:00 ~ 12:45', '12:50 ~ 01:30'],
    isLive: true,
    isVoting: false,
    isFavorite: [false, false],
    isFinish: false,
    isPredict: false,
    isSuccess: [],
    PredictScore: [],
    Score: '',
    ScorePoint: '',
  },

  {
    isPredictGame: false,
    isFinal: true,
    SportsName: ['축구', '야구'],
    TeamName: ['안녕하세요1', '안녕하세요2'],
    Grade: ['1학년 SW', '2학년 SW'],
    Time: ['00:00 ~ 12:00', '12:50 ~ 01:00'],
    isLive: false,
    isVoting: false,
    isFavorite: [true, false],
    isFinish: false,
    isPredict: false,
    isSuccess: [],
    PredictScore: [],
    Score: '',
    ScorePoint: '',
  },

  {
    isPredictGame: false,
    isFinal: false,
    SportsName: ['야구', '야구'],
    TeamName: ['ㅜㅜㅜㅜㅜㅜ', 'ㅣㅣㅣㅣㅣㅣ'],
    Grade: ['2학년 SW', '1학년 SW'],
    Time: ['00:00 ~ 11:00', '12:50 ~ 11:00'],
    isLive: false,
    isVoting: true,
    isFavorite: [false, false],
    isFinish: false,
    isPredict: false,
    isSuccess: [],
    PredictScore: [],
    Score: '',
    ScorePoint: '',
  },
];

const Main = () => {
  return (
    <>
      <HeaderContainer />
      <S.Wrapper>
        <S.Container>
          <Category />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <WeatherContainer />
          </div>
          <S.MainContainer>
            {dataArray.map((data, index) => (
              <PlayingContainer
                key={index}
                isPredictGame={data.isPredictGame}
                isFinal={data.isFinal}
                SportsName={data.SportsName}
                TeamName={data.TeamName}
                Grade={data.Grade}
                Time={data.Time}
                isLive={data.isLive}
                isVoting={data.isVoting}
                isFavorite={data.isFavorite}
                isFinish={data.isFinish}
                isPredict={data.isPredict}
                isSuccess={data.isSuccess}
                PredictScore={data.PredictScore}
                Score={data.Score}
                ScorePoint={data.ScorePoint}
              />
            ))}
          </S.MainContainer>
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default Main;
