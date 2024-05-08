import { useNavigate } from 'react-router-dom';
import * as S from './style.ts';

const BadmintionBracket = () => {
  const navigate = useNavigate();

  const matches = [
    {
      teamSet: 'B-1',
      team1: '주방',
      team1_member: '김주은/방가온',
      team2: '발목부상듀오',
      team2_member: '김태오/정민석',
      team3: '사이버보안',
      team3_member: '김현/정상혁',
      score1: '25 : 10',
      score2: '25 : 18',
      score3: '25 : 19',
      winnerTeam1: '발목부상듀오',
      winnerTeam2: '사이버보안',
      winnerTeam3: '사이버보안',
    },
    {
      teamSet: 'B-2',
      team1: '콩보리',
      team1_member: '이동욱/이태랑',
      team2: '지죽동클라맨',
      team2_member: '박준호/윤태빈',
      team3: '아자아자',
      team3_member: '김은후/양동찬',
      score1: '25 : 13',
      score2: '25 : 19',
      score3: '25 : 23',
      winnerTeam1: '콩보리',
      winnerTeam2: '콩보리',
      winnerTeam3: '아자아자',
    },
    {
      teamSet: 'B-3',
      team1: '겜개듀오',
      team1_member: '김서준/변정현',
      team2: '우승',
      team2_member: '서지완/주경주',
      team3: '19cm',
      team3_member: '이명훈/이정우',
      score1: '25 : 24',
      score2: '25 : 18',
      score3: '25 : 17',
      winnerTeam1: '겜개듀오',
      winnerTeam2: '겜개듀오',
      winnerTeam3: '우승',
    },
    {
      teamSet: 'C-1',
      team1: '배용빈팀',
      team1_member: '배용빈/서정민',
      team2: '농협은행',
      team2_member: '권재헌/황지훈',
      team3: '수원피자',
      team3_member: '김지훈/이산',
      score1: '21 : 7',
      score2: '25 : 21',
      score3: '25 : 9',
      winnerTeam1: '배용빈팀',
      winnerTeam2: '배용빈팀',
      winnerTeam3: '수원피자',
    },
    {
      teamSet: 'C-2',
      team1: '경심애심심심',
      team1_member: '박찬울/이서준',
      team2: '수일통닭',
      team2_member: '김승찬/김재관',
      team3: '카라박',
      team3_member: '김민균/전선우',
      score1: '21 : 20',
      score2: '25 : 14',
      score3: '25 : 16',
      winnerTeam1: '경심애심심심',
      winnerTeam2: '경심애심심심',
      winnerTeam3: '수일통닭',
    },
  ];

  const GoBeforePage = () => {
    navigate(-1);
  };

  return (
    <>
      <S.Wrapper>
        <S.Container>
          {matches.map((match, index) => (
            <S.GridContainer key={index}>
              <S.GridItem>
                {match.teamSet} <br /> 팀-이름
              </S.GridItem>
              <S.GridItem>
                {match.team1} <br /> {match.team1_member}
              </S.GridItem>
              <S.GridItem>
                {match.team2} <br /> {match.team2_member}
              </S.GridItem>
              <S.GridItem>
                {match.team3} <br /> {match.team3_member}
              </S.GridItem>

              <S.GridItem>
                {match.team1} <br /> {match.team1_member}
              </S.GridItem>
              <S.GridItem diagonal="true"></S.GridItem>
              <S.GridItem>
                <S.TopMentContainer>
                  <S.Ment1>{match.winnerTeam1} 승</S.Ment1> <S.Ment2>{match.score1}</S.Ment2>
                </S.TopMentContainer>
                <S.Ment3>{`${match.team2} vs ${match.team1}`}</S.Ment3>
              </S.GridItem>

              <S.GridItem>
                <S.TopMentContainer>
                  <S.Ment1>{match.winnerTeam2} 승</S.Ment1> <S.Ment2>{match.score2}</S.Ment2>
                </S.TopMentContainer>
                <S.Ment3>{`${match.team3} vs ${match.team1}`}</S.Ment3>
              </S.GridItem>

              <S.GridItem>
                {match.team2} <br /> {match.team2_member}
              </S.GridItem>
              <S.GridItem>
                <S.TopMentContainer>
                  <S.Ment1>{match.winnerTeam1} 승</S.Ment1> <S.Ment2>{match.score1}</S.Ment2>
                </S.TopMentContainer>
                <S.Ment3>{`${match.team2} vs ${match.team1}`}</S.Ment3>
              </S.GridItem>
              <S.GridItem diagonal="true"></S.GridItem>
              <S.GridItem>
                <S.TopMentContainer>
                  <S.Ment1>{match.winnerTeam3} 승</S.Ment1> <S.Ment2>{match.score3}</S.Ment2>
                </S.TopMentContainer>
                <S.Ment3>{`${match.team3} vs ${match.team2}`}</S.Ment3>
              </S.GridItem>

              <S.GridItem>
                {match.team3} <br /> {match.team3_member}
              </S.GridItem>
              <S.GridItem>
                <S.TopMentContainer>
                  <S.Ment1>{match.winnerTeam2} 승</S.Ment1> <S.Ment2>{match.score2}</S.Ment2>
                </S.TopMentContainer>
                <S.Ment3>{`${match.team3} vs ${match.team1}`}</S.Ment3>
              </S.GridItem>
              <S.GridItem>
                <S.TopMentContainer>
                  <S.Ment1>{match.winnerTeam3} 승</S.Ment1> <S.Ment2>{match.score3}</S.Ment2>
                </S.TopMentContainer>
                <S.Ment3>{`${match.team3} vs ${match.team2}`}</S.Ment3>
              </S.GridItem>
              <S.GridItem diagonal="true"></S.GridItem>
            </S.GridContainer>
          ))}
          <S.BeforeButtonCotainer>
            <S.BeforeButton onClick={GoBeforePage}>돌아가기</S.BeforeButton>
          </S.BeforeButtonCotainer>
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default BadmintionBracket;
