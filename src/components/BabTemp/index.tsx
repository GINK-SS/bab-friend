import ProgressBar from '../common/ProgressBar';

import group from '../../assets/images/svg/user-group.svg';

import * as S from './styles';

const MannerTemp = () => {
  return (
    <S.MannerTempContainer>
      <ProgressBar temp={36.5} />
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
    </S.MannerTempContainer>
  );
};

export default MannerTemp;
