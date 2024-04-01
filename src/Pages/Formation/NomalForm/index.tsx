import { useEffect, useState } from 'react';
import { OpenReview, CloseReview } from '../../../assets';
import * as S from './style.ts';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import apiClient from '../../../utils/libs/apiClient.ts';
import { ToastContainer, toast } from 'react-toastify';
import { Toaster } from 'react-hot-toast';

import 'react-toastify/dist/ReactToastify.css';

type NormalTeamType = 'TOSS_RUN' | 'MISSION_RUN' | 'TUG_OF_WAR' | 'FREE_THROW' | 'GROUP_ROPE_JUMP';

interface ErrorResponse {
  response: {
    data: {
      message: string;
    };
  };
}

const NomalForm = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<number | null>(null); // activeCategoryId 타입 수정
  const [deleteTeam, setdeleteTeam] = useState(false);

  const toggleCategory = (categoryId: number) => {
    setActiveCategoryId(categoryId === activeCategoryId ? null : categoryId);
  };

  const navigate = useNavigate();

  const [teamList, setTeamList] = useState<{
    team_grade: string;
    team_class: string;
    author_me: boolean;
    team_list?: { team_type: NormalTeamType; participates: { user_name: string }[] }[];
  }>({
    // teamList 타입 수정
    team_grade: '',
    team_class: '',
    author_me: false,
  });

  const { id } = useParams();

  const teamId = id;

  useEffect(() => {
    const fetchNormal = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        const response = await apiClient.get(`/team/normal?teamId=${id}`, {
          headers: {
            Authorization: `${token}`,
          },
        });
        setTeamList(response.data);
      } catch (e) {}
    };

    fetchNormal();
  }, [id]);

  const deleteMyTeam = async () => {
    try {
      const token = localStorage.getItem('accessToken');

      await apiClient.delete(`/team`, {
        data: { team_id: teamId },
        headers: {
          Authorization: token,
        },
      });
      navigate('/matches/nomal-match');
      setTimeout(() => {
        toast.success('팀이 삭제되었습니다!', { autoClose: 1000 });
      }, 500);
    } catch (e: ErrorResponse | any) {
      const errorMessage = e.response?.data?.message || '알 수 없는 오류가 일어났습니다.';
      toast.error(errorMessage);
    }
  };

  const TeamType: { [key in NormalTeamType]: string } = {
    TOSS_RUN: '이어달리기',
    MISSION_RUN: '미션달리기',
    TUG_OF_WAR: '줄다리기',
    FREE_THROW: '농구 자유투 릴레이',
    GROUP_ROPE_JUMP: '단체 줄넘기',
  };

  return (
    <>
      {id}
      <S.Wrapper>
        {deleteTeam ? (
          <S.ModalBackground>
            <S.ModalContainer>
              <S.ModalTextContainer style={{ gap: '0' }}>
                <S.ModalTitle>
                  <S.ModalTitleContainer style={{ alignItems: 'center' }}>팀을 삭제하시겠습니까?</S.ModalTitleContainer>
                </S.ModalTitle>
                <S.ModalNovelContainer>
                  <S.ModalNovel style={{ color: 'var(--Error, #DF454A)' }}>
                    팀을 삭제한다면
                    <br /> 팀을 다시 볼 수 없습니다
                  </S.ModalNovel>
                </S.ModalNovelContainer>
              </S.ModalTextContainer>
              <S.ModalButtonContainer>
                <S.ModalCencleButton onClick={() => setdeleteTeam(!deleteTeam)}>아니오</S.ModalCencleButton>
                <S.ModalCheerButton onClick={deleteMyTeam}>삭제하기</S.ModalCheerButton>
              </S.ModalButtonContainer>
            </S.ModalContainer>
          </S.ModalBackground>
        ) : null}
        <S.Container>
          <S.ContainerResponse>
            <S.TeamTitleContainer>
              <S.TeamTextContainer>
                <S.TeamName>
                  {teamList.team_grade === 'ONE' ? '1학년' : teamList.team_grade === 'TWO' ? '2학년' : '3학년'}{' '}
                  {teamList.team_class === 'SW' ? '소프트웨어 개발과' : '임베디드 개발과'} 일반 경기
                </S.TeamName>
              </S.TeamTextContainer>

              {teamList.author_me === true ? (
                <S.DeleteButton onClick={() => setdeleteTeam(!deleteTeam)}>삭제하기</S.DeleteButton>
              ) : null}
            </S.TeamTitleContainer>
            <S.ListWrapper>
              {teamList.team_list?.map((category, index) => (
                <S.ListContainer key={index}>
                  {' '}
                  {/* key 추가 */}
                  <S.List onClick={() => toggleCategory(index)}>
                    <S.ListTitle>
                      <S.SportsText>{TeamType[category.team_type]}</S.SportsText>
                      {index === activeCategoryId ? <CloseReview /> : <OpenReview />}
                    </S.ListTitle>
                    {index === activeCategoryId && (
                      <S.CandiateContainer active={true}>
                        {category.participates.map((candidate, index) => (
                          <S.CandiateButton key={index}>{candidate.user_name}</S.CandiateButton>
                        ))}
                      </S.CandiateContainer>
                    )}
                  </S.List>
                </S.ListContainer>
              ))}
            </S.ListWrapper>
            <S.ReturnButtonContainer>
              <S.ReturnButton onClick={() => navigate('/')}>돌아가기</S.ReturnButton>
            </S.ReturnButtonContainer>
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

export default NomalForm;
