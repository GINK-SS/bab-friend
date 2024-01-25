import ProgressBar from '../common/ProgressBar';

import { useRecoilValue } from 'recoil';
import { userState } from '@_recoil/atoms/user';

import * as S from './styles';
import group from '@_assets/images/svg/user-group.svg';

const BabTemp = () => {
  const userInfo = useRecoilValue(userState);

  return (
    <S.BabTempContainer>
      <ProgressBar temp={userInfo.temperature} />
      <S.BabReviewWrap>
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
      </S.BabReviewWrap>
    </S.BabTempContainer>
  );
};

export default BabTemp;
