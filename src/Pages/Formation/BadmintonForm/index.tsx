import { useEffect, useRef, useState } from 'react';
import { People } from '../../../assets/index.ts';
import HeaderContainer from '../../../components/HeaderContainer/index.tsx';
import * as S from '../style.ts';
import * as D from './style.ts';
import Draggable from 'react-draggable';
import BadmintonField from '../../../assets/png/BadmintonField.png';
import { useNavigate, useLocation } from 'react-router-dom';
import apiClient from '../../../utils/libs/apiClient.ts';
import { ToastContainer, toast } from 'react-toastify';
import { Toaster } from 'react-hot-toast';

import 'react-toastify/dist/ReactToastify.css';

const BadmintonForm = () => {
  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  });
  const [formData, setFormData] = useState<{
    team_id: number;
    team_name: string;
    team_type: 'SOCCER' | 'BADMINTON' | 'VOLLEYBALL';
    team_grade: 'ONE' | 'TWO' | 'THREE';
    team_class_type: 'SW' | 'EB';
    author_me: boolean;
    win_count: number;
    participates: {
      user_id: number;
      user_name: string;
      position_x: number;
      position_y: number;
    }[];
    badminton_rank?: 'A' | 'B' | 'C' | 'D' | undefined;
  }>({
    team_id: 0,
    team_name: '',
    team_type: 'BADMINTON',
    team_grade: 'ONE',
    team_class_type: 'SW',
    author_me: false,
    win_count: 0,
    participates: [],
  });
  ({});
  const formationFieldRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();
  const location = useLocation();

  const { teamId } = location.state;

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
    const getBadmintonForm = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        const response = await apiClient.get(`/team/formation?teamId=${teamId}`, {
          headers: {
            Authorization: token,
          },
          withCredentials: true,
        });
        setFormData(response.data);
      } catch (e) {
        console.log('error');
      }
    };
    getBadmintonForm();
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
      navigate(`/matches/badminton`);
      setTimeout(() => {
        deleteTeamSuccess();
      }, 500);
    } catch (e) {
      navigate(`/matches/badminton`);
      setTimeout(() => {
        deleteTeamFail();
      }, 500);
      console.log('error');
    }
  };

  const GoBackButton = () => {
    navigate(`/matches/badminton`);
  };

  const deleteTeamFail = () => {
    toast.error('팀 삭제를 실패하였습니다!', { autoClose: 1000 });
  };

  const deleteTeamSuccess = () => {
    toast.success('팀이 삭제되었습니다!', { autoClose: 1000 });
  };

  return (
    <>
      <HeaderContainer />
      <S.Wrapper>
        <S.Container>
          <S.ContainerResponse>
            <S.CategoryContainer>
              <S.Category style={{ color: 'var(--White, #FFF)', paddingRight: '1.5rem' }}>
                어쩌구저쩌구팀 배드민턴 포메이션
                <D.MiniText>
                  {formData.team_grade === 'ONE' ? '1' : formData.team_grade === 'TWO' ? '2' : '3'}학년{' '}
                  {formData.team_class_type === 'SW' ? 'SW' : formData.team_class_type === 'EB' ? '임베' : ''}
                </D.MiniText>
              </S.Category>
              <S.Category style={{ color: 'var(--Main, #23F69A)' }}>
                {formData.author_me === true ? (
                  <D.DeleteBtn onClick={deleteMyTeam}>
                    <D.DeleteText>삭제하기</D.DeleteText>
                  </D.DeleteBtn>
                ) : (
                  <S.Category style={{ color: 'var(--Main, #23F69A)' }}>{formData.win_count}승</S.Category>
                )}
              </S.Category>
            </S.CategoryContainer>

            <S.ContainerResponse style={{ paddingBottom: '3.5rem' }}>
              <D.ImgBox ref={formationFieldRef} img={BadmintonField} style={{ position: 'relative' }}>
                {formData.participates.length > 0 &&
                  formData.participates.map((player, index) => (
                    <div key={player.user_id} style={{ position: 'absolute' }}>
                      <div style={{ position: 'relative' }}>
                        <Draggable
                          defaultPosition={{ x: player.position_x + index, y: player.position_y + index }}
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
        <Toaster position="top-right" reverseOrder={true} />
      </div>
    </>
  );
};

export default BadmintonForm;
