import { useMemo, useState } from 'react';
import { useCallback } from 'react';

import * as S from './style';
import PlayContainer from '../../components/PlayingContainer/index';

const WeatherContainer = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const dates = useMemo(() => {
    const today = new Date();
    const newDates: Date[] = [];
    for (let i = 0; i < 11; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() + i);
      newDates.push(date);
    }
    return newDates;
  }, []);

  const dayOfWeek = useMemo(() => {
    return dates.map((date) => {
      const days = ['일', '월', '화', '수', '목', '금', '토'];
      const dayIndex = date.getDay();
      return days[dayIndex];
    });
  }, [dates]);

  const handleDateClick = useCallback((date: Date) => {
    setSelectedDate(date);
  }, []);

  return (
    <>
      <S.WeatherWrapper>
        {dates.map((date, index) => (
          <S.DateContainer
            key={index}
            onClick={() => handleDateClick(date)}
            selected={selectedDate === date || (selectedDate === null && index === 0)}
          >
            <S.DayText>{dayOfWeek[index]}</S.DayText>
            <S.DayText>{date.getDate()}일</S.DayText>
          </S.DateContainer>
        ))}
      </S.WeatherWrapper>
      {selectedDate && <PlayContainer date={selectedDate} />}
    </>
  );
};

export default WeatherContainer;
