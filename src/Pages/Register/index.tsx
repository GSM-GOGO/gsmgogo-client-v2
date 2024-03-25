import { useEffect, useState } from 'react';
import HeaderContainer from '../../components/HeaderContainer/index.tsx';
import * as S from './style.ts';
import { Search, XIcon } from '../../assets/index.ts';

interface Data {
  name: string;
}

const dataArray: Data[] = [
  {
    name: "1101 김순자",
  },
  {
    name: "1102 김덕자",
  },
  {
    name: "1103 김감자",
  },
  {
    name: "1104 김승자",
  },
  {
    name: "1105 김정희",
  },
];

const Register = () => {
  const [selectedSport, setSelectedSport] = useState('축구');
  const [selectedInput, setSelectedInput] = useState('');
  const [teamName, setTeamName] = useState('');
  const [searchedName, setSearchedName] = useState('');
  const [searchResults, setSearchResults] = useState<Data[]>([]);
  const [selectedMembers, setSelectedMembers] = useState<Data[]>([]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const foundNames = dataArray.filter(data => data.name.includes(searchedName));
      setSearchResults(foundNames);
    }, 1000); // 2초 후에 검색 수행

    return () => clearTimeout(timeoutId); // cleanup 함수를 이용하여 이펙트 정리
  }, [searchedName]);

  const handleSportSelection = (sport : string) => {
    setSelectedSport(sport);
  };

  const handleInputSelection = (input : string) => {
    setSelectedInput(input)
  }

  const handleTeamNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value.slice(0, 7);
    setTeamName(newName);
  };

  const handleSearchNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchedName = e.target.value.replace(/[^\uAC00-\uD7A3]/gi, '');
    setSearchedName(searchedName);
  };

  const handleMemberClick = (member: Data) => {
    if (!selectedMembers.some(selected => selected.name === member.name)) {
      setSelectedMembers([...selectedMembers, member]);
    }
  };

  const handleRemoveMember = (member: Data) => {
    setSelectedMembers(selectedMembers.filter(selected => selected !== member));
  };

  const dividedSelectedMembers: Data[][] = [];
  for (let i = 0; i < selectedMembers.length; i += 4) {
    dividedSelectedMembers.push(selectedMembers.slice(i, i + 4));
  }

  return(
    <>
      <HeaderContainer/>
      <S.Wrapper>
        <S.Container>
          <S.ContainerResponse>
            <S.CategoryContainer>
              <S.Category style={{color: "var(--White, #FFF)"}}>
                팀 추가
              </S.Category>
            </S.CategoryContainer>

            <S.ContainerResponse>
              <S.SubjectContainer>
                <S.SubjectText>
                  종목
                </S.SubjectText>
                <S.SubjectBox>

                  <S.SubjectOne onClick={() => handleSportSelection('축구')}
                  style={selectedSport === '축구' ? { border: '1px solid var(--Main, #23F69A)',  background: 'rgba(35, 246, 154, 0.10)'} : undefined}>
                    <S.SubjectOneText style={selectedSport === '축구' ? { color: 'var(--Main, #23F69A)' } : undefined}>
                      축구
                    </S.SubjectOneText>
                  </S.SubjectOne>

                  <S.SubjectOne onClick={() => handleSportSelection('농구')}
                  style={selectedSport === '농구' ? { border: '1px solid var(--Main, #23F69A)',  background: 'rgba(35, 246, 154, 0.10)' } : undefined}>
                    <S.SubjectOneText style={selectedSport === '농구' ? { color: 'var(--Main, #23F69A)' } : undefined}>
                      농구
                    </S.SubjectOneText>
                  </S.SubjectOne>

                  <S.SubjectOne onClick={() => handleSportSelection('배구')}
                  style={selectedSport === '배구' ? { border: '1px solid var(--Main, #23F69A)',  background: 'rgba(35, 246, 154, 0.10)' } : undefined}>
                    <S.SubjectOneText style={selectedSport === '배구' ? { color: 'var(--Main, #23F69A)' } : undefined}>
                      배구
                    </S.SubjectOneText>
                  </S.SubjectOne>

                  <S.SubjectOne onClick={() => handleSportSelection('일반경기')}
                  style={selectedSport === '일반경기' ? { border: '1px solid var(--Main, #23F69A)',  background: 'rgba(35, 246, 154, 0.10)' } : undefined}>
                    <S.SubjectOneText style={selectedSport === '일반경기' ? { color: 'var(--Main, #23F69A)' } : undefined}>
                      일반경기
                    </S.SubjectOneText>
                  </S.SubjectOne>

                </S.SubjectBox>
              </S.SubjectContainer>
            {selectedSport !== '일반경기' ? (
              <>
              <S.TeamInputContainer>
                <S.SubjectText>
                  팀 이름
                </S.SubjectText>

                <S.TeamInputBox onClick={() => handleInputSelection('name')}
                style={selectedInput === 'name' ? { border: '1px solid var(--Main, #23F69A)'} : undefined}>
                  <S.TeamInput 
                    type='text'
                    placeholder='팀 이름은 최대 8글자 입니다'
                    value={teamName}
                    onChange={handleTeamNameChange}
                  />
                  <S.TeamInputText style={{color: "var(--White, #FFF)"}}>
                    팀
                  </S.TeamInputText>
                </S.TeamInputBox>
              </S.TeamInputContainer>

              <S.TeamInputContainer>
                <S.SubjectText>
                  팀원
                </S.SubjectText>
                {dividedSelectedMembers.map((group, groupIndex) => (
                  <S.MemberSelected key={groupIndex}>
                    {group.map((member, index) => (
                      <S.MemberSelectList key={index}>
                        <S.MemberName>
                          {member.name}
                        </S.MemberName>
                        <div style={{ cursor: "pointer", display: "flex" }} onClick={() => handleRemoveMember(member)}>
                          <XIcon />
                        </div>
                      </S.MemberSelectList>
                    ))}
                  </S.MemberSelected>
                ))}

                <S.TeamInputBox onClick={() => handleInputSelection('member')}
                style={selectedInput === 'member' ? { border: '1px solid var(--Main, #23F69A)'} : undefined}>
                  <S.TeamInput 
                    type='text'
                    placeholder='이름으로 검색하세요'
                    onChange={handleSearchNameChange}
                  />
                  <div style={{cursor: "pointer"}}>
                    <Search/>
                  </div>
                </S.TeamInputBox>
              </S.TeamInputContainer>
              {searchedName !== '' && searchResults.length > 0 && (
                <div>
                  {searchResults.map((result, index) => (
                    <S.MapTeamMember key={index} onClick={() => handleMemberClick(result)}>
                      <S.MemberList>
                        {result.name}
                      </S.MemberList>
                    </S.MapTeamMember>
                  ))}
                </div>
              )}
              </>
            ) : (
              <S.NormalTeamContainer>
                <S.TeamAssign>
                  <S.SubjectText>
                    팀 배정
                  </S.SubjectText>
                  <S.TeamAssignSpan>
                    클릭한 뒤 원하는 종목을 배정할 수 있어요
                  </S.TeamAssignSpan>
                </S.TeamAssign>

                <S.TeamInputContainer>
                  <S.TeamInputBox onClick={() => handleInputSelection('member')}
                  style={selectedInput === 'member' ? { border: '1px solid var(--Main, #23F69A)'} : undefined}>
                    <S.TeamInput 
                      type='text'
                      placeholder='이름으로 검색하세요'
                    >
                    </S.TeamInput>
                    <div style={{cursor: "pointer"}}>
                      <Search/>
                    </div>
                  </S.TeamInputBox>
                </S.TeamInputContainer>
              </S.NormalTeamContainer>
            )}
              

                
                <div style={{display: "flex", justifyContent: "center", marginTop: "20rem"}}>
                  <S.FormationBtn>
                    <S.FormationText>
                      {selectedSport !== '일반경기' ? '포메이션 짜기' : '등록하기'}
                    </S.FormationText>
                  </S.FormationBtn>
                </div>
            </S.ContainerResponse>
          </S.ContainerResponse>
        </S.Container>
      </S.Wrapper>
    </>
  )
}

export default Register