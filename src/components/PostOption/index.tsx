import { CiCalendar } from 'react-icons/ci';
import * as S from './styles';

const PostOption = () => {
  return (
    <S.PostOptionContainer>
      <S.PostHeaderWrap>
        <S.Title>성동구 롯데마트 앞 죽이는 동태탕 드시러 가실분 구합니다 !~</S.Title>
        <S.ProfileWrap>
          <S.ProfileImg
            src={
              'https:images.unsplash.com/photo-1704098712141-5fc42b69a39f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8'
            }
          />
          <S.Nickname>액션가면액트</S.Nickname>
        </S.ProfileWrap>
        <S.TimeWrap>
          <CiCalendar />
          <S.Time>2023년 12월 21일 15:00</S.Time>
        </S.TimeWrap>
      </S.PostHeaderWrap>
      <S.OptionContainer>
        <S.OptionWrap>
          <S.CategoryWrap>
            <S.OptionTitle>음식 종류</S.OptionTitle>
            <S.OptionContent>한식</S.OptionContent>
          </S.CategoryWrap>
          <S.JoinLimitWrap>
            <S.OptionTitle>모집 인원</S.OptionTitle>
            <S.OptionContent>4명</S.OptionContent>
          </S.JoinLimitWrap>
          <S.AlcholWrap>
            <S.OptionTitle>술 여부</S.OptionTitle>
            <S.OptionContent>가능</S.OptionContent>
          </S.AlcholWrap>
          <S.FixWrap>
            <S.OptionTitle>약속 확정</S.OptionTitle>
            <S.OptionContent>미확정</S.OptionContent>
          </S.FixWrap>
        </S.OptionWrap>
        <S.OptionWrap>
          <S.PriceWrap>
            <S.OptionTitle>예상 가격</S.OptionTitle>
            <S.OptionContent>15000원</S.OptionContent>
          </S.PriceWrap>
          <S.StoreWrap>
            <S.OptionTitle>가게명</S.OptionTitle>
            <S.OptionContent>죽이는</S.OptionContent>
          </S.StoreWrap>
          <S.GenderWrap>
            <S.OptionTitle>성별</S.OptionTitle>
            <S.OptionContent>상관없음</S.OptionContent>
          </S.GenderWrap>
          <S.LinkWrap>
            <S.OptionLink>채팅방 링크</S.OptionLink>
          </S.LinkWrap>
        </S.OptionWrap>
      </S.OptionContainer>
    </S.PostOptionContainer>
  );
};

export default PostOption;
