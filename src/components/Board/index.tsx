import { BoardInfo } from '@_types/board';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';
import formatDate from '@_utils/formatDate';

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

      <p>{boardData.title}</p>
      <p>{boardData.content.length > 40 ? `${boardData.content.slice(0, 40)}...` : boardData.content}</p>
      <p>{formatDate(boardData.eatTime)}</p>

      <div>
        <img src={boardData.writerImageUrl} alt='사용자 프로필' />
        <p>{boardData.writer}</p>
      </div>
    </S.Wrapper>
  );
};

export default Board;
