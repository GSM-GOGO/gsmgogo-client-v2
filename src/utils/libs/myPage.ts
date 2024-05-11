import { MatchData } from '@/types/MatchData';

export const getMatchEvent = (matchData: MatchData): string => {
  return (
    (matchData.badminton_rank === 'D' ? '여자 ' : '남자 ') +
    (() => {
      switch (matchData.match_type) {
        case 'SOCCER':
          return '축구';
        case 'BADMINTON':
          return '배드민턴';
        case 'VOLLEYBALL':
          return '배구';
        default:
          return '';
      }
    })()
  );
};

export const getGradeAndClass = (grade: string | null, classType: string | null): string => {
  const gradeMap: Record<string, string> = {
    ONE: '1학년',
    TWO: '2학년',
    THREE: '3학년',
  };

  const classTypeMap: Record<string, string> = {
    SW: 'SW',
    EB: '임베',
  };

  const gradeText = grade ? gradeMap[grade] || '' : '';
  const classTypeText = classType ? classTypeMap[classType] || '' : '';

  return `${gradeText} ${classTypeText}`;
};
