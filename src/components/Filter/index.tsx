import { BoardFilter } from '@_types/board';
import * as S from './styles';

type FilterProps = {
  filter: BoardFilter;
  setFilter: React.Dispatch<React.SetStateAction<BoardFilter>>;
};

const Filter = ({ filter, setFilter }: FilterProps) => {
  const handleJoinPossibleBtn = () => {
    setFilter((prev) => ({ ...prev, isJoinPossible: !filter.isJoinPossible }));
  };

  return (
    <S.Container>
      <S.JoinPossibleBtn onClick={handleJoinPossibleBtn} isActive={filter.isJoinPossible}>
        참여 가능만 보기
      </S.JoinPossibleBtn>
    </S.Container>
  );
};

export default Filter;
