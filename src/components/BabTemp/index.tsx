import ProgressBar from '../common/ProgressBar';
import { useQuery } from '@tanstack/react-query';
import group from '@_assets/images/svg/user-group.svg';
import authApi from '@_apis/auth';
import * as S from './styles';

const BabTemp = () => {
  const { data: userInfo } = useQuery({ queryKey: ['userInfo'], queryFn: authApi.requestUserInfo });

  return (
    <S.BabTempContainer>
      <ProgressBar temp={userInfo?.temperature} />
      {/* <S.BabReviewWrap>
        <S.EachReviewWrap>
          <S.ImgWrap>
            <S.ReviewImg src={group} />
            <S.ReviewNum>4</S.ReviewNum>
          </S.ImgWrap>
          <S.ReviewTextBox>
            <S.ReviewText>친절하고 매너가 좋아요</S.ReviewText>
          </S.ReviewTextBox>
        </S.EachReviewWrap>
        <S.EachReviewWrap>
          <S.ImgWrap>
            <S.ReviewImg src={group} />
            <S.ReviewNum>4</S.ReviewNum>
          </S.ImgWrap>
          <S.ReviewTextBox>
            <S.ReviewText>친절하고 매너가 좋아요</S.ReviewText>
          </S.ReviewTextBox>
        </S.EachReviewWrap>
        <S.EachReviewWrap>
          <S.ImgWrap>
            <S.ReviewImg src={group} />
            <S.ReviewNum>4</S.ReviewNum>
          </S.ImgWrap>
          <S.ReviewTextBox>
            <S.ReviewText>친절하고 매너가 좋아요</S.ReviewText>
          </S.ReviewTextBox>
        </S.EachReviewWrap>
      </S.BabReviewWrap> */}
    </S.BabTempContainer>
  );
};

export default BabTemp;
