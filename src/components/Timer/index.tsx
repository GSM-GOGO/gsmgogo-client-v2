import React, { useEffect } from 'react';
import { UseFormSetError } from 'react-hook-form';
import { FormData } from '@/types/FormDataType';

interface TimerProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  setError?: UseFormSetError<FormData>;
}

const Timer: React.FC<TimerProps> = ({ count, setCount, setError }) => {
  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    const id = setInterval(() => {
      setCount((count) => count - 1);
    }, 1000);

    if (count === 0) {
      clearInterval(id);
      if (setError) {
        setError('verificationCode', {
          type: 'manual',
          message: '유효시간이 만료되었어요. 재발송을 진행 해 주세요',
        });
      }
    }
    return () => clearInterval(id);
  }, [count, setCount]);

  return <>{formatTime(count)}</>;
};

export default Timer;
