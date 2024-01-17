import { BoardInfo } from '@_types/board';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';
import formatDate from '@_utils/formatDate';
import { IoTimeOutline } from 'react-icons/io5';

type BoardProps = {
  boardData: BoardInfo;
};

const Board = ({ boardData }: BoardProps) => {
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

  return (
    <S.Wrapper onClick={onBoard}>
      <S.CategoryWrapper>
        <S.Category hasData={!!boardData.shortenedLocation}>{boardData.shortenedLocation}</S.Category>
        <S.Category hasData={!!categoryTypeToKorean[boardData.categoryType]}>
          {categoryTypeToKorean[boardData.categoryType]}
        </S.Category>
        <S.Category hasData>{boardData.alcohol ? '술 가능' : '술 불가'}</S.Category>
        <S.Category hasData>
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
  );
};

export default Board;
