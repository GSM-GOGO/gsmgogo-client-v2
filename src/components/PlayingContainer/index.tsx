import * as S from "./style";
import { PlayingButton, Vote, NotVote } from "../../assets";
import { ArrayProps } from "../../types/ArrayProps";

const PlayContainer: React.FC<ArrayProps> = (
  {
    isPredictGame, 
    isFinal, 
    SportsName, 
    TeamName, 
    Grade, 
    Time, 
    isLive, 
    isVoting, 
    isFavorite, 
    isFinish,
    Winning,
  }
  ) => {
  
  const getEventText = () => {
    if (isFinal) {
      return (
        <S.EventTexts style={{color: "var(--Main, #23F69A)"}}>
          결승전🔥
        </S.EventTexts>
      );
    } else {
      return isPredictGame ? (
          <S.EventTexts style={{color: "var(--White, #FFF)"}}>
            예선
          </S.EventTexts>
        ) : (
          <S.EventTexts style={{color: "var(--White, #FFF)"}}>
            본선
          </S.EventTexts>
        );
    }
  };

  return(
    <>
    {!isFinish ? (
      <>
        <S.PlayingContainer style={{
            borderRadius: "0.75rem",
            background: "var(--colors-gray-gray-900, #26262A)"
          }}
        >
          <S.MainContainer>
            <S.EventContainer>
                {getEventText()}
              <S.EventTexts style={{color: "#FFF"}}>
                {SportsName}
              </S.EventTexts>
            </S.EventContainer>

            <S.GradeBox>
              <S.OneGrade>
                <div style={{width: "6.25rem"}}>
                  {isFavorite[0] ? (
                    <>
                      <S.TeamName style={{color: "var(--Main, #23F69A)"}}>
                        {TeamName[0]}
                      </S.TeamName>
                    </>
                  ) : (
                    <S.TeamName style={{color: "#FFF"}}>
                      {TeamName[0]}
                    </S.TeamName>
                  )}  
                </div>
                <S.GradeText>
                  {Grade[0]}
                </S.GradeText>
              </S.OneGrade>

              <S.OneGrade>
                <div style={{width: "6.25rem"}}>
                  {isFavorite[1] ? (
                    <>
                      <S.TeamName style={{color: "var(--Main, #23F69A)"}}>
                        {TeamName[1]}
                      </S.TeamName>
                    </>
                  ) : (
                    <S.TeamName style={{color: "#FFF"}}>
                      {TeamName[1]}
                    </S.TeamName>
                  )}  
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
    ) : (
      <S.PredictContainer>
        <S.PlayingContainer>
          <S.MainContainer>
            <S.EventTexts style={{color: 'var(--White, #FFF)'}}>
              {SportsName}
            </S.EventTexts>

            <S.GradeBox>
              <S.OneGrade>
                {Winning[0] === true ? (
                  <S.EventTexts style={{color: "var(--White, #FFF)"}}>
                    {TeamName[0]}
                  </S.EventTexts>
                ) : (
                  <S.EventTexts style={{color: "var(--Gray2, #6F6F7B)"}}>
                    {TeamName[0]}
                  </S.EventTexts>
                )}
                <S.GradeText>
                  {Grade[0]}
                </S.GradeText>
              </S.OneGrade>

              <S.OneGrade>
                <S.EventTexts>
                  {Winning[1] === true ? (
                    <S.EventTexts style={{color: "var(--White, #FFF)"}}>
                      {TeamName[1]}
                    </S.EventTexts>
                  ) : (
                    <S.EventTexts style={{color: "var(--Gray2, #6F6F7B)"}}>
                      {TeamName[1]}
                    </S.EventTexts>
                  )}
                </S.EventTexts>
                <S.GradeText>
                  {Grade[1]}
                </S.GradeText>
              </S.OneGrade>
            </S.GradeBox>
          </S.MainContainer>
        </S.PlayingContainer>

        <S.PlayingContainer>

        </S.PlayingContainer>
      </S.PredictContainer>
    ) }
    </>
  )
}

export default PlayContainer;