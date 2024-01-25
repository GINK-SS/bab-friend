import { forwardRef, ForwardedRef } from 'react';
import { BoardInfo } from '@_types/board';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';
import formatDate from '@_utils/formatDate';
import { IoTimeOutline } from 'react-icons/io5';
import { useRecoilValue } from 'recoil';
import { userState } from '@_recoil/atoms/user';

type BoardProps = {
  boardData: BoardInfo;
  isTarget?: boolean;
};

const Board = forwardRef(({ boardData, isTarget = false }: BoardProps, ref: ForwardedRef<HTMLDivElement>) => {
  const userInfo = useRecoilValue(userState);
  const navigate = useNavigate();
  const categoryTypeToKorean = {
    KOREAN: '한식',
    JAPAN: '일식',
    CHINA: '중식',
    WEST: '양식',
    ALL: null,
  };

  const onBoard = () => {
    navigate(`/postdetail/${boardData.id}`);
  };

  const isLimitedByGender =
    !!userInfo.genderType && boardData.genderType !== 'ALL' && boardData.genderType !== userInfo.genderType;

  const isLimitedByAge =
    !!userInfo.birthYear && boardData.ageGroupLimit
      ? boardData.up < userInfo.birthYear && boardData.down > userInfo.birthYear
        ? false
        : true
      : false;

  const isLimit = boardData.fix || isLimitedByGender || isLimitedByAge;

  return (
    <S.Container ref={isTarget ? ref : null}>
      {isLimit ? (
        <S.BlockContainer>
          {boardData.fix ? '확정 완료' : isLimitedByGender ? '성별 제한' : isLimitedByAge ? '나이 제한' : null}
        </S.BlockContainer>
      ) : null}

      <S.Wrapper isLimit={isLimit} onClick={onBoard}>
        <S.CategoryWrapper>
          <S.Category hasData={!!boardData.shortenedLocation}>{boardData.shortenedLocation}</S.Category>
          <S.Category hasData={!!categoryTypeToKorean[boardData.categoryType]}>
            {categoryTypeToKorean[boardData.categoryType]}
          </S.Category>
          <S.Category>{boardData.alcohol ? '술 가능' : '술 불가'}</S.Category>
          <S.Category>
            {boardData.currentJoin}명 / {boardData.joinLimit}명
          </S.Category>
        </S.CategoryWrapper>

        <S.Title>{boardData.title}</S.Title>
        <S.Content>
          {boardData.content.length > 40 ? `${boardData.content.slice(0, 40)}...` : boardData.content}
        </S.Content>

        <S.TimeWrapper>
          <IoTimeOutline size={25} />
          <span>{formatDate(boardData.eatTime)}</span>
        </S.TimeWrapper>

        <S.WriterWrapper>
          <S.WriterImage src={boardData.writerImageUrl} alt='' />
          <p>{boardData.writer}</p>
        </S.WriterWrapper>
      </S.Wrapper>
    </S.Container>
  );
});

export default Board;
