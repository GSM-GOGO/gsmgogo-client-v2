import * as S from "./style";
import { PlayingButton, Vote, NotVote } from "../../assets";
import { ArrayProps } from "../../types/ArrayProps";

const PlayContainer: React.FC<ArrayProps> = ({isYes, isFinal, Playing, TeamName, Grade, Time, isLive, isVoting}) => {
  const getEventText = () => {
    if (isFinal) {
      return (
        <S.EventTexts style={{color: "var(--Main, #23F69A)"}}>
          결승전🔥
        </S.EventTexts>
      );
    } else {
      return isYes ? '예선' : '본선';
    }
  };

  return(
    <>
      <S.PlayingContainer>
        <S.MainContainer>
          <S.EventContainer>
            <S.EventTexts style={{color: "var(--Gray1, #B7B7BE)"}}>
              {getEventText()}
            </S.EventTexts>
            <S.EventTexts style={{color: "#FFF"}}>
              {Playing[0]}
            </S.EventTexts>
          </S.EventContainer>

          <S.GradeBox>
            <S.OneGrade>
              <div style={{width: "6.25rem", textAlign: "center"}}>
                <S.TeamName>
                  {TeamName[0]}
                </S.TeamName>
              </div>
              <S.GradeText>
                {Grade[0]}
              </S.GradeText>
            </S.OneGrade>

            <S.OneGrade>
              <div style={{width: "6.25rem", textAlign: "center"}}>
                <S.TeamName>
                  {TeamName[1]}
                </S.TeamName>
              </div>
              <S.GradeText>
                {Grade[1]}
              </S.GradeText>
            </S.OneGrade>
          </S.GradeBox>
        </S.MainContainer>

        <S.TimeContainer>
          <S.OneTimeBox>
            <S.TimeText>
              투표 시간
            </S.TimeText>
            <S.TimeText>
              {Time[0]}
            </S.TimeText>
          </S.OneTimeBox>

          <S.OneTimeBox>
            <S.TimeText>
              경기 시간
            </S.TimeText>
            <S.TimeText>
              {Time[1]}
            </S.TimeText>
          </S.OneTimeBox>
        </S.TimeContainer>

        <div style={{display: "flex", justifyContent: "center"}}>
          {isLive ? (
              <PlayingButton/>
          ) : (
            isVoting ? <Vote /> : <NotVote />
          )}
        </div>
      </S.PlayingContainer>
      {isLive ? (
        <S.GrayLine/>
      ) : (
        <></>
      )}
    </>
  )
}

export default PlayContainer;