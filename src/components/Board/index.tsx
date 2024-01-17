import { BoardInfo } from '@_types/board';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';
import formatDate from '@_utils/formatDate';
import { IoTimeOutline } from 'react-icons/io5';
import { useRecoilValue } from 'recoil';
import { userState } from '@_recoil/atoms/user';

type BoardProps = {
  boardData: BoardInfo;
};

const Board = ({ boardData }: BoardProps) => {
  const userInfo = useRecoilValue(userState);
  const navigate = useNavigate();
  const categoryTypeToKorean = {
    KOREAN: '한식',
    JAPAN: '일식',
    CHINA: '중식',
    WEST: '양식',
    ALL: null,
  };

  const calculateAge = (birthYear: number) => {
    const currentYear = new Date().getFullYear();

    return currentYear - birthYear + 1;
  };

  const onBoard = () => {
    navigate(`/postdetail/${boardData.id}`);
  };

  const isLimitedByGender = boardData.genderLimit !== 'ALL' && boardData.genderLimit !== userInfo.genderType;

  const isLimitedByAge =
    !!(boardData.ageLimit.up && boardData.ageLimit.up < calculateAge(userInfo.birthYear)) ||
    !!(boardData.ageLimit.down && boardData.ageLimit.down > calculateAge(userInfo.birthYear));

  const isLimit = boardData.fix || isLimitedByGender || isLimitedByAge;

  return (
    <S.Container>
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
};

export default Board;
