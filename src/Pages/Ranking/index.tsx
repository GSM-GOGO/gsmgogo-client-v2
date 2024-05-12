import * as S from './style';

import { useQuery } from 'react-query';

import { RankBar } from '@/assets';
import { apiClient } from '@/utils';
import { LoadingContent } from '@/components';

import { Category, CategoryContainer } from '../Formation/style';

const Ranking = () => {
  return (
    <>
      <S.Wrapper>
        <S.Container>
          <CategoryContainer style={{ marginBottom: '1.25rem' }}>
            <Category style={{ color: 'var(--White, #FFF)' }}>랭킹</Category>
          </CategoryContainer>
          <Content />
        </S.Container>
      </S.Wrapper>
    </>
  );
};
const Content = () => {
  const { data: RankData, isLoading: isRankLoading } = useQuery(
    'rankData',
    async () => {
      const token = localStorage.getItem('accessToken');
      const response = await apiClient.get('/rank', {
        headers: {
          Authorization: `${token}`,
        },
      });
      return response.data;
    },
    {
      cacheTime: 300000,
      staleTime: Infinity,
    }
  );

  const { data: myId, isLoading: isMyIdLoading } = useQuery(
    'myId',
    async () => {
      const token = localStorage.getItem('accessToken');
      const response = await apiClient.get('/user/my-id', {
        headers: {
          Authorization: `${token}`,
        },
      });
      return response.data.user_id;
    },
    {
      cacheTime: Infinity,
      staleTime: Infinity,
    }
  );

  if (isRankLoading || isMyIdLoading) return <LoadingContent />;
  if (!RankData || !myId) return null;

  const topThreeDatatest =
    RankData.length > 0
      ? RankData.sort((a: { user_point: number }, b: { user_point: number }) => b.user_point - a.user_point).slice(0, 3)
      : [];

  const firstPlacePointstest = topThreeDatatest.length > 0 ? topThreeDatatest[0].user_point : 0;
  const secondPlacePointstest = topThreeDatatest.length > 1 ? topThreeDatatest[1].user_point : 0;
  const thirdPlacePointstest = topThreeDatatest.length > 2 ? topThreeDatatest[2].user_point : 0;

  const secondPlaceHeighttest = (260 / firstPlacePointstest) * secondPlacePointstest;
  const thirdPlaceHeighttest = (260 / firstPlacePointstest) * thirdPlacePointstest;

  const getRankInfotest = (
    index: number,
    data: {
      user_name: string;
      user_grade: string;
      user_class: string;
      user_point: { toLocaleString: () => string };
    }[]
  ) => {
    const rankInfotest = {
      rankName: '',
      rankPoint: '',
      rankGrade: '',
      rankClass: '',
      rankComponent: null as React.ReactNode,
      rank: '',
    };

    if (index === 0 && data.length > 2) {
      rankInfotest.rankName = data[2].user_name;
      rankInfotest.rankPoint = data[2].user_point.toLocaleString();
      rankInfotest.rankGrade = data[2].user_grade;
      rankInfotest.rankClass = data[2].user_class;
      rankInfotest.rankComponent = <RankBar height={thirdPlaceHeighttest} />;
      rankInfotest.rank = '3등';
    } else if (index === 1 && data.length > 0) {
      rankInfotest.rankName = data[0].user_name;
      rankInfotest.rankPoint = data[0].user_point.toLocaleString();
      rankInfotest.rankGrade = data[0].user_grade;
      rankInfotest.rankClass = data[0].user_class;
      rankInfotest.rankComponent = <RankBar height={260} />;
      rankInfotest.rank = '1등';
    } else if (index === 2 && data.length > 1) {
      rankInfotest.rankName = data[1].user_name;
      rankInfotest.rankPoint = data[1].user_point.toLocaleString();
      rankInfotest.rankGrade = data[1].user_grade;
      rankInfotest.rankClass = data[1].user_class;
      rankInfotest.rankComponent = <RankBar height={secondPlaceHeighttest} />;
      rankInfotest.rank = '2등';
    }

    return rankInfotest;
  };

  type Numbertype = {
    [key: string]: number;
  };

  const Number: Numbertype = {
    ONE: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 4,
  };

  return (
    <>
      <S.MainContainer>
        <S.LankWrapper>
          {RankData.sort((a: { user_point: number }, b: { user_point: number }) => b.user_point - a.user_point)
            .slice(0, 3)
            .sort((a: { user_name: number }, b: { user_name: number }) => (a.user_name > b.user_name ? 1 : -1))
            .map((_: any, index: number) => {
              const { rankName, rankPoint, rankClass, rankGrade, rankComponent, rank } = getRankInfotest(
                index,
                RankData
              );
              return (
                <S.LankContainer key={index}>
                  <S.Name>
                    {' '}
                    {Number[rankGrade]}-{Number[rankClass]} {rankName}
                  </S.Name>
                  <S.Point>{rankPoint}P</S.Point>
                  {rankComponent}
                  <S.Name
                    style={{
                      position: 'absolute',
                      bottom: '1rem',
                      justifySelf: 'center',
                    }}
                  >
                    {rank}
                  </S.Name>
                </S.LankContainer>
              );
            })}
        </S.LankWrapper>
        <S.ListWrapper>
          {RankData.map(
            (
              item: { user_id: number; user_grade: string; user_class: string; user_name: string; user_point: number },
              index: number
            ) => (
              <>
                {item.user_id === myId && (
                  <S.List myrank={item.user_id === myId} key={index}>
                    <S.TextContainer>
                      <S.Text>
                        <S.Lank rank={index < 3}>{index + 1}등</S.Lank>
                        <S.Name>
                          {' '}
                          {Number[item.user_grade]}-{Number[item.user_class]} {item.user_name}
                        </S.Name>
                      </S.Text>
                    </S.TextContainer>
                    <S.Text>
                      <S.Point>{item.user_point.toLocaleString()}P</S.Point>
                    </S.Text>
                  </S.List>
                )}
              </>
            )
          )}
          <S.Stroke />
          {RankData.sort((a: { user_point: number }, b: { user_point: number }) => b.user_point - a.user_point).map(
            (
              item: { user_id: number; user_grade: string; user_class: string; user_name: string; user_point: number },
              index: number
            ) => (
              <S.List myrank={item.user_id == myId} key={index}>
                <S.TextContainer>
                  <S.Text>
                    <S.Lank rank={index < 3}>{index + 1}등</S.Lank>
                    <S.Name>
                      {' '}
                      {Number[item.user_grade]}-{Number[item.user_class]} {item.user_name}
                    </S.Name>
                  </S.Text>
                </S.TextContainer>
                <S.Text>
                  <S.Point>{item.user_point.toLocaleString()}P</S.Point>
                </S.Text>
              </S.List>
            )
          )}
        </S.ListWrapper>
      </S.MainContainer>
    </>
  );
};

export default Ranking;
