import { useEffect, useState } from "react";
import * as S from "./style";

const WeatherContainer = () => {
  const [dates, setDates] = useState<Date[]>([]);
  const [dayOfWeek, setDayOfWeek] = useState<string[]>([]);

  useEffect(() => {
    const today = new Date();

    const newDates: Date[] = [];
    const newDayOfWeek: string[] = [];
    for (let i = 0; i < 11; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() + i);
      newDates.push(date);

      const days = ['일', '월', '화', '수', '목', '금', '토'];
      const dayIndex = date.getDay();
      const dayString = days[dayIndex];
      newDayOfWeek.push(dayString);
    }

    setDates(newDates);
    setDayOfWeek(newDayOfWeek);
  }, []);

  return (
    <S.WeatherWrapper>
      {dates.map((date, index) => (
        <S.DateContainer key={index}>
          <S.DayText>
            {dayOfWeek[index]}
          </S.DayText>
          <S.DayText>
            {date.getDate()}일
          </S.DayText>
        </S.DateContainer>
      ))}
    </S.WeatherWrapper>
  )
}

export default WeatherContainer;