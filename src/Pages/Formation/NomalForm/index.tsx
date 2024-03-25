import { useState } from 'react';
import { OpenReview, CloseReview } from '../../../assets';
import HeaderContainer from '../../../components/HeaderContainer';
import * as S from './style.ts';
import { useNavigate } from 'react-router-dom';

const NomalForm = () => {
  const [activeCategoryId, setActiveCategoryId] = useState(null);

  const toggleCategory = (categoryId: any) => {
    setActiveCategoryId(categoryId === activeCategoryId ? null : categoryId);
  };

  const navigate = useNavigate();

  // 테스트
  const categories = [
    {
      id: 1,
      name: '6인 7각',
      candidate: [
        '곽민성',
        '권태연',
        '김유준',
        '김주은',
        '김태윤',
        '김현',
        '박진우',
        '방가온',
        '손찬형',
        '양동찬',
        '오은찬',
        '이성민',
        '이예나',
        '이진헌',
        '전민혁',
        '정태관',
      ],
    },
    { id: 2, name: '줄파도타기', candidate: ['신희성', '김동학'] },
    { id: 3, name: '미션달리기', candidate: ['김태윤', '정태관'] },
    { id: 4, name: '농구 자유투 릴레이', candidate: ['김태윤', '정태관'] },
    { id: 5, name: '줄다리기', candidate: ['김태윤', '정태관'] },
    { id: 6, name: '이어달리기', candidate: ['김태윤', '정태관'] },
  ];
  // 테스트

  return (
    <>
      <HeaderContainer />
      <S.Wrapper>
        <S.Container>
          <S.ContainerResponse>
            <S.TeamTextContainer>
              <S.TeamName>소프트웨어 개발과 일반 경기</S.TeamName>
              <S.TeamClass>2학년 SW</S.TeamClass>
            </S.TeamTextContainer>
            <S.ListWrapper>
              {categories.map((category) => (
                <S.ListContainer key={category.id}>
                  <S.List onClick={() => toggleCategory(category.id)}>
                    <S.ListTitle>
                      <S.SportsText>{category.name}</S.SportsText>
                      {category.id === activeCategoryId ? <CloseReview /> : <OpenReview />}
                    </S.ListTitle>
                    {category.id === activeCategoryId && (
                      <S.CandiateContainer>
                        {category.candidate.map((candidate, index) => (
                          <S.CandiateButton key={index}>{candidate}</S.CandiateButton>
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
