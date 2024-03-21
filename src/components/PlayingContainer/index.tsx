import * as S from "./style";
import { PlayingButton } from "../../assets";

const PlayContainer = () => {
  return(
    <S.PlayingContainer>
      <S.MainContainer>
        <S.EventContainer>
          <S.EventTexts style={{color: "var(--Gray1, #B7B7BE)"}}>
            예선
          </S.EventTexts>
          <S.EventTexts style={{color: "#FFF"}}>
            야구
          </S.EventTexts>
        </S.EventContainer>

        <S.GradeBox>
          <S.OneGrade>
            <S.TeamName>
              어쩌고저꺼고팀
            </S.TeamName>
            <S.GradeText>
              2학년 3반
            </S.GradeText>
          </S.OneGrade>

          <S.OneGrade>
            <S.TeamName>
              어쩌고저꺼고팀
            </S.TeamName>
            <S.GradeText>
              2학년 3반
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
            00:00 ~ 12:45
          </S.TimeText>
        </S.OneTimeBox>

        <S.OneTimeBox>
          <S.TimeText>
            투표 시간
          </S.TimeText>
          <S.TimeText>
            00:00 ~ 12:45
          </S.TimeText>
        </S.OneTimeBox>
      </S.TimeContainer>

      <div>
        <PlayingButton/>
      </div>
    </S.PlayingContainer>
  )
}

export default PlayContainer;