import { useEffect, useRef, useState } from 'react';
import { People, VolleyField } from '../../../assets/index.ts';
import * as S from '../style.ts';
import * as D from './style.ts';
import Draggable from 'react-draggable';
import LoadingContent from '../../../components/Loading/content.tsx';
import { useNavigate, useParams } from 'react-router-dom';
import apiClient from '../../../utils/libs/apiClient.ts';
import { ToastContainer, toast } from 'react-toastify';
import { Toaster } from 'react-hot-toast';

import 'react-toastify/dist/ReactToastify.css';

interface Participate {
  user_id: number;
  user_name: string;
  position_x: number;
  position_y: number;
}

interface FormData {
  team_id: number;
  team_name: string;
  team_type: 'SOCCER' | 'BADMINTON' | 'VOLLEYBALL';
  team_grade: 'ONE' | 'TWO' | 'THREE';
  team_class_type: 'SW' | 'EB';
  author_me: boolean;
  win_count: number;
  participates: Participate[];
  badminton_rank?: 'A' | 'B' | 'C' | 'D';
}

const VolleyForm = () => {
  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  });
  const [deleteTeam, setdeleteTeam] = useState(false);
  const [formData, setFormData] = useState<FormData | null>(null);
  const formationFieldRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  const teamId = id;

  useEffect(() => {
    if (formationFieldRef.current) {
      const { left, top, right, bottom } = formationFieldRef.current.getBoundingClientRect();
      setBounds({
        left: 20,
        top: 20,
        right: right - left - 55,
        bottom: bottom - top - 65,
      });
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (formationFieldRef.current) {
        const { left, top, right, bottom } = formationFieldRef.current.getBoundingClientRect();
        setBounds({
          left: 20,
          top: 40,
          right: right - left - 55,
          bottom: bottom - top - 80,
        });
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      // Remove event listener when component unmounts
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const getVolleyForm = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        const response = await apiClient.get(`/team/formation?teamId=${teamId}`, {
          headers: {
            Authorization: token,
          },
          withCredentials: true,
        });
        setFormData(response.data);
      } catch (e: any) {
        if (e.response?.status === 404) {
          setNotFound(true);
        }
      } finally {
        setLoading(false);
      }
    };
    getVolleyForm();
  }, []);

  const deleteMyTeam = async () => {
    try {
      const token = localStorage.getItem('accessToken');

      await apiClient.delete(`/team`, {
        data: {
          team_id: formData!.team_id,
        },
        headers: {
          Authorization: token,
        },
        withCredentials: true,
      });
      navigate(`/matches/volleyball`);
      setTimeout(() => {
        deleteTeamSuccess();
      }, 500);
    } catch (e) {
      navigate(`/matches/volleyball`);
      setTimeout(() => {
        deleteTeamFail();
      }, 500);
    }
  };

  const GoBackButton = () => {
    navigate(`/matches/volleyball`);
  };

  const deleteTeamFail = () => {
    toast.error('팀 삭제를 실패하였습니다!', { autoClose: 1000 });
  };

  const deleteTeamSuccess = () => {
    toast.success('팀이 삭제되었습니다!', { autoClose: 1000 });
  };

  if (loading) {
    return <LoadingContent />;
  }

  if (notFound) {
    navigate(`/matches-unknown`);
  }

  return (
    <>
      <S.Wrapper>
        {deleteTeam ? (
          <D.ModalBackground>
            <D.ModalContainer>
              <D.ModalTextContainer style={{ gap: '0' }}>
                <D.ModalTitle>
                  <D.ModalTitleContainer style={{ alignItems: 'center' }}>팀을 삭제하시겠습니까?</D.ModalTitleContainer>
                </D.ModalTitle>
                <D.ModalNovelContainer>
                  <D.ModalNovel style={{ color: 'var(--Error, #DF454A)' }}>
                    팀을 삭제한다면
                    <br /> 팀을 다시 볼 수 없습니다
                  </D.ModalNovel>
                </D.ModalNovelContainer>
              </D.ModalTextContainer>
              <D.ModalButtonContainer>
                <D.ModalCencleButton onClick={() => setdeleteTeam(!deleteTeam)}>아니오</D.ModalCencleButton>
                <D.ModalCheerButton onClick={deleteMyTeam}>삭제하기</D.ModalCheerButton>
              </D.ModalButtonContainer>
            </D.ModalContainer>
          </D.ModalBackground>
        ) : null}
        <S.Container>
          <S.ContainerResponse>
            <S.CategoryContainer>
              <S.Category style={{ color: 'var(--White, #FFF)', paddingRight: '1.5rem' }}>
                {formData?.team_name}팀 배구 포메이션
                <D.MiniText>
                  {formData?.team_grade === 'ONE' ? '1' : formData?.team_grade === 'TWO' ? '2' : '3'}학년{' '}
                  {formData?.team_class_type === 'SW' ? 'SW' : formData?.team_class_type === 'EB' ? '임베' : ''}
                </D.MiniText>
              </S.Category>
              <S.Category style={{ color: 'var(--Main, #23F69A)' }}>
                {formData?.author_me === true ? (
                  <D.DeleteBtn onClick={() => setdeleteTeam(!deleteTeam)}>
                    <D.DeleteText>삭제하기</D.DeleteText>
                  </D.DeleteBtn>
                ) : (
                  <S.Category style={{ color: 'var(--Main, #23F69A)' }}>{formData?.win_count}승</S.Category>
                )}
              </S.Category>
            </S.CategoryContainer>

            <S.ContainerResponse style={{ paddingBottom: '3.5rem' }}>
              <D.ImgBox ref={formationFieldRef} img={VolleyField} style={{ position: 'relative' }}>
                {formData?.participates &&
                  formData?.participates.map((player) => (
                    <div key={player.user_id} style={{ position: 'absolute' }}>
                      <div style={{ position: 'relative' }}>
                        <Draggable
                          defaultPosition={{
                            x: window.innerWidth < 410 ? player.position_x * 0.8 : player.position_x,
                            y: window.innerWidth < 410 ? player.position_y * 0.9 : player.position_y,
                          }}
                          bounds={bounds}
                          nodeRef={formationFieldRef}
                        >
                          <D.PlayerContainer style={{ cursor: 'pointer' }}>
                            <People />
                            <D.PlayerText style={{ userSelect: 'none' }}>{player.user_name}</D.PlayerText>
                          </D.PlayerContainer>
                        </Draggable>
                      </div>
                    </div>
                  ))}
              </D.ImgBox>
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
          </S.ContainerResponse>
        </S.Container>
      </S.Wrapper>
      <ToastContainer autoClose={1000} />
      <div>
        <Toaster position="top-right" reverseOrder={true} />
      </div>
    </>
  );
};

export default VolleyForm;
