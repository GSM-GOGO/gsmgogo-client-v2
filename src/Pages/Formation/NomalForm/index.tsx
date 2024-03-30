import { useEffect, useState } from 'react';
import { OpenReview, CloseReview } from '../../../assets';
import HeaderContainer from '../../../components/HeaderContainer';
import * as S from './style.ts';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import apiClient from '../../../utils/libs/apiClient.ts';
import { ToastContainer, toast } from 'react-toastify';

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
      } catch (e) {
        console.log(e);
      }
    };

    fetchNormal();
  }, [id]);

  const deleteTeam = async () => {
    console.log('hi');
    console.log(teamId);
    try {
      const token = localStorage.getItem('accessToken');

      await apiClient.delete(`/team`, {
        data: { team_id: teamId },
        headers: {
          Authorization: token,
        },
      });
      navigate('/matches/NomalMatch');
      toast.success('팀이 삭제되었습니다!', { autoClose: 1000 });
    } catch (e: ErrorResponse | any) {
      const errorMessage = e.response?.data?.message || 'Unexpected error occurred';
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
      <HeaderContainer />
      <S.Wrapper>
        <ToastContainer autoClose={2000} />
        <S.Container>
          <S.ContainerResponse>
            <S.TeamTitleContainer>
              <S.TeamTextContainer>
                <S.TeamName>
                  {teamList.team_grade === 'ONE' ? '1학년' : teamList.team_grade === 'TWO' ? '2학년' : '3학년'}{' '}
                  {teamList.team_class === 'SW' ? '소프트웨어 개발과' : '임베디드 개발과'} 일반 경기
                </S.TeamName>
              </S.TeamTextContainer>

              {teamList.author_me === true ? <S.DeleteButton onClick={deleteTeam}>삭제하기</S.DeleteButton> : null}
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
    </>
  );
};

export default NomalForm;
