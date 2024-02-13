import { JoinedBoardResponse } from '@_types/board';
import { useCloseModal } from '@_recoil/atoms/modal';
import * as S from './styles';

type ReviewProps = {
  boardData?: JoinedBoardResponse;
};

const Review = ({ boardData }: ReviewProps) => {
  const closeModal = useCloseModal();

  return (
    <>
      {boardData ? (
        <S.Container>
          <S.Title>후기 작성</S.Title>

          <S.BoardTitle>{boardData.title}</S.BoardTitle>

          <S.Content rows={10} placeholder='식사 후기를 작성해주세요.' />

          <S.BtnWrapper>
            <S.Button>제출</S.Button>
            <S.Button onClick={closeModal}>취소</S.Button>
          </S.BtnWrapper>
        </S.Container>
      ) : null}
    </>
  );
};

export default Review;
