import { Lank } from "../../assets";
import HeaderContainer from "../../components/HeaderContainer";
import { Category, CategoryContainer } from "../Formation/style";
import * as S from "./style";

interface Data {
  name: string;
  point: number;
}

const dataArray: Data[] = [
  {
    name: "1101 김순자",
    point: 10000,
  },
  {
    name: "1102 김덕자",
    point: 11000,
  },
  {
    name: "1105 김감자",
    point: 1900,
  },
  {
    name: "1106 김승자",
    point: 99000,
  },
];

const getRankInfo = (
  index: number,
  data: {
    name: string;
    point: { toLocaleString: () => string };
  }[]
) => {
  const rankInfo = {
    rankName: "",
    rankPoint: "",
    rankComponent: null as React.ReactNode,
    rank: "",
  };
  rankInfo.rankName = index === 0 ? data[2].name : index === 1 ? data[0].name : data[1].name;
  rankInfo.rankPoint = index === 0 ? data[2].point.toLocaleString() : index === 1 ? data[0].point.toLocaleString() : data[1].point.toLocaleString();
  rankInfo.rankComponent = index === 0 ? <Lank height={140} /> : index === 1 ? <Lank height={260} /> : <Lank height={200} />;
  rankInfo.rank = index === 0 ? "3등" : index === 1 ? "1등" : "2등";
  return rankInfo;
};

const Ranking = () => {
  return (
    <>
      <HeaderContainer />
      <S.Wrapper>
        <S.Container>
          <CategoryContainer style={{ marginBottom: "1.25rem" }}>
            <Category style={{ color: "var(--White, #FFF)" }}>랭킹</Category>
          </CategoryContainer>
          <S.MainContainer>
            <S.LankWrapper>
              {dataArray
                .sort((a, b) => b.point - a.point)
                .slice(0, 3)
                .sort((a, b) => (a.name > b.name ? 1 : -1))
                .map((item, index) => {
                  const { rankName, rankPoint, rankComponent, rank } = getRankInfo(index, dataArray);
                  return (
                    <S.LankContainer key={index}>
                      <S.Name>{rankName}</S.Name>
                      <S.Point>{rankPoint}P</S.Point>
                      {rankComponent}
                      <S.Name
                        style={{
                          position: "absolute",
                          bottom: "1rem",
                          justifySelf: "center",
                        }}
                      >
                        {rank}
                      </S.Name>
                    </S.LankContainer>
                  );
                })}
            </S.LankWrapper>
            <S.ListWrapper>
              <S.List>
                <S.TextContainer>
                  <S.Text>
                    <S.Lank>4등</S.Lank>
                    <S.Name>홍길동</S.Name>
                  </S.Text>
                </S.TextContainer>
                <S.Text>
                  <S.Point>10,000P</S.Point>
                </S.Text>
              </S.List>
              <S.Stroke />
              {dataArray
                .sort((a, b) => b.point - a.point)
                .map((item, index) => (
                  <S.List key={index}>
                    <S.TextContainer>
                      <S.Text>
                        <S.Lank rank={index < 3}>{index + 1}등</S.Lank>
                        <S.Name>{item.name}</S.Name>
                      </S.Text>
                    </S.TextContainer>
                    <S.Text>
                      <S.Point>{item.point.toLocaleString()}P</S.Point>
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
