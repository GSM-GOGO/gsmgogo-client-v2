import { RankBar } from '../../assets';
import HeaderContainer from '../../components/HeaderContainer';
import apiClient from '../../utils/libs/apiClient';
import { Category, CategoryContainer } from '../Formation/style';
import * as S from './style';
import { useEffect, useState } from 'react';

const Ranking = () => {
  const [RankData, setRankData] = useState<any[]>([]);
  const [myId, setMyId] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        const response = await apiClient.get(`/rank`, {
          headers: {
            Authorization: `${token}`,
          },
        });
        console.log(response.data);
        setRankData(response.data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchMyId = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        const response = await apiClient.get(`/user/my-id`, {
          headers: {
            Authorization: `${token}`,
          },
        });
        console.log(response.data);
        setMyId(response.data.user_id);
      } catch (e) {
        console.log(e);
      }
    };

    fetchMyId();
  }, []);

  const topThreeDatatest = RankData.length > 0 ? RankData.sort((a, b) => b.user_point - a.user_point).slice(0, 3) : [];

  const firstPlacePointstest = topThreeDatatest.length > 0 ? topThreeDatatest[0].user_point : 0;
  const secondPlacePointstest = topThreeDatatest.length > 1 ? topThreeDatatest[1].user_point : 0;
  const thirdPlacePointstest = topThreeDatatest.length > 2 ? topThreeDatatest[2].user_point : 0;

  const secondPlaceHeighttest = (260 / firstPlacePointstest) * secondPlacePointstest;
  const thirdPlaceHeighttest = (260 / firstPlacePointstest) * thirdPlacePointstest;

  const getRankInfotest = (
    index: number,
    data: {
      user_name: string;
      user_point: { toLocaleString: () => string };
    }[]
  ) => {
    const rankInfotest = {
      rankName: '',
      rankPoint: '',
      rankComponent: null as React.ReactNode,
      rank: '',
    };

    if (index === 0 && data.length > 2) {
      rankInfotest.rankName = data[2].user_name;
      rankInfotest.rankPoint = data[2].user_point.toLocaleString();
      rankInfotest.rankComponent = <RankBar height={thirdPlaceHeighttest} />;
      rankInfotest.rank = '3등';
    } else if (index === 1 && data.length > 0) {
      rankInfotest.rankName = data[0].user_name;
      rankInfotest.rankPoint = data[0].user_point.toLocaleString();
      rankInfotest.rankComponent = <RankBar height={260} />;
      rankInfotest.rank = '1등';
    } else if (index === 2 && data.length > 1) {
      rankInfotest.rankName = data[1].user_name;
      rankInfotest.rankPoint = data[1].user_point.toLocaleString();
      rankInfotest.rankComponent = <RankBar height={secondPlaceHeighttest} />;
      rankInfotest.rank = '2등';
    }

    return rankInfotest;
  };

  return (
    <>
      <HeaderContainer />
      <S.Wrapper>
        <S.Container>
          <CategoryContainer style={{ marginBottom: '1.25rem' }}>
            <Category style={{ color: 'var(--White, #FFF)' }}>랭킹</Category>
          </CategoryContainer>
          <S.MainContainer>
            <S.LankWrapper>
              {RankData.sort((a, b) => b.user_point - a.user_point)
                .slice(0, 3)
                .sort((a, b) => (a.user_name > b.user_name ? 1 : -1))
                .map((item, index) => {
                  const { rankName, rankPoint, rankComponent, rank } = getRankInfotest(index, RankData);
                  return (
                    <S.LankContainer key={index}>
                      <S.Name>{rankName}</S.Name>
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
              {RankData.map((item, index) => (
                <>
                  {item.user_id == myId && (
                    <S.List key={index}>
                      <S.TextContainer>
                        <S.Text>
                          <S.Lank rank={index < 3}>{index + 1}등</S.Lank>
                          <S.Name>{item.user_name}</S.Name>
                        </S.Text>
                      </S.TextContainer>
                      <S.Text>
                        <S.Point>{item.user_point.toLocaleString()}P</S.Point>
                      </S.Text>
                    </S.List>
                  )}
                </>
              ))}
              <S.Stroke />
              {RankData.sort((a, b) => b.user_point - a.user_point).map((item, index) => (
                <S.List myrank={item.user_id == myId} key={index}>
                  <S.TextContainer>
                    <S.Text>
                      <S.Lank rank={index < 3}>{index + 1}등</S.Lank>
                      <S.Name>{item.user_name}</S.Name>
                    </S.Text>
                  </S.TextContainer>
                  <S.Text>
                    <S.Point>{item.user_point.toLocaleString()}P</S.Point>
                  </S.Text>
                </S.List>
              ))}
            </S.ListWrapper>
          </S.MainContainer>
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default Ranking;
