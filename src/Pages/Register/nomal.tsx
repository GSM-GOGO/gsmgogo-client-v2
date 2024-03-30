import { useEffect, useState } from 'react';
import * as S from './style.ts';
import { Search, SmallXIcon } from '../../assets/index.ts';
import apiClient from '../../utils/libs/apiClient.ts';

interface Data {
  id: number;
  name: string;
  normalSports: string[];
  grade: number;
  class: number;
}

interface UserListResponse {
  user_id: number;
  user_name: string;
  user_grade: 'ONE' | 'TWO' | 'THREE';
  user_class: 'ONE' | 'TWO' | 'THREE' | 'FOUR';
}

interface NormalType {
  normalSport: string;
  normalPeople: number;
  maxPeople: number;
}

type Numbertype = {
  ONE: number;
  TWO: number;
  THREE: number;
  FOUR: number;
};

const Number: Numbertype = {
  ONE: 1,
  TWO: 2,
  THREE: 3,
  FOUR: 4,
};


interface NomalProps {
  dataArr: Data[];
  setAllSportsFull: boolean;
  setDataArr: React.Dispatch<React.SetStateAction<Data[]>>;
}

const Nomal: React.FC<NomalProps> = ({ dataArr, setDataArr, setAllSportsFull }) => {
  const [NormalArr, setNormalArr] = useState<NormalType[]>([
    {
      normalSport: '단체 줄넘기',
      normalPeople: 0,
      maxPeople: 10,
    },
    {
      normalSport: '농구 자유투 릴레이',
      normalPeople: 0,
      maxPeople: 30,
    },
    {
      normalSport: '미션달리기',
      normalPeople: 0,
      maxPeople: 6,
    },
    {
      normalSport: '줄다리기',
      normalPeople: 0,
      maxPeople: 30,
    },
    {
      normalSport: '이어달리기(남3,여3)',
      normalPeople: 0,
      maxPeople: 6,
    },
  ]);

  useEffect(() => {
    const getSearch = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        const response: UserListResponse[] = await apiClient.get(`/user`, {
          headers: {
            Authorization: token,
          },
          withCredentials: true,
        });

        const updatedDataArr = response.data.map((user) => {
          console.log(user);
          return {
            id: user.user_id,
            name: user.user_name,
            normalSports: [],
            class: Number[user.user_class],
            grade: Number[user.user_grade],
          };
        });

        updatedDataArr.sort((a, b) => {
          if (a.grade !== b.grade) {
            return a.grade - b.grade;
          }
          if (a.class !== b.class) {
            return a.class - b.class;
          }
          return a.name.localeCompare(b.name);
        });

        setDataArr(updatedDataArr);
        console.log(updatedDataArr);
      } catch (e) {
        console.log('error');
      }
    };

    getSearch();
  }, []);

  useEffect(() => {
    const updatedNormalArr = NormalArr.map((normal) => {
      let updatedNormal = { ...normal };
      dataArr.forEach((data) => {
        if (data.normalSports.includes(normal.normalSport)) {
          updatedNormal.normalPeople++;
        }
      });
      return updatedNormal;
    });
    setNormalArr(updatedNormalArr);
  }, []);

  const checkSportInUser = (userId: number, sport: string) => {
    const user = dataArr.find((user) => user.id === userId);
    if (!user) return false;

    return user.normalSports.includes(sport);
  };

  const toggleSportUser = (userId: number, sport: string) => {
    const user = dataArr.find((user) => user.id === userId);
    if (!user) return;

    const updatedDataArr = [...dataArr];
    const updatedNormalArr = [...NormalArr];

    const sportIndex = user.normalSports.indexOf(sport);
    const normalIndex = updatedNormalArr.findIndex((normal) => normal.normalSport === sport);
    const maxPeople = updatedNormalArr[normalIndex].maxPeople;

    if (sportIndex === -1 && updatedNormalArr[normalIndex].normalPeople < maxPeople) {
      user.normalSports.push(sport);

      updatedNormalArr[normalIndex].normalPeople++;
    } else if (sportIndex !== -1) {
      user.normalSports.splice(sportIndex, 1);
      updatedNormalArr[normalIndex].normalPeople--;
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
    const foundNames = dataArr.filter((data) => data.name.includes(searchedName));
    setSearchResults(foundNames);
  }, [searchedName, dataArr]);

  const handleSearchNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchedName = e.target.value.replace(/[^\uAC00-\uD7A3]/gi, '');
    setSearchedName(searchedName);
    console.log('searchedName', searchedName);
    if (searchedName === '') {
      setSearchResults(dataArr);
    }
  };

  useEffect(() => {
    const allSportsFull = NormalArr.every((sport) => sport.normalPeople === sport.maxPeople);
    setAllSportsFull(allSportsFull);
  }, [NormalArr]);
  
  

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
              console.log('ddfs', dataArritem); 
              toggleModal();
              setToggleModalId(dataArritem.id);
            }}
          >
            <S.MapTeamMember
              Border={isModalVisible && dataArritem.id == toggleModalId}
              style={{ justifyContent: 'space-between', position: 'relative' }}
            >
              <S.MemberList>
                {dataArritem.grade}학년{dataArritem.class}반 {dataArritem.name}
              </S.MemberList>
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
                        onClick={() => {
                          console.log(i.normalSport);
                          setToggleModalId(i.id);
                          toggleSportUser(dataArritem.id, i.normalSport);
                        }}
                      >
                        <S.OneNormalObj
                          style={{
                            background: checkSportInUser(dataArritem.id, i.normalSport)
                              ? 'rgba(35, 246, 154, 0.20)'
                              : i.normalPeople == i.maxPeople
                                ? 'none'
                                : '',
                          }}
                        >
                          <S.OneNormalText>{i.normalSport}</S.OneNormalText>
                          <S.OneNormalText>{`${i.normalPeople}/${i.maxPeople}`}</S.OneNormalText>
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
