import HeaderContainer from '../../components/HeaderContainer/index.tsx';
import PlayingContainer from '../../components/PlayingContainer/index.tsx';
import WeatherContainer from '../../components/WeatherContainer/index.tsx';
import * as S from './style';
import { ArrayProps } from '../../types/ArrayProps.ts';
import Category from '../../components/Category/index.tsx';

const dataArray: Array<ArrayProps> = [
  { //1
    isPredictGame: true,
    isFinal: false,
    SportsName: '농구',
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
    Score: [],
    BettingPoint: '',
    Winning: [],
    Percent: [],
  },

  { //2
    isPredictGame: false,
    isFinal: true,
    SportsName: '축구',
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
    Score: [],
    BettingPoint: '',
    Winning: [],
    Percent: [],
  },

  { //3
    isPredictGame: false,
    isFinal: false,
    SportsName: '야구',
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
    Score: [],
    BettingPoint: '',
    Winning: [],
    Percent: [],
  },





  { //4
    isPredictGame: false,
    isFinal: false,
    SportsName: '야구',
    TeamName: ['나이스나이스', '나이스나이스'],
    Grade: ['9학년 SW', '1학년 SW'],
    Time: ['00:00 ~ 11:00', '12:50 ~ 11:00'],
    isLive: false,
    isVoting: true,
    isFavorite: [false, false],
    isFinish: true,
    isPredict: true,
    isSuccess: [false, true],
    PredictScore: ["2", "1"],
    Score: ["3", "1"],
    BettingPoint: '30000',
    Winning: [true, false],
    Percent: ["64", "36"],
  },

  { //5
    isPredictGame: false,
    isFinal: false,
    SportsName: '야구',
    TeamName: ['나이스나이스1', '나이스나이스2'],
    Grade: ['2학년 SW', '1학년 SW'],
    Time: ['00:00 ~ 11:00', '12:50 ~ 11:00'],
    isLive: false,
    isVoting: true,
    isFavorite: [false, false],
    isFinish: true,
    isPredict: true,
    isSuccess: [false, true],
    PredictScore: ["3", "1"],
    Score: ["3", "1"],
    BettingPoint: '50000',
    Winning: [true, false],
    Percent: ["18", "82"],
  },

  { //6
    isPredictGame: false,
    isFinal: false,
    SportsName: '농구',
    TeamName: ['나이스나이스3', '나이스나이스4'],
    Grade: ['1학년 SW', '1학년 SW'],
    Time: ['00:00 ~ 11:00', '12:50 ~ 11:00'],
    isLive: false,
    isVoting: true,
    isFavorite: [false, false],
    isFinish: true,
    isPredict: true,
    isSuccess: [false, true],
    PredictScore: ["9", "2"],
    Score: ["1", "3"],
    BettingPoint: '27000',
    Winning: [true, false],
    Percent: ["72", "28"]
  },

  { //7
    isPredictGame: false,
    isFinal: false,
    SportsName: '축구',
    TeamName: ['나이스나이스5', '나이스나이스6'],
    Grade: ['0학년 SW', '1학년 SW'],
    Time: ['00:00 ~ 11:00', '12:50 ~ 11:00'],
    isLive: false,
    isVoting: true,
    isFavorite: [false, false],
    isFinish: true,
    isPredict: false,
    isSuccess: [],
    PredictScore: [],
    Score: ["3", "1"],
    BettingPoint: '',
    Winning: [false, true],
    Percent: ["64", "36"]
  },
];

const Main = () => {
  return (
    <>
      <HeaderContainer />
      <S.Wrapper>
        <S.Container>
          <Category />
          <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <WeatherContainer />
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
                BettingPoint={data.BettingPoint}
                Winning={data.Winning}
                Percent={data.Percent}
              />
            ))}
          </S.MainContainer>
          </div>
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default Main;
