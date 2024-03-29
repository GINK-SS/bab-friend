import { CiCalendar } from 'react-icons/ci';
import * as S from './styles';
import formatDate from '@_utils/formatDate';
import { BoardDetailInfo } from '@_types/board';
import formatDateToTimeAgo from '@_utils/formatDateToTimeAgo';

type BoardDetailOptionProps = {
  boardData?: BoardDetailInfo;
};

const BoardDetailOption = ({ boardData }: BoardDetailOptionProps) => {
  const categoryTypeToKorean = {
    KOREAN: '한식',
    JAPAN: '일식',
    CHINA: '중식',
    WEST: '양식',
    ALL: '상관없음',
  };
  const genderLimitToKorean = {
    MALE: '남자만',
    FEMALE: '여자만',
    ALL: '상관없음',
  };
  return boardData ? (
    <S.PostOptionContainer>
      <S.PostHeaderWrap>
        <S.Title>{boardData.title}</S.Title>
        <S.ProfileWrap>
          <S.ProfileImg src={boardData.writerImageUrl} />
          <S.Nickname>{boardData.writer}</S.Nickname>
        </S.ProfileWrap>
        <S.TimeWrap>
          <S.Time>{formatDate(boardData.lastModifiedAt)}</S.Time>
          {boardData.changed ? (
            <S.Time>{formatDateToTimeAgo(boardData.lastModifiedAt)} 수정된 글입니다.</S.Time>
          ) : (
            <S.Time>{formatDateToTimeAgo(boardData.lastModifiedAt)} 작성된 글입니다.</S.Time>
          )}
        </S.TimeWrap>
      </S.PostHeaderWrap>
      <S.OptionContainer>
        <S.OptionWrap>
          <S.CategoryWrap>
            <S.OptionTitle>음식 종류</S.OptionTitle>
            <S.OptionContent>{categoryTypeToKorean[boardData.categoryType]}</S.OptionContent>
          </S.CategoryWrap>
          <S.JoinLimitWrap>
            <S.OptionTitle>모집 인원</S.OptionTitle>
            <S.OptionContent>{boardData.joinLimit}명</S.OptionContent>
          </S.JoinLimitWrap>
          <S.AlcholWrap>
            <S.OptionTitle>술 여부</S.OptionTitle>
            <S.OptionContent>{boardData.alcohol ? '가능' : '불가능'}</S.OptionContent>
          </S.AlcholWrap>
          <S.FixWrap>
            <S.OptionTitle>약속 확정</S.OptionTitle>
            <S.OptionContent>{boardData.fix ? '확정' : '미확정'}</S.OptionContent>
          </S.FixWrap>
        </S.OptionWrap>
        <S.OptionWrap>
          <S.PriceWrap>
            <S.OptionTitle>예상 가격</S.OptionTitle>
            <S.OptionContent>{boardData.priceRange}원</S.OptionContent>
          </S.PriceWrap>
          <S.StoreWrap>
            <S.OptionTitle>가게명</S.OptionTitle>
            <S.OptionContent>{boardData.location.location?.content}</S.OptionContent>
          </S.StoreWrap>
          <S.GenderWrap>
            <S.OptionTitle>성별</S.OptionTitle>
            <S.OptionContent>{genderLimitToKorean[boardData.genderType]}</S.OptionContent>
          </S.GenderWrap>
          <S.LinkWrap>
            <S.OptionLink href={boardData.linkUrl} target='_blank'>
              채팅방 링크
            </S.OptionLink>
          </S.LinkWrap>
        </S.OptionWrap>
      </S.OptionContainer>
    </S.PostOptionContainer>
  ) : null;
};

export default BoardDetailOption;
