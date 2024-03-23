import * as S from './style';
import { PlayingButton, Vote, NotVote } from '../../assets';
import { ArrayProps } from '../../types/ArrayProps';
import { useState } from 'react';

const PlayContainer: React.FC<ArrayProps> = ({ isYes, isFinal, Playing, TeamName, Grade, Time, isLive, isVoting }) => {
  const [modal, setModal] = useState(false);
  const [teamA, setTeamA] = useState('');
  const [teamB, setTeamB] = useState('');
  const [sameInput, setSameInput] = useState(false);
  const getEventText = () => {
    if (isFinal) {
      return <S.EventTexts style={{ color: 'var(--Main, #23F69A)' }}>결승전🔥</S.EventTexts>;
    } else {
      return isYes ? (
        <S.EventTexts style={{ color: 'var(--Gray1, #B7B7BE)' }}>'예선'</S.EventTexts>
      ) : (
        <S.EventTexts style={{ color: 'var(--Gray1, #B7B7BE)' }}>'본선'</S.EventTexts>
      );
    }
  };

  const onChangeInput = (e) => {
    const {
      target: { name, value },
    } = e;

    const filteredInput = value.replace(/\D/g, '');

    if (name === 'TeamA') {
      setTeamA(filteredInput);
    } else if (name === 'TeamB') {
      setTeamB(filteredInput);
    }
  };

  const checkInput = () => {
    if (teamA === teamB && teamA !== '' && teamB !== '') {
      setSameInput(true);
    } else {
      setSameInput(false);
    }
  };

  return (
    <>
      {modal ? (
        <S.ModalBackground>
          <S.ModalContainer>
            <S.ModalTextWrapper>
              <S.ModalTextContainer>
                <S.ModalTitle>
                  <S.ModalTitleContainer>농구 경기에 투표 하시겠습니까?</S.ModalTitleContainer>
                </S.ModalTitle>
                <S.ModalNovelContainer>
                  <S.ModalNovel>어쩌구저쩌구팀대 어쩌고저쩌고 팀의 경기 결과를 예측해 투표해 주세요.</S.ModalNovel>
                </S.ModalNovelContainer>
              </S.ModalTextContainer>
              <S.ModalInputContainer>
                <S.ModalInput
                  name="TeamA"
                  maxLength={2}
                  type="text"
                  value={teamA}
                  onChange={onChangeInput}
                  onBlur={checkInput}
                />
                <S.ModalInputText>:</S.ModalInputText>
                <S.ModalInput
                  name="TeamB"
                  maxLength={2}
                  type="text"
                  value={teamB}
                  onChange={onChangeInput}
                  onBlur={checkInput}
                />
              </S.ModalInputContainer>
              {sameInput && <S.ModalInputError>무승부 배팅은 불가능 합니다.</S.ModalInputError>}
            </S.ModalTextWrapper>
            <S.ModalButtonContainer>
              <S.ModalCencleButton
                onClick={() => {
                  setModal(!modal);
                  setTeamA('');
                  setTeamB('');
                  setSameInput(false);
                }}
              >
                아니오
              </S.ModalCencleButton>
              <S.ModalCheerButton>투표하기</S.ModalCheerButton>
            </S.ModalButtonContainer>
          </S.ModalContainer>
        </S.ModalBackground>
      ) : null}
      <S.PlayingContainer>
        <S.MainContainer>
          <S.EventContainer>
            {getEventText()}
            <S.EventTexts style={{ color: '#FFF' }}>{Playing[0]}</S.EventTexts>
          </S.EventContainer>

          <S.GradeBox>
            <S.OneGrade>
              <div style={{ width: '6.25rem', textAlign: 'center' }}>
                <S.TeamName>{TeamName[0]}</S.TeamName>
              </div>
              <S.GradeText>{Grade[0]}</S.GradeText>
            </S.OneGrade>

            <S.OneGrade>
              <div style={{ width: '6.25rem', textAlign: 'center' }}>
                <S.TeamName>{TeamName[1]}</S.TeamName>
              </div>
              <S.GradeText>{Grade[1]}</S.GradeText>
            </S.OneGrade>
          </S.GradeBox>
        </S.MainContainer>

        <S.TimeContainer>
          <S.OneTimeBox>
            <S.TimeText>투표 시간</S.TimeText>
            <S.TimeText>{Time[0]}</S.TimeText>
          </S.OneTimeBox>

          <S.OneTimeBox>
            <S.TimeText>경기 시간</S.TimeText>
            <S.TimeText>{Time[1]}</S.TimeText>
          </S.OneTimeBox>
        </S.TimeContainer>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {isLive ? (
            <PlayingButton />
          ) : isVoting ? (
            <label onClick={() => setModal(!modal)}>
              <Vote />
            </label>
          ) : (
            <NotVote />
          )}
        </div>
      </S.PlayingContainer>
      {isLive ? <S.GrayLine /> : <></>}
    </>
  );
};

export default PlayContainer;
