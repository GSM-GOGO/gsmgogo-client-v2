import * as S from "./style";

const WeatherContainer = () => {
  const today = new Date();

  console.log(today)

  return (
    <S.WeatherWrapper>
      <S.DateContainer>
        <S.DayText>
          월
        </S.DayText>
        <S.DayText>
          11일
        </S.DayText>
      </S.DateContainer>
    </S.WeatherWrapper>
  )
}

export default WeatherContainer;