import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from './style';

const Bracket = () => {
  const { sport } = useParams();
  const navigate = useNavigate();
  const [notFound, setNotFound] = useState(false);
  const [sportName, setSportName] = useState<string | undefined>('');
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    if (!(sport === 'soccer' || sport === 'badminton' || sport === 'volleyball')) {
      setNotFound(true);
    }
    if (sport === 'soccer') {
      setSportName('축구');
      setTeams([
        { name: '콩보리', members: '이동욱/이태랑' },
        { name: '지죽동클라맨', members: '박준호/윤태빈' },
        { name: '아자아자화이', members: '김은후/양동찬' },
      ]);
    } else if (sport === 'badminton') {
      setSportName('배드민턴');
      setTeams([
        { name: '콩보리', members: '이동욱/이태랑' },
        { name: '지죽동클라맨', members: '박준호/윤태빈' },
        { name: '아자아자화이', members: '김은후/양동찬' },
      ]);
    } else if (sport === 'volleyball') {
      setSportName('배구');
      setTeams([
        { name: '팀A', members: '멤버16' },
        { name: '팀B', members: '멤버19' },
        { name: '팀C', members: '멤버22' },
      ]);
    }
  }, [sport]);

  useEffect(() => {
    if (notFound) {
      navigate('/bracket-unknown');
    }
  }, [notFound, navigate]);

  console.log(teams);

  return (
    <S.Wrapper>
      <S.SportNameWrapper>
        <S.SportNameContainer>
          <S.SportNameBox>
            <S.SportText>{sportName} 대진표</S.SportText>
          </S.SportNameBox>
          <S.BracketWrapper>
            <S.BracketTeamBox>
              <S.BracketText>
                B-2 <br />팀 이름
              </S.BracketText>
            </S.BracketTeamBox>
            {teams.map((team, teamIndex) => (
              <S.BracketWrapper key={teamIndex}>
                <S.BracketTeamBox>
                  <S.BracketText>
                    {team.name} <br /> {team.members}
                  </S.BracketText>
                </S.BracketTeamBox>
              </S.BracketWrapper>
            ))}
          </S.BracketWrapper>

          <S.BracketWrapper>
            {/* {teams.map((team, teamIndex) => (
              <S.BracketWrapper key={teamIndex}>
                <S.BracketTeamBox>
                  <S.BracketText>{`B-${teamIndex + 1}`}</S.BracketText>
                </S.BracketTeamBox>
                <S.BracketTeamBox>
                  <S.BracketText>{team.name}</S.BracketText>
                </S.BracketTeamBox>
                <S.BracketTeamBox>
                  {team.members.map((member: string, memberIndex: number) => (
                    <S.BracketText key={memberIndex}>{member}</S.BracketText>
                  ))}
                </S.BracketTeamBox>
              </S.BracketWrapper>
            ))}

            {teams.map((team, teamIndex) => (
              <S.BracketWrapper key={teamIndex}>
                <S.BracketTeamBox>
                  <S.BracketText>{`B-${teamIndex + 1}`}</S.BracketText>
                </S.BracketTeamBox>
                <S.BracketTeamBox>
                  <S.BracketText>{team.name}</S.BracketText>
                </S.BracketTeamBox>
                <S.BracketTeamBox>
                  {team.members.map((member: string, memberIndex: number) => (
                    <S.BracketText key={memberIndex}>{member}</S.BracketText>
                  ))}
                </S.BracketTeamBox>
              </S.BracketWrapper>
            ))}
            {teams.map((team, teamIndex) => (
              <S.BracketWrapper key={teamIndex}>
                <S.BracketTeamBox>
                  <S.BracketText>{`B-${teamIndex + 1}`}</S.BracketText>
                </S.BracketTeamBox>
                <S.BracketTeamBox>
                  <S.BracketText>{team.name}</S.BracketText>
                </S.BracketTeamBox>
                <S.BracketTeamBox>
                  {team.members.map((member: string, memberIndex: number) => (
                    <S.BracketText key={memberIndex}>{member}</S.BracketText>
                  ))}
                </S.BracketTeamBox>
              </S.BracketWrapper>
            ))}
            {teams.map((team, teamIndex) => (
              <S.BracketWrapper key={teamIndex}>
                <S.BracketTeamBox>
                  <S.BracketText>{`B-${teamIndex + 1}`}</S.BracketText>
                </S.BracketTeamBox>
                <S.BracketTeamBox>
                  <S.BracketText>{team.name}</S.BracketText>
                </S.BracketTeamBox>
                <S.BracketTeamBox>
                  {team.members.map((member: string, memberIndex: number) => (
                    <S.BracketText key={memberIndex}>{member}</S.BracketText>
                  ))}
                </S.BracketTeamBox>
              </S.BracketWrapper>
            ))} */}
          </S.BracketWrapper>
        </S.SportNameContainer>
      </S.SportNameWrapper>
    </S.Wrapper>
  );
};

export default Bracket;
