import HeaderContainer from '../../components/HeaderContainer/index.tsx';
import PlayingContainer from '../../components/PlayingContainer/index.tsx';
import * as S from "./style";
import { ArrayProps } from '../../components/PlayingContainer/index.tsx';

const dataArray: Array<ArrayProps> = [
  {
    isYes: true,
    isFinal: false,
    Playing: ["농구", "축구"],
    TeamName: ["쌲싹싺싺싹", "나이스나이스"],
    Grade: ["2학년 2반", "1학년 1반"],
    Time: ["00:00 ~ 12:45", "12:50 ~ 01:30"],
    isLive: true,
    isVoting: false,
  },

  {
    isYes: false,
    isFinal: true,
    Playing: ["축구", "야구"],
    TeamName: ["안녕하세요1", "안녕하세요2"],
    Grade: ["2학년 3반", "1학년 3반"],
    Time: ["00:00 ~ 12:00", "12:50 ~ 01:00"],
    isLive: false,
    isVoting: false,
  },

  {
    isYes: false,
    isFinal: false,
    Playing: ["야구", "야구"],
    TeamName: ["ㅜㅜㅜㅜㅜㅜ", "ㅣㅣㅣㅣㅣㅣ"],
    Grade: ["2학년 0반", "1학년 0반"],
    Time: ["00:00 ~ 11:00", "12:50 ~ 11:00"],
    isLive: false,
    isVoting: true,
  },
];

const Main = () => {
  return (
    <>
      <HeaderContainer/>
      <S.MainContainer>
        {dataArray.map((data, index) => (
            <PlayingContainer 
              key={index}
              isYes={data.isYes}
              isFinal={data.isFinal}
              Playing={data.Playing}
              TeamName={data.TeamName}
              Grade={data.Grade}
              Time={data.Time}
              isLive={data.isLive}
              isVoting={data.isVoting}
            />
        ))}
      </S.MainContainer>
    </>
  );
};

export default Main;