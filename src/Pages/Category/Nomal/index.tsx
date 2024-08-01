import * as S from './style.ts'
import Category from '../../../components/Category/index.tsx'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { EmptyPlaying } from '../../../assets/index.ts'
import { Team } from '../../../types/Team.ts'
import fetchNormal from '../../../apis/Category/fetchNormal.ts'

const NomalMatch = () => {
  const navigate = useNavigate()

  const [addteam, setAddteam] = useState(false)
  const [teamList, setTeamList] = useState<Team[]>([])

  const GoRegister = () => {
    navigate(`/register`)
  }

  useEffect(() => {
    fetchNormal(setTeamList)
  }, [])

  return (
    <>
      {addteam ? (
        <S.ModalBackground>
          <S.ModalContainer>
            <S.ModalTextContainer style={{ gap: '0' }}>
              <S.ModalTitle>
                <S.ModalTitleContainer style={{ alignItems: 'center' }}>
                  팀을 등록하시겠습니까?
                </S.ModalTitleContainer>
              </S.ModalTitle>
              <S.ModalNovelContainer>
                <S.ModalNovel style={{ color: 'var(--Error, #DF454A)' }}>
                  경기에 참여한 선수는 자신이 참여한 경기에
                  <br /> 투표할 수 없습니다
                </S.ModalNovel>
              </S.ModalNovelContainer>
            </S.ModalTextContainer>
            <S.ModalButtonContainer>
              <S.ModalCencleButton onClick={() => setAddteam(!addteam)}>
                아니오
              </S.ModalCencleButton>
              <S.ModalCheerButton onClick={GoRegister}>
                팀구성하기
              </S.ModalCheerButton>
            </S.ModalButtonContainer>
          </S.ModalContainer>
        </S.ModalBackground>
      ) : null}

      <S.Wrapper>
        <S.Container>
          <S.ContainerResponse>
            <Category />
            <S.ListWrapper center={teamList.length == 0}>
              {teamList.length !== 0 ? (
                <>
                  {teamList.map((team) => (
                    <>
                      {team.my_team === true ? (
                        <>
                          <S.ListContainer>
                            <S.List>
                              <S.TextContainer>
                                <S.TeamTextContainer>
                                  <S.TeamClass>
                                    {team.team_grade === 'ONE'
                                      ? '1학년'
                                      : team.team_grade === 'TWO'
                                        ? '2학년'
                                        : '3학년'}
                                  </S.TeamClass>
                                  <S.TeamClass>
                                    {team.team_class_type === 'SW'
                                      ? '소프트웨어 개발과'
                                      : '임베디드 개발과'}
                                  </S.TeamClass>
                                </S.TeamTextContainer>
                              </S.TextContainer>
                              <S.CheckButton
                                onClick={() =>
                                  navigate(
                                    `/matches/nomal-match/form/${team.team_id}`,
                                  )
                                }
                              >
                                확인하기
                              </S.CheckButton>
                            </S.List>
                          </S.ListContainer>
                          <S.StrokeContainer>
                            <S.Stroke />
                          </S.StrokeContainer>
                        </>
                      ) : (
                        <></>
                      )}
                    </>
                  ))}

                  {teamList.map((team) => (
                    <>
                      {team.my_team === false ? (
                        <>
                          <S.ListContainer>
                            <S.List>
                              <S.TextContainer>
                                <S.TeamTextContainer>
                                  <S.TeamClass>
                                    {team.team_grade === 'ONE'
                                      ? '1학년'
                                      : team.team_grade === 'TWO'
                                        ? '2학년'
                                        : '3학년'}
                                  </S.TeamClass>
                                  <S.TeamClass>
                                    {team.team_class_type === 'SW'
                                      ? '소프트웨어 개발과'
                                      : '임베디드 개발과'}
                                  </S.TeamClass>
                                </S.TeamTextContainer>
                              </S.TextContainer>
                              <S.ButtonContainer>
                                <S.CheckButton
                                  onClick={() =>
                                    navigate(
                                      `/matches/nomal-match/form/${team.team_id}`,
                                    )
                                  }
                                >
                                  확인하기
                                </S.CheckButton>
                              </S.ButtonContainer>
                            </S.List>
                          </S.ListContainer>
                        </>
                      ) : (
                        <></>
                      )}
                    </>
                  ))}
                </>
              ) : (
                <S.SvgContainer>
                  <EmptyPlaying />
                </S.SvgContainer>
              )}
              {/* <S.AddButton onClick={() => setAddteam(!addteam)}>
                <TeamAddButton />
              </S.AddButton> */}
            </S.ListWrapper>
          </S.ContainerResponse>
        </S.Container>
      </S.Wrapper>
    </>
  )
}

export default NomalMatch
