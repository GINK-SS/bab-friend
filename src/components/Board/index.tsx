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

  const onBoard = () => {
    navigate(`/postdetail/${boardData.id}`);
  };

  return (
    <S.Wrapper onClick={onBoard}>
      <div>
        <span>{boardData.shortenedLocation}</span>
        <span>{boardData.categoryType}</span>
        <span>{boardData.alcohol ? '술 가능' : '술 불가'}</span>
        <span>
          {boardData.currentJoin} / {boardData.joinLimit}
        </span>
      </div>

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
