import * as S from "./style";
import { PlayingButton, Vote, NotVote, PercentGuageBar } from "../../assets";
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
    Percent,
    Score,
    PredictScore,
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

  const SuccesOfFail = () => {
    const predictScore0 = parseInt(PredictScore[0]);
    const predictScore1 = parseInt(PredictScore[1]);
    const score0 = parseInt(Score[0]);
    const score1 = parseInt(Score[1]);
  
    if (predictScore0 === score0 && predictScore1 === score1) {
      return (
        <S.EventTexts style={{ color: "var(--Main, #23F69A)" }}>
          대성공🔥
        </S.EventTexts>
      );
    } else if ((predictScore0 > predictScore1 && score0 > score1) || (predictScore0 < predictScore1 && score0 < score1)) {
      return (
        <S.EventTexts style={{ color: "var(--White, #FFF)" }}>
          성공🎉
        </S.EventTexts>
      );
    } else {
      return (
        <S.EventTexts style={{ color: "var(--Gray1, #B7B7BE)" }}>
          실패💔
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
                <S.GradeText style={{color: 'var(--Gray2, #6F6F7B)'}}>
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
                <S.GradeText style={{color: 'var(--Gray2, #6F6F7B)'}}>
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
                <S.GradeText style={{color: 'var(--Gray2, #6F6F7B)'}}>
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
                <S.GradeText style={{color: 'var(--Gray2, #6F6F7B)'}}>
                  {Grade[1]}
                </S.GradeText>
              </S.OneGrade>
            </S.GradeBox>
          </S.MainContainer>

          <S.PercentBar>
            <S.GradeText style={{color: 'var(--Gray1, #B7B7BE)'}}>
              {Percent[0]}
            </S.GradeText>
            {/* 동적변환가능한 퍼센트게이지바 */}
            <PercentGuageBar percent={Percent[0]} />

            <S.GradeText style={{color: 'var(--Gray2, #6F6F7B)'}}>
              {Percent[1]}
            </S.GradeText>
          </S.PercentBar>

          {parseInt(Score[0]) > parseInt(Score[1]) === true ? (
            <div style={{display: "flex", gap: "0.5rem"}}>
              <S.GradeText style={{color: "var(--White, #FFF)"}}> 
                {Score[0]}
              </S.GradeText>
              <S.GradeText style={{color: 'var(--Gray1, #B7B7BE)'}}>
                -
              </S.GradeText>
              <S.GradeText style={{color: 'var(--Gray1, #B7B7BE)'}}>
                {Score[1]}
              </S.GradeText>
            </div>
          ) : (
            <div style={{display: "flex", gap: "0.5rem"}}>
              <S.GradeText style={{color: 'var(--Gray1, #B7B7BE)'}}> 
                {Score[0]}
              </S.GradeText>
              <S.GradeText style={{color: 'var(--Gray1, #B7B7BE)'}}>
                -
              </S.GradeText>
              <S.GradeText style={{color: "var(--White, #FFF)"}}>
                {Score[1]}
              </S.GradeText>
            </div>
          )}
        </S.PlayingContainer>

        <S.PlayingContainer>
          <S.UnderTextBox>
            {SuccesOfFail()}
          </S.UnderTextBox>
        </S.PlayingContainer>
      </S.PredictContainer>
    ) }
    </>
  )
}

export default PlayContainer;