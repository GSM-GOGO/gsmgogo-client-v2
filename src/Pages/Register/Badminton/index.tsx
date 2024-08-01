import { useEffect, useRef, useState } from 'react'
import { People } from '../../../assets/index.ts'
import * as S from './style.ts'
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable'
import BadmintonField from '../../../assets/png/BadmintonField.png'
import { useLocation, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { Toaster } from 'react-hot-toast'
import { postTeam } from '../../../apis/Register/postTeam.ts'

import 'react-toastify/dist/ReactToastify.css'

const Badminton = () => {
  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  })
  const formationFieldRef = useRef<HTMLDivElement>(null)

  const location = useLocation()
  const navigate = useNavigate()

  const { teamName, selectedMembers, selectedId } = location.state

  interface ParticipantPosition {
    id: number
    position_x: number
    position_y: number
  }
  const [participantPositions, setParticipantPositions] = useState<
    ParticipantPosition[]
  >([])

  const convertedMembers = selectedMembers.map(
    (member: string, index: number) => {
      return {
        id: selectedId[index],
        name: member,
        x: [115, 305][index % 2],
        y: [160, 160][index % 2],
      }
    },
  )

  useEffect(() => {
    if (formationFieldRef.current) {
      const { left, top, right, bottom } =
        formationFieldRef.current.getBoundingClientRect()
      setBounds({
        left: 20,
        top: 20,
        right: right - left - 55,
        bottom: bottom - top - 65,
      })
    }
  }, [])

  const handleDragStop = (id: any, _e: DraggableEvent, data: DraggableData) => {
    const participantIndex = convertedMembers.findIndex(
      (participant: { id: any }) => participant.id === id,
    )

    const updatedParticipantPositions = [...participantPositions]

    updatedParticipantPositions[participantIndex] = {
      id,
      position_x: data.x,
      position_y: data.y,
    }

    setParticipantPositions(updatedParticipantPositions)
  }

  const successCreateTeam = () => {
    toast.success('팀 등록에 성공하였습니다!', { autoClose: 1000 })
  }

  const handlePostBadmintonTeam = () => {
    postTeam(
      teamName,
      convertedMembers,
      participantPositions,
      navigate,
      'BADMINTON',
      '/team',
      successCreateTeam,
    )
  }

  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.ContainerResponse>
            <S.CategoryContainer>
              <S.Category
                style={{ color: 'var(--White, #FFF)', paddingRight: '1.5rem' }}
              >
                {teamName}팀 배드민턴 포메이션
              </S.Category>
            </S.CategoryContainer>

            <S.ContainerResponse style={{ paddingBottom: '3.5rem' }}>
              <S.ImgBox
                ref={formationFieldRef}
                img={BadmintonField}
                style={{ position: 'relative' }}
              >
                {convertedMembers.map(
                  (player: {
                    id: number
                    x: number
                    y: number
                    name: string
                  }) => (
                    <div key={player.id} style={{ position: 'absolute' }}>
                      <div style={{ position: 'relative' }}>
                        <Draggable
                          defaultPosition={{ x: player.x, y: player.y }}
                          bounds={bounds}
                          nodeRef={formationFieldRef}
                          onStop={(e, data) =>
                            handleDragStop(player.id, e, data)
                          }
                        >
                          <S.PlayerContainer style={{ cursor: 'pointer' }}>
                            <People />
                            <S.PlayerText style={{ userSelect: 'none' }}>
                              {player.name}
                            </S.PlayerText>
                          </S.PlayerContainer>
                        </Draggable>
                      </div>
                    </div>
                  ),
                )}
              </S.ImgBox>
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
            <S.BackButton onClick={handlePostBadmintonTeam}>
              <S.BackText>등록하기</S.BackText>
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

export default Badminton
