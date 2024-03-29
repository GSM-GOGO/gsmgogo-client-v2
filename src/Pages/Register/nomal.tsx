import { useEffect, useState } from 'react';
import * as S from './style.ts';
import { Search, SmallXIcon } from '../../assets/index.ts';

interface Data {
  id: number;
  name: string;
  gender: string;
  normalSports: string[];
}

interface NormalType {
  normalSport: string;
  normalPeople: number;
  womanNum?: number;
  manNum?: number;
  id?: number;
}

const Nomal = () => {
  const [NormalArr, setNormalArr] = useState<NormalType[]>([
    {
      normalSport: '줄다리기',
      normalPeople: 0,
    },
    {
      normalSport: '농구 자유투 릴레이',
      normalPeople: 0,
    },
    {
      normalSport: '미션달리기',
      normalPeople: 0,
    },
    {
      normalSport: '6인 7각',
      normalPeople: 0,
    },
    {
      normalSport: '줄파도타기',
      normalPeople: 0,
    },
    {
      normalSport: '이어달리기',
      normalPeople: 0,
      womanNum: 1,
      manNum: 1,
    },
  ]);

  const [dataArr, setDataArr] = useState<Data[]>([
    {
      id: 1,
      name: '1101 김순자',
      gender: 'man',
      normalSports: [],
    },
    {
      id: 2,
      name: '1102 김덕자',
      gender: 'woman',
      normalSports: [],
    },
    {
      id: 3,
      name: '1103 김감자',
      gender: 'man',
      normalSports: [],
    },
    {
      id: 4,
      name: '1104 김승자',
      gender: 'man',
      normalSports: [],
    },
    {
      id: 5,
      name: '1105 김정희',
      gender: 'woman',
      normalSports: [],
    },
    {
      id: 6,
      name: '1106 김굽자',
      gender: 'man',
      normalSports: [],
    },
    {
      id: 7,
      name: '1107 김자자',
      gender: 'man',
      normalSports: [],
    },
    {
      id: 8,
      name: '1108 김주자',
      gender: 'man',
      normalSports: [],
    },
    {
      id: 9,
      name: '1109 김자주',
      gender: 'woman',
      normalSports: [],
    },
  ]);

  useEffect(() => {
    const updatedNormalArr = NormalArr.map((normal) => {
      let updatedNormal = { ...normal };
      dataArr.forEach((data) => {
        if (data.normalSports.includes(normal.normalSport)) {
          updatedNormal.normalPeople++;
          if (data.gender === 'woman' && updatedNormal.womanNum !== undefined) {
            updatedNormal.womanNum++;
          } else if (data.gender === 'man' && updatedNormal.manNum !== undefined) {
            updatedNormal.manNum++;
          }
        }
      });
      return updatedNormal;
    });
    setNormalArr(updatedNormalArr);
  }, []);

  const checkSportInUser = (id: any, sport: string) => {
    if (dataArr[id - 1]?.normalSports.includes(sport)) {
      return true;
    } else {
      return false;
    }
  };

  const toggleSportUser = (userId: number, sport: string) => {
    const userIndex = userId - 1;
    if (userIndex < 0 || userIndex >= dataArr.length) {
      return;
    }

    const updatedDataArr = [...dataArr];
    const updatedNormalArr = [...NormalArr];

    const sportIndex = updatedDataArr[userIndex].normalSports.indexOf(sport);
    if (sportIndex === -1) {
      updatedDataArr[userIndex].normalSports.push(sport);

      updatedNormalArr.forEach((normal) => {
        if (normal.normalSport === sport) {
          normal.normalPeople++;
          if (updatedDataArr[userIndex].gender === 'woman' && normal.womanNum !== undefined) {
            normal.womanNum++;
          } else if (updatedDataArr[userIndex].gender === 'man' && normal.manNum !== undefined) {
            normal.manNum++;
          }
        }
      });
    } else {
      updatedDataArr[userIndex].normalSports.splice(sportIndex, 1);

      updatedNormalArr.forEach((normal) => {
        if (normal.normalSport === sport) {
          normal.normalPeople--;
          if (updatedDataArr[userIndex].gender === 'woman' && normal.womanNum !== undefined) {
            normal.womanNum--;
          } else if (updatedDataArr[userIndex].gender === 'man' && normal.manNum !== undefined) {
            normal.manNum--;
          }
        }
      });
    }

    setDataArr(updatedDataArr);
    setNormalArr(updatedNormalArr);
  };

  const [searchedName, setSearchedName] = useState('');
  const [searchResults, setSearchResults] = useState<Data[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {
    setIsModalVisible(true);
  };
  const [toggleModalId, setToggleModalId] = useState<number>();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const foundNames = dataArr.filter((data) => data.name.includes(searchedName));
      setSearchResults(foundNames);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [searchedName]);

  const handleSearchNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchedName = e.target.value.replace(/[^\uAC00-\uD7A3]/gi, '');
    setSearchedName(searchedName);
    if (searchedName === '') {
      setSearchResults(dataArr);
    }
  };

  useEffect(() => {
    setSearchResults(dataArr);
  }, [dataArr]);

  return (
    <S.NormalTeamContainer style={{ overflow: 'hidden' }}>
      <S.TeamAssign>
        <S.SubjectText>팀 배정</S.SubjectText>
        <S.TeamAssignSpan>클릭한 뒤 원하는 종목을 배정할 수 있어요</S.TeamAssignSpan>
      </S.TeamAssign>

      <S.TeamInputContainer>
        <S.TeamInputBox>
          <S.TeamInput type="text" placeholder="이름으로 검색하세요" onChange={handleSearchNameChange} />
          <div style={{ cursor: 'pointer' }}>
            <Search />
          </div>
        </S.TeamInputBox>
      </S.TeamInputContainer>
      <S.overScroll style={{ overflow: 'scroll' }}>
        {(searchedName === '' || searchResults.length === 0 ? dataArr : searchResults).map((dataArritem, index) => (
          <div
            key={index}
            onClick={() => {
              toggleModal();
              setToggleModalId(dataArritem.id);
            }}
          >
            <S.MapTeamMember
              Border={isModalVisible && dataArritem.id == toggleModalId}
              style={{ justifyContent: 'space-between', position: 'relative' }}
            >
              <S.MemberList>{dataArritem.name}</S.MemberList>
              {dataArritem.id != toggleModalId && (
                <S.OneNormalWrapper>
                  {dataArritem.normalSports.map((item, index) => (
                    <S.OneNormalContainer key={index} style={{ cursor: 'default' }}>
                      <S.OneNormalText>{item}</S.OneNormalText>
                      <div
                        style={{ display: 'flex', cursor: 'pointer', justifyContent: 'center' }}
                        onClick={(e) => {
                          toggleSportUser(dataArritem.id, item);
                          e.stopPropagation();
                        }}
                      >
                        <SmallXIcon />
                      </div>
                    </S.OneNormalContainer>
                  ))}
                </S.OneNormalWrapper>
              )}

              {isModalVisible && dataArritem.id == toggleModalId && (
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <S.clickedNormal>
                    {NormalArr.map((i, index) => (
                      <S.MappingText
                        key={index}
                        onClick={(e) => {
                          setToggleModalId(i.id);
                          toggleSportUser(dataArritem.id, i.normalSport);
                          setIsModalVisible(true);
                        }}
                      >
                        <S.OneNormalObj
                          style={{
                            background: checkSportInUser(dataArritem.id, i.normalSport)
                              ? 'rgba(35, 246, 154, 0.20)'
                              : '',
                          }}
                        >
                          <S.OneNormalText>{i.normalSport}</S.OneNormalText>
                          <S.OneNormalText>{`${i.normalPeople}/30`}</S.OneNormalText>
                        </S.OneNormalObj>
                      </S.MappingText>
                    ))}
                  </S.clickedNormal>
                </div>
              )}
            </S.MapTeamMember>
          </div>
        ))}
      </S.overScroll>
    </S.NormalTeamContainer>
  );
};

export default Nomal;
