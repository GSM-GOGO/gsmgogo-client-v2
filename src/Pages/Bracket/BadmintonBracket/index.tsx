import { useNavigate } from 'react-router-dom';
import * as S from './style.ts';

const BadmintionBracket = () => {
  const navigate = useNavigate();

  const GoBeforePage = () => {
    navigate(-1);
  };
  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.GridContainer>
            <S.GridItem>
              B-1
              <br />
              팀-이름
            </S.GridItem>
            <S.GridItem>
              주방
              <br />
              김주은/방가온
            </S.GridItem>
            <S.GridItem>
              발목부상듀오
              <br />
              김태오/정민석
            </S.GridItem>
            <S.GridItem>
              사이버보안
              <br />
              김현/정상혁
            </S.GridItem>
            <S.GridItem>
              주방
              <br />
              김주은/방가온
            </S.GridItem>
            <S.GridItem diagonal="true"></S.GridItem>
            <S.GridItem>
              <S.TopMentContainer>
                <S.Ment1>발목부상듀오 승</S.Ment1> <S.Ment2>25 : 10</S.Ment2>
              </S.TopMentContainer>
              <S.Ment3>발목부상듀오 vs 주방</S.Ment3>
            </S.GridItem>
            <S.GridItem>
              <S.TopMentContainer>
                <S.Ment1>사이버보안 승</S.Ment1> <S.Ment2>25 : 18</S.Ment2>
              </S.TopMentContainer>
              <S.Ment3>사이버보안 vs 주방</S.Ment3>
            </S.GridItem>
            <S.GridItem>
              발목부상듀오
              <br />
              김태오/정민석
            </S.GridItem>
            <S.GridItem>
              <S.TopMentContainer>
                <S.Ment1>발목부상듀오 승</S.Ment1> <S.Ment2>25 : 10</S.Ment2>
              </S.TopMentContainer>
              <S.Ment3>발목부상듀오 vs 주방</S.Ment3>
            </S.GridItem>
            <S.GridItem diagonal="true"></S.GridItem>
            <S.GridItem>
              <S.TopMentContainer>
                <S.Ment1>사이버보안 승</S.Ment1> <S.Ment2>25 : 19</S.Ment2>
              </S.TopMentContainer>
              <S.Ment3>사이버보안 vs 발목부상듀오</S.Ment3>
            </S.GridItem>
            <S.GridItem>
              사이버보안
              <br />
              김현/정상혁
            </S.GridItem>
            <S.GridItem>
              <S.TopMentContainer>
                <S.Ment1>사이버보안 승</S.Ment1> <S.Ment2>25 : 18</S.Ment2>
              </S.TopMentContainer>
              <S.Ment3>사이버보안 vs 주방</S.Ment3>
            </S.GridItem>
            <S.GridItem diagonal="true"></S.GridItem>
            <S.GridItem diagonal="true"></S.GridItem>
          </S.GridContainer>

          <S.GridContainer>
            <S.GridItem>
              B-2
              <br />
              팀-이름
            </S.GridItem>
            <S.GridItem>
              콩보리
              <br />
              이동욱/이태랑
            </S.GridItem>
            <S.GridItem>
              지죽동클라맨
              <br />
              박준호/윤태빈
            </S.GridItem>
            <S.GridItem>
              아자아자화이
              <br />
              김은후/양동찬
            </S.GridItem>
            <S.GridItem>
              콩보리
              <br />
              이동욱/이태랑
            </S.GridItem>
            <S.GridItem diagonal="true"></S.GridItem>
            <S.GridItem>
              <S.TopMentContainer>
                <S.Ment1>콩보리 승</S.Ment1> <S.Ment2>25 : 13</S.Ment2>
              </S.TopMentContainer>
              <S.Ment3>콩보리 vs 지죽동클라맨</S.Ment3>
            </S.GridItem>
            <S.GridItem>
              <S.TopMentContainer>
                <S.Ment1>콩보리 승</S.Ment1> <S.Ment2>25 : 19</S.Ment2>
              </S.TopMentContainer>
              <S.Ment3>콩보리 vs 아자아자화이</S.Ment3>
            </S.GridItem>
            <S.GridItem>
              지죽동클라맨
              <br />
              박준호/윤태빈
            </S.GridItem>
            <S.GridItem>
              <S.TopMentContainer>
                <S.Ment1>콩보리 승</S.Ment1> <S.Ment2>25 : 13</S.Ment2>
              </S.TopMentContainer>
              <S.Ment3>콩보리 vs 지죽동클라맨</S.Ment3>
            </S.GridItem>
            <S.GridItem diagonal="true"></S.GridItem>
            <S.GridItem>
              <S.TopMentContainer>
                <S.Ment1>아자아자 승</S.Ment1> <S.Ment2>25 : 23</S.Ment2>
              </S.TopMentContainer>
              <S.Ment3>아자아자 vs 지죽동클라맨</S.Ment3>
            </S.GridItem>
            <S.GridItem>
              아자아자화이
              <br />
              김은후/양동찬
            </S.GridItem>
            <S.GridItem>
              <S.TopMentContainer>
                <S.Ment1>콩보리 승</S.Ment1> <S.Ment2>25 : 19</S.Ment2>
              </S.TopMentContainer>
              <S.Ment3>콩보리 vs 아자아자화이</S.Ment3>
            </S.GridItem>
            <S.GridItem diagonal="true"></S.GridItem>
            <S.GridItem diagonal="true"></S.GridItem>
          </S.GridContainer>

          <S.GridContainer>
            <S.GridItem>
              B-3
              <br />
              팀-이름
            </S.GridItem>
            <S.GridItem>
              겜개듀오
              <br />
              김서준 / 변정현
            </S.GridItem>
            <S.GridItem>
              우승
              <br />
              서지완 / 주경주
            </S.GridItem>
            <S.GridItem>
              19cm
              <br />
              이명훈 / 이정우
            </S.GridItem>
            <S.GridItem>
              겜개듀오
              <br />
              김서준 / 변정현
            </S.GridItem>
            <S.GridItem diagonal="true"></S.GridItem>
            <S.GridItem>
              <S.TopMentContainer>
                <S.Ment1>겜개듀오 승</S.Ment1> <S.Ment2>25 : 24</S.Ment2>
              </S.TopMentContainer>
              <S.Ment3>겜개듀오 vs 우승</S.Ment3>
            </S.GridItem>
            <S.GridItem>
              <S.TopMentContainer>
                <S.Ment1>겜개듀오 승</S.Ment1> <S.Ment2>25 : 18</S.Ment2>
              </S.TopMentContainer>
              <S.Ment3>겜개듀오 vs 19cm</S.Ment3>
            </S.GridItem>
            <S.GridItem>
              우승
              <br />
              서지완 / 주경주
            </S.GridItem>
            <S.GridItem>
              <S.TopMentContainer>
                <S.Ment1>겜개듀오 승</S.Ment1> <S.Ment2>25 : 24</S.Ment2>
              </S.TopMentContainer>
              <S.Ment3>겜개듀오 vs 우승</S.Ment3>
            </S.GridItem>
            <S.GridItem diagonal="true"></S.GridItem>
            <S.GridItem>
              <S.TopMentContainer>
                <S.Ment1>우승팀 승</S.Ment1> <S.Ment2>25 : 17</S.Ment2>
              </S.TopMentContainer>
              <S.Ment3>우승팀 vs 19cm</S.Ment3>
            </S.GridItem>
            <S.GridItem>
              19cm
              <br />
              이명훈 / 이정우
            </S.GridItem>
            <S.GridItem>
              <S.TopMentContainer>
                <S.Ment1>겜개듀오 승</S.Ment1> <S.Ment2>25 : 18</S.Ment2>
              </S.TopMentContainer>
              <S.Ment3>겜개듀오 vs 19cm</S.Ment3>
            </S.GridItem>
            <S.GridItem diagonal="true"></S.GridItem>
            <S.GridItem diagonal="true"></S.GridItem>
          </S.GridContainer>

          <S.GridContainer>
            <S.GridItem>
              C-1
              <br />
              팀-이름
            </S.GridItem>
            <S.GridItem>
              배용빈팀
              <br />
              배용빈 / 서정민
            </S.GridItem>
            <S.GridItem>
              농협은행
              <br />
              권재헌 / 황지훈
            </S.GridItem>
            <S.GridItem>
              수원피자
              <br />
              김지훈 / 이산
            </S.GridItem>
            <S.GridItem>
              배용빈팀
              <br />
              배용빈 / 서정민
            </S.GridItem>
            <S.GridItem diagonal="true"></S.GridItem>
            <S.GridItem>
              <S.TopMentContainer>
                <S.Ment1>배용빈팀 승</S.Ment1> <S.Ment2>21 : 7</S.Ment2>
              </S.TopMentContainer>
              <S.Ment3>배용빈팀 vs 농협은행</S.Ment3>
            </S.GridItem>
            <S.GridItem>
              <S.TopMentContainer>
                <S.Ment1>배용빈팀 승</S.Ment1> <S.Ment2>25 : 21</S.Ment2>
              </S.TopMentContainer>
              <S.Ment3>배용빈팀 vs 수원피자</S.Ment3>
            </S.GridItem>
            <S.GridItem>
              농협은행
              <br />
              권재헌 / 황지훈
            </S.GridItem>
            <S.GridItem>
              <S.TopMentContainer>
                <S.Ment1>배용빈팀 승</S.Ment1> <S.Ment2>21 : 7</S.Ment2>
              </S.TopMentContainer>
              <S.Ment3>배용빈팀 vs 농협은행</S.Ment3>
            </S.GridItem>
            <S.GridItem diagonal="true"></S.GridItem>
            <S.GridItem>
              <S.TopMentContainer>
                <S.Ment1>수원피자 승</S.Ment1> <S.Ment2>25 : 9</S.Ment2>
              </S.TopMentContainer>
              <S.Ment3>수원피자 vs 농협은행</S.Ment3>
            </S.GridItem>
            <S.GridItem>
              수원피자
              <br />
              김지훈 / 이산
            </S.GridItem>
            <S.GridItem>
              <S.TopMentContainer>
                <S.Ment1>배용빈팀 승</S.Ment1> <S.Ment2>25 : 21</S.Ment2>
              </S.TopMentContainer>
              <S.Ment3>배용빈팀 vs 수원피자</S.Ment3>
            </S.GridItem>
            <S.GridItem diagonal="true"></S.GridItem>
            <S.GridItem diagonal="true"></S.GridItem>
          </S.GridContainer>

          <S.GridContainer>
            <S.GridItem>
              C-2
              <br />
              팀-이름
            </S.GridItem>
            <S.GridItem>
              경심애심심심
              <br />
              박찬울 / 이서준
            </S.GridItem>
            <S.GridItem>
              수일통닭
              <br />
              김승찬 / 김재관
            </S.GridItem>
            <S.GridItem>
              카라박
              <br />
              김민균 / 전선우
            </S.GridItem>
            <S.GridItem>
              경심애심심심
              <br />
              박찬울 / 이서준
            </S.GridItem>
            <S.GridItem diagonal="true"></S.GridItem>
            <S.GridItem>
              <S.TopMentContainer>
                <S.Ment1>경심애심심심 승</S.Ment1> <S.Ment2>21 : 20</S.Ment2>
              </S.TopMentContainer>
              <S.Ment3>경심애심심심 vs 수일통닭</S.Ment3>
            </S.GridItem>
            <S.GridItem>
              <S.TopMentContainer>
                <S.Ment1>경심애심심심 승</S.Ment1> <S.Ment2>25 : 14</S.Ment2>
              </S.TopMentContainer>
              <S.Ment3>경심애심심심 vs 카라박</S.Ment3>
            </S.GridItem>
            <S.GridItem>
              수일통닭
              <br />
              김승찬 / 김재관
            </S.GridItem>
            <S.GridItem>
              <S.TopMentContainer>
                <S.Ment1>경심애심심심 승</S.Ment1> <S.Ment2>21 : 20</S.Ment2>
              </S.TopMentContainer>
              <S.Ment3>경심애심심심 vs 수일통닭</S.Ment3>
            </S.GridItem>
            <S.GridItem diagonal="true"></S.GridItem>
            <S.GridItem>
              <S.TopMentContainer>
                <S.Ment1>수일통닭 승</S.Ment1> <S.Ment2>25 : 16</S.Ment2>
              </S.TopMentContainer>
              <S.Ment3>수일통닭 vs 카라박</S.Ment3>
            </S.GridItem>
            <S.GridItem>
              카라박
              <br />
              김민균 / 전선우
            </S.GridItem>
            <S.GridItem>
              <S.TopMentContainer>
                <S.Ment1>경심애심심심 승</S.Ment1> <S.Ment2>25 : 14</S.Ment2>
              </S.TopMentContainer>
              <S.Ment3>경심애심심심 vs 카라박</S.Ment3>
            </S.GridItem>
            <S.GridItem diagonal="true"></S.GridItem>
            <S.GridItem diagonal="true"></S.GridItem>
          </S.GridContainer>
          <S.BeforeButtonCotainer>
            <S.BeforeButton onClick={GoBeforePage}>돌아가기</S.BeforeButton>
          </S.BeforeButtonCotainer>
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default BadmintionBracket;
