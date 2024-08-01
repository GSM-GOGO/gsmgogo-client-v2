import { useEffect, useRef, useState } from 'react'
import { People } from '../../../assets/index.ts'
import * as S from '../style.ts'
import * as D from './style.ts'
import Draggable from 'react-draggable'
import BadmintonField from '../../../assets/png/BadmintonField.png'
import LoadingContent from '../../../components/Loading/content.tsx'
import { useNavigate, useParams } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Toaster } from 'react-hot-toast'
import 'react-toastify/dist/ReactToastify.css'
import { TeamFormationData } from '../../../types/TeamFormationData.ts'

import { getTeamFormationData } from '../../../apis/Formation/getTeamFormationData.ts'
import { deleteTeamApi } from '../../../apis/Formation/deleteMyTeam.ts'

const BadmintonForm = () => {
  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  })
  const [formData, setFormData] = useState<TeamFormationData | null>(null)
  const [deleteTeam, setdeleteTeam] = useState(false)
  const formationFieldRef = useRef<HTMLDivElement>(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)
  const [disableDrag, setDisableDrag] = useState(false)

  const navigate = useNavigate()
  const { id } = useParams()

  const teamId = id

  useEffect(() => {
    const updateBounds = () => {
      if (formationFieldRef.current) {
        const { left, top, right, bottom } =
          formationFieldRef.current.getBoundingClientRect()
        setBounds({
          left: 20,
          top: 20,
          right: right - left - 55,
          bottom: bottom - top - 65,
        })
      } else {
        setTimeout(updateBounds, 500)
      }
    }

    updateBounds()
  }, [])

  useEffect(() => {
    getTeamFormationData(teamId, setFormData, setNotFound, setLoading)
  }, [teamId])

  useEffect(() => {
    const handleResize = () => {
      setDisableDrag(window.innerWidth < 500)
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const deleteMyTeam = async () => {
    if (formData) {
      deleteTeamApi(formData.team_id, navigate, '/matches/badminton')
    }
  }

  const GoBackButton = () => {
    navigate(-1)
  }

  if (loading) {
    return <LoadingContent />
  }

  if (notFound) {
    navigate(`/matches-unknown`)
  }

  return (
    <>
      <S.Wrapper>
        {deleteTeam && (
          <D.ModalBackground>
            <D.ModalContainer>
              <D.ModalTextContainer style={{ gap: '0' }}>
                <D.ModalTitle>
                  <D.ModalTitleContainer style={{ alignItems: 'center' }}>
                    팀을 삭제하시겠습니까?
                  </D.ModalTitleContainer>
                </D.ModalTitle>
                <D.ModalNovelContainer>
                  <D.ModalNovel style={{ color: 'var(--Error, #DF454A)' }}>
                    팀을 삭제한다면
                    <br /> 팀을 다시 볼 수 없습니다
                  </D.ModalNovel>
                </D.ModalNovelContainer>
              </D.ModalTextContainer>
              <D.ModalButtonContainer>
                <D.ModalCencleButton onClick={() => setdeleteTeam(!deleteTeam)}>
                  아니오
                </D.ModalCencleButton>
                <D.ModalCheerButton onClick={deleteMyTeam}>
                  삭제하기
                </D.ModalCheerButton>
              </D.ModalButtonContainer>
            </D.ModalContainer>
          </D.ModalBackground>
        )}
        <S.Container>
          <S.ContainerResponse>
            <S.CategoryContainer>
              <S.Category
                style={{ color: 'var(--White, #FFF)', paddingRight: '1.5rem' }}
              >
                {formData?.team_name}팀 배드민턴 포메이션
                <D.MiniText>
                  {formData?.badminton_rank ? (
                    <>
                      {formData.badminton_rank === 'A'
                        ? 'A조'
                        : formData.badminton_rank === 'B'
                          ? 'B조'
                          : formData.badminton_rank === 'C'
                            ? 'C조'
                            : formData.badminton_rank === 'D'
                              ? '여자조'
                              : ''}
                    </>
                  ) : (
                    <>
                      {formData?.team_grade === 'ONE'
                        ? '1'
                        : formData?.team_grade === 'TWO'
                          ? '2'
                          : '3'}
                      학년{' '}
                      {formData?.team_class_type === 'SW'
                        ? 'SW'
                        : formData?.team_class_type === 'EB'
                          ? '임베'
                          : ''}
                    </>
                  )}
                </D.MiniText>
              </S.Category>
              <S.Category style={{ color: 'var(--Main, #23F69A)' }}>
                {formData?.author_me === true ? (
                  <S.Category style={{ color: 'var(--Main, #23F69A)' }}>
                    {formData.win_count}승
                  </S.Category>
                ) : (
                  <S.Category style={{ color: 'var(--Main, #23F69A)' }}>
                    {formData?.win_count}승
                  </S.Category>
                )}
              </S.Category>
            </S.CategoryContainer>

            <S.ContainerResponse style={{ paddingBottom: '3.5rem' }}>
              <D.ImgBox
                ref={formationFieldRef}
                img={BadmintonField}
                style={{ position: 'relative' }}
              >
                {formData?.participates &&
                  formData?.participates.length > 0 &&
                  formData?.participates.map((player, index) => (
                    <div key={player.user_id} style={{ position: 'absolute' }}>
                      <div style={{ position: 'relative' }}>
                        <Draggable
                          defaultPosition={{
                            x:
                              window.innerWidth < 560
                                ? player.position_x * 0.7 + index
                                : player.position_x + index,
                            y:
                              window.innerWidth < 560
                                ? player.position_y * 1 + index
                                : player.position_y + index,
                          }}
                          bounds={bounds}
                          nodeRef={formationFieldRef}
                          disabled={disableDrag}
                        >
                          <D.PlayerContainer style={{ cursor: 'pointer' }}>
                            <People />
                            <D.PlayerText style={{ userSelect: 'none' }}>
                              {player.user_name}
                            </D.PlayerText>
                          </D.PlayerContainer>
                        </Draggable>
                      </div>
                    </div>
                  ))}
              </D.ImgBox>
            </S.ContainerResponse>
          </S.ContainerResponse>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              top: '20rem',
              position: 'relative',
            }}
          >
            <S.BackButton onClick={GoBackButton}>
              <S.BackText>돌아가기</S.BackText>
            </S.BackButton>
          </div>
        </S.Container>
      </S.Wrapper>
      <ToastContainer autoClose={1000} />
      <div>
        <Toaster position='top-right' reverseOrder={true} />
      </div>
    </>
  )
}

export default BadmintonForm
