import { BoardFilter } from '@_types/board';
import * as S from './styles';
import { IoHelpCircleOutline } from 'react-icons/io5';
import { useState } from 'react';

type FilterProps = {
  filter: BoardFilter;
  setFilter: React.Dispatch<React.SetStateAction<BoardFilter>>;
};

const Filter = ({ filter, setFilter }: FilterProps) => {
  const [isShowExplain, setIsShowExplain] = useState(false);

  const handleJoinPossibleBtn = () => {
    setFilter((prev) => ({ ...prev, isJoinPossible: !filter.isJoinPossible }));
  };

  const handleExplainClick = () => {
    setIsShowExplain((prev) => !prev);
  };

  return (
    <>
      <S.Container>
        <S.QuestionBtn onClick={handleExplainClick} />

        <S.JoinPossibleBtn onClick={handleJoinPossibleBtn} isActive={filter.isJoinPossible}>
          참여 가능만 보기
        </S.JoinPossibleBtn>
      </S.Container>

      <S.ExplainBox isShow={isShowExplain}>
        <S.Explain>
          (로그인 O) <span>나이 제한/성별 제한/확정 완료</span>된 게시물이 보이지 않습니다.
        </S.Explain>
        <S.Explain>
          (로그인 X) <span>확정 완료</span>된 게시물이 보이지 않습니다.
        </S.Explain>
      </S.ExplainBox>
    </>
  );
};

export default Filter;
