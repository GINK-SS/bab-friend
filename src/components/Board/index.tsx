import { BoardInfo } from '@_types/board';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';
import formatDate from '@_utils/formatDate';
import { IoTimeOutline } from 'react-icons/io5';
import { isLimit, isLimitedByAge, isLimitedByGender } from '@_utils/limit';
import { StaticMap } from 'react-kakao-maps-sdk';
import { useQuery } from '@tanstack/react-query';
import authApi from '@_apis/auth';

type BoardProps = {
  boardData: BoardInfo;
  isShowLimit?: boolean;
  hasReviewBtn?: boolean;
  reviewStatus?: 'ENABLED' | 'DISABLED' | 'DONE';
  onReviewClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Board = ({ boardData, isShowLimit = true, hasReviewBtn = false, reviewStatus, onReviewClick }: BoardProps) => {
  const { data: userInfo } = useQuery({ queryKey: ['userInfo'], queryFn: authApi.requestUserInfo });
  const navigate = useNavigate();
  const categoryTypeToKorean = {
    KOREAN: '한식',
    JAPAN: '일식',
    CHINA: '중식',
    WEST: '양식',
    ALL: null,
  };

  const onBoard = () => {
    navigate(`/boarddetail/${boardData.id}`);
  };

  return (
    <S.Container>
      {isShowLimit && isLimit(userInfo, boardData) ? (
        <S.BlockContainer>
          {boardData.fix
            ? '확정 완료'
            : isLimitedByGender(userInfo, boardData)
              ? '성별 제한'
              : isLimitedByAge(userInfo, boardData)
                ? '나이 제한'
                : null}
        </S.BlockContainer>
      ) : null}

      <S.CategoryWrapper>
        <S.Category>{boardData.location.address}</S.Category>
        <S.Category $hasData={!!categoryTypeToKorean[boardData.categoryType]}>
          {categoryTypeToKorean[boardData.categoryType]}
        </S.Category>
        <S.Category>{boardData.alcohol ? '술 가능' : '술 불가'}</S.Category>
        <S.Category>
          {boardData.currentJoin}명 / {boardData.joinLimit}명
        </S.Category>
      </S.CategoryWrapper>

      <S.Wrapper>
        <S.ContentWrapper $isLimit={isLimit(userInfo, boardData)} onClick={onBoard}>
          <div>
            <S.Title>{boardData.title}</S.Title>
            <S.Content>{boardData.content}</S.Content>
          </div>

          <div>
            <S.TimeWrapper>
              <IoTimeOutline size={25} />
              <span>{formatDate(boardData.eatTime)}</span>
            </S.TimeWrapper>

            <S.WriterWrapper>
              <S.WriterImage src={boardData.writerImageUrl} alt='' />
              <p>{boardData.writer}</p>
            </S.WriterWrapper>
          </div>
        </S.ContentWrapper>

        <StaticMap
          center={{
            lat: boardData.location.location.position.lat,
            lng: boardData.location.location.position.lng,
          }}
          style={{
            width: '150px',
            height: '150px',
            border: '1px solid rgba(0,0,0,0.3)',
          }}
          marker={[
            {
              position: {
                lat: boardData.location.location.position.lat,
                lng: boardData.location.location.position.lng,
              },
              text: boardData.location.location.content,
            },
          ]}
          level={2}
        />
      </S.Wrapper>

      {hasReviewBtn ? (
        <S.Footer>
          <S.Review $reviewStatus={reviewStatus} disabled={reviewStatus !== 'ENABLED'} onClick={onReviewClick}>
            {reviewStatus === 'ENABLED'
              ? '리뷰 작성'
              : reviewStatus === 'DISABLED'
                ? '리뷰 작성 불가'
                : '리뷰 작성 완료'}
          </S.Review>
        </S.Footer>
      ) : null}
    </S.Container>
  );
};

export default Board;
