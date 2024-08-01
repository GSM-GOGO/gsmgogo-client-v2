import { useEffect, useState } from 'react'
import * as S from './style.ts'
import { Search, XIcon } from '../../assets/index.ts'
import { useNavigate } from 'react-router-dom'
import Nomal from './nomal.tsx'
import useStorePoint from '../../utils/libs/storePoint'
import { ToastContainer, toast } from 'react-toastify'
import { Toaster } from 'react-hot-toast'
import 'react-toastify/dist/ReactToastify.css'
import { SportsData } from '../../types/Register.ts'
import { getSearch } from '../../apis/Register/getSearch.ts'
import { getIsLeader } from '../../apis/Register/getIsLeader.ts'
import { postNormalTeam } from '../../apis/Register/postNormalTeam.ts'

interface Data {
  id: number
  name: string
  normalSports: string[]
  grade: number
  class: number
}

type eventArrEnumType = '축구' | '배드민턴' | '배구' | '일반경기'

const eventArr: eventArrEnumType[] = ['축구', '배드민턴', '배구', '일반경기']

type Numbertype = {
  [key: string]: number
}

const MAX_MEMBERS: Numbertype = {
  축구: 8,
  배드민턴: 2,
  배구: 9,
}
const Number: Numbertype = {
  ONE: 1,
  TWO: 2,
  THREE: 3,
  FOUR: 4,
}

const Register = () => {
  const [selectedSport, setSelectedSport] = useState('축구')
  const [teamName, setTeamName] = useState('')
  const [searchedName, setSearchedName] = useState('')
  const [searchResults, setSearchResults] = useState<SportsData[]>([])
  const [selectedMembers, setSelectedMembers] = useState<SportsData[]>([])
  const isLeader = useStorePoint((state) => state.leader)
  const setIsLeader = useStorePoint((state) => state.setIsLeader)
  const [allSportsFull, setAllSportsFull] = useState(false)
  const navigate = useNavigate()

  const goSports = () => {
    let sportPath = ''
    if (selectedSport === '축구') {
      sportPath = 'soccer'
    } else if (selectedSport === '배드민턴') {
      sportPath = 'badminton'
    } else if (selectedSport === '배구') {
      sportPath = 'volleyball'
    }
    const selectedMemberIds = selectedMembers.map((member) => member.user_id)
    navigate(`/register/${sportPath}`, {
      state: {
        selectedSport: sportPath,
        teamName: teamName,
        selectedMembers: selectedMembers.map((member) => member.user_name),
        selectedId: selectedMemberIds,
      },
    })
  }

  const debounce = (func: Function, delay: number) => {
    let timer: NodeJS.Timeout
    return (...args: any[]) => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        func(...args)
      }, delay)
    }
  }

  const delayedSearch = debounce((searchValue: string) => {
    setSearchedName(searchValue)
  }, 500)

  useEffect(() => {
    getSearch(searchedName, selectedSport, selectedMembers)
  }, [searchedName])

  useEffect(() => {
    const fetchIsLeader = async () => {
      const leaderStatus = await getIsLeader()
      setIsLeader(leaderStatus)
    }

    fetchIsLeader()
  }, [])

  const handleSportSelection = (sport: string) => {
    setSelectedSport(sport)
    setTeamName('')
    setSearchedName('')
    setSearchResults([])
    setSelectedMembers([])
  }

  const handleTeamNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value.slice(0, 6)
    setTeamName(newName)
  }

  const handleSearchNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchedName = e.target.value.replace(/[^\uAC00-\uD7A3]/gi, '')
    delayedSearch(searchedName)
  }

  const handleMemberClick = (member: SportsData) => {
    if (selectedMembers.length < MAX_MEMBERS[selectedSport]) {
      if (
        !selectedMembers.some(
          (selected) => selected.user_name === member.user_name,
        )
      ) {
        setSelectedMembers([...selectedMembers, member])
        setSearchResults(
          searchResults.filter(
            (result) => result.user_name !== member.user_name,
          ),
        )
      }
    }
  }

  const handleRemoveMember = (member: SportsData) => {
    setSelectedMembers(
      selectedMembers.filter((selected) => selected !== member),
    )

    const updatedSearchResults = [...searchResults, member]

    const sortedResults = updatedSearchResults.sort((a, b) => {
      const gradeComparison = Number[a.user_grade] - Number[b.user_grade]
      if (gradeComparison !== 0) {
        return gradeComparison
      }
      return Number[a.user_class] - Number[b.user_class]
    })

    setSearchResults(sortedResults)
  }

  const dividedSelectedMembers: SportsData[][] = []
  for (let i = 0; i < selectedMembers.length; i += 4) {
    dividedSelectedMembers.push(selectedMembers.slice(i, i + 4))
  }

  type NormalTeamType =
    | 'TOSS_RUN'
    | 'MISSION_RUN'
    | 'TUG_OF_WAR'
    | 'FREE_THROW'
    | 'GROUP_ROPE_JUMP'
    | 'CROSS_ROPE_JUMP'

  const TeamType: { [key: string]: NormalTeamType } = {
    '이어달리기(남4,여2)': 'TOSS_RUN',
    미션달리기: 'MISSION_RUN',
    줄다리기: 'TUG_OF_WAR',
    '농구 자유투 릴레이': 'FREE_THROW',
    '단체 줄넘기': 'GROUP_ROPE_JUMP',
    '8자 줄넘기': 'CROSS_ROPE_JUMP',
  }

  const [dataArr, setDataArr] = useState<Data[]>([])

  const handleClickRegister = async () => {
    try {
      const userTeamData = dataArr.map((user) => ({
        user_id: user.id,
        team_types: user.normalSports.map((sport: string) => TeamType[sport]),
      }))

      postNormalTeam(userTeamData)
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || '알 수 없는 오류가 발생했습니다.'
      setTimeout(() => {
        toast.error(errorMessage, { autoClose: 1000 })
      }, 500)
    }
  }

  return (
    <div>
      <S.Wrapper>
        <S.Container>
          <S.ContainerResponse>
            <S.CategoryContainer>
              <S.Category style={{ color: 'var(--White, #FFF)' }}>
                팀 추가
              </S.Category>
            </S.CategoryContainer>
            {isLeader === true ? (
              <S.ContainerResponse>
                <S.SubjectContainer>
                  <S.SubjectText>종목</S.SubjectText>
                  <S.SubjectBox>
                    {eventArr.map((item, i) => (
                      <S.SubjectOne
                        key={i}
                        onClick={() => handleSportSelection(item)}
                        selectedSport={selectedSport === item}
                      >
                        <S.SubjectOneText
                          selectedSport={selectedSport === item}
                        >
                          {item}
                        </S.SubjectOneText>
                      </S.SubjectOne>
                    ))}
                  </S.SubjectBox>
                </S.SubjectContainer>
                {selectedSport !== '일반경기' ? (
                  <>
                    <S.TeamInputContainer>
                      <S.SubjectText>팀 이름</S.SubjectText>

                      <S.TeamInputBox>
                        <S.TeamInput
                          type='text'
                          placeholder='팀 이름은 최대 6글자 입니다'
                          value={teamName}
                          onChange={handleTeamNameChange}
                        />
                        <S.TeamInputText
                          style={{ color: 'var(--White, #FFF)' }}
                        >
                          {selectedSport === '축구' ? 'FC' : '팀'}
                        </S.TeamInputText>
                      </S.TeamInputBox>
                    </S.TeamInputContainer>

                    <S.TeamInputContainer>
                      <S.SubjectText>팀원</S.SubjectText>
                      {dividedSelectedMembers.map((group, groupIndex) => (
                        <S.MemberSelected key={groupIndex}>
                          {group.map((member, index) => (
                            <S.MemberSelectList key={index}>
                              <S.MemberName>{member.user_name}</S.MemberName>
                              <div
                                style={{ cursor: 'pointer', display: 'flex' }}
                                onClick={() => handleRemoveMember(member)}
                              >
                                <XIcon />
                              </div>
                            </S.MemberSelectList>
                          ))}
                        </S.MemberSelected>
                      ))}

                      <S.TeamInputBox>
                        <S.TeamInput
                          type='text'
                          placeholder='이름으로 검색하세요'
                          onChange={handleSearchNameChange}
                        />
                        <div style={{ cursor: 'pointer' }}>
                          <Search />
                        </div>
                      </S.TeamInputBox>
                    </S.TeamInputContainer>
                    {searchedName !== '' && searchResults.length > 0 && (
                      <S.overScroll style={{ height: '22.5em' }}>
                        {searchResults.map((result, index) => (
                          <S.MapTeamMember
                            key={index}
                            onClick={() => handleMemberClick(result)}
                          >
                            <S.MemberName>
                              {Number[result.user_grade]}학년
                              {Number[result.user_class]}반 {result.user_name}
                            </S.MemberName>
                          </S.MapTeamMember>
                        ))}
                      </S.overScroll>
                    )}
                  </>
                ) : (
                  <Nomal
                    dataArr={dataArr}
                    setDataArr={setDataArr}
                    setAllSportsFull={setAllSportsFull}
                  />
                )}

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '20rem',
                  }}
                >
                  {selectedSport !== '일반경기' ? (
                    <S.FormationBtn
                      disabled={
                        (selectedSport !== '일반경기' &&
                          selectedMembers.length !==
                            MAX_MEMBERS[selectedSport]) ||
                        teamName === ''
                      }
                      onClick={() => {
                        selectedSport !== '일반경기'
                          ? goSports()
                          : handleClickRegister()
                      }}
                      style={{
                        backgroundColor:
                          selectedSport == '일반경기' ||
                          (selectedMembers.length ===
                            MAX_MEMBERS[selectedSport] &&
                            teamName !== '')
                            ? 'var(--Main, #23F69A)'
                            : undefined,
                        cursor:
                          selectedSport == '일반경기' ||
                          (selectedMembers.length ===
                            MAX_MEMBERS[selectedSport] &&
                            teamName !== '')
                            ? 'pointer'
                            : 'not-allowed',
                      }}
                    >
                      <S.FormationText
                        style={{
                          color:
                            selectedMembers.length ===
                              MAX_MEMBERS[selectedSport] && teamName !== ''
                              ? 'var(--Black, #1C1C1F)'
                              : 'undefined',
                        }}
                      >
                        {selectedSport !== '일반경기'
                          ? '포메이션 짜기'
                          : '등록하기'}
                      </S.FormationText>
                    </S.FormationBtn>
                  ) : (
                    <S.FormationBtn
                      onClick={() => {
                        handleClickRegister()
                      }}
                      style={{
                        backgroundColor:
                          allSportsFull && selectedSport == '일반경기'
                            ? 'var(--Main, #23F69A)'
                            : undefined,
                        cursor:
                          allSportsFull && selectedSport == '일반경기'
                            ? 'pointer'
                            : 'not-allowed',
                      }}
                    >
                      <S.FormationText
                        style={{
                          color:
                            allSportsFull && selectedSport == '일반경기'
                              ? 'var(--Black, #1C1C1F)'
                              : 'undefined',
                        }}
                      >
                        등록하기
                      </S.FormationText>
                    </S.FormationBtn>
                  )}
                </div>
              </S.ContainerResponse>
            ) : (
              <S.ContainerResponse>
                <S.SubjectContainer>
                  <S.SubjectText>종목</S.SubjectText>
                  <S.SubjectBox>
                    <S.SubjectOne
                      onClick={() => handleSportSelection('배드민턴')}
                      selectedSport={selectedSport === '배드민턴'}
                    >
                      <S.SubjectOneText
                        selectedSport={selectedSport === '배드민턴'}
                      >
                        배드민턴
                      </S.SubjectOneText>
                    </S.SubjectOne>
                  </S.SubjectBox>
                </S.SubjectContainer>
                <S.TeamInputContainer>
                  <S.SubjectText>팀 이름</S.SubjectText>

                  <S.TeamInputBox>
                    <S.TeamInput
                      type='text'
                      placeholder='팀 이름은 최대 6글자 입니다'
                      value={teamName}
                      onChange={handleTeamNameChange}
                    />
                    <S.TeamInputText style={{ color: 'var(--White, #FFF)' }}>
                      팀
                    </S.TeamInputText>
                  </S.TeamInputBox>
                </S.TeamInputContainer>

                <S.TeamInputContainer>
                  <S.SubjectText>팀원</S.SubjectText>
                  {dividedSelectedMembers.map((group, groupIndex) => (
                    <S.MemberSelected key={groupIndex}>
                      {group.map((member, index) => (
                        <S.MemberSelectList key={index}>
                          <S.MemberName>{member.user_name}</S.MemberName>
                          <div
                            style={{ cursor: 'pointer', display: 'flex' }}
                            onClick={() => handleRemoveMember(member)}
                          >
                            <XIcon />
                          </div>
                        </S.MemberSelectList>
                      ))}
                    </S.MemberSelected>
                  ))}

                  <S.TeamInputBox>
                    <S.TeamInput
                      type='text'
                      placeholder='이름으로 검색하세요'
                      onChange={handleSearchNameChange}
                    />
                    <div style={{ cursor: 'pointer' }}>
                      <Search />
                    </div>
                  </S.TeamInputBox>
                </S.TeamInputContainer>
                {searchedName !== '' && searchResults.length > 0 && (
                  <S.overScroll style={{ height: '22.5em' }}>
                    {searchResults.map((result, index) => (
                      <S.MapTeamMember
                        key={index}
                        onClick={() => handleMemberClick(result)}
                      >
                        <S.MemberName>
                          {Number[result.user_grade]}학년
                          {Number[result.user_class]}반 {result.user_name}
                        </S.MemberName>
                      </S.MapTeamMember>
                    ))}
                  </S.overScroll>
                )}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '20rem',
                  }}
                >
                  <S.FormationBtn
                    disabled={
                      (selectedSport !== '일반경기' &&
                        selectedMembers.length !==
                          MAX_MEMBERS[selectedSport]) ||
                      teamName === ''
                    }
                    onClick={goSports}
                    style={{
                      backgroundColor:
                        selectedSport == '일반경기' ||
                        (selectedMembers.length ===
                          MAX_MEMBERS[selectedSport] &&
                          teamName !== '')
                          ? 'var(--Main, #23F69A)'
                          : undefined,
                      cursor:
                        selectedSport == '일반경기' ||
                        (selectedMembers.length ===
                          MAX_MEMBERS[selectedSport] &&
                          teamName !== '')
                          ? 'pointer'
                          : 'not-allowed',
                    }}
                  >
                    <S.FormationText
                      style={{
                        color:
                          selectedMembers.length ===
                            MAX_MEMBERS[selectedSport] && teamName !== ''
                            ? 'var(--Black, #1C1C1F)'
                            : undefined,
                      }}
                    >
                      {selectedSport !== '일반경기'
                        ? '포메이션 짜기'
                        : '등록하기'}
                    </S.FormationText>
                  </S.FormationBtn>
                </div>
              </S.ContainerResponse>
            )}
          </S.ContainerResponse>
        </S.Container>
      </S.Wrapper>
      <ToastContainer autoClose={1000} />
      <div>
        <Toaster position='top-right' reverseOrder={true} />
      </div>
    </div>
  )
}

export default Register
