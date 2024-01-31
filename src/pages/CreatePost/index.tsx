import { useLocation } from 'react-router-dom';

import * as S from './styles';
import SelectOption from '@_components/SelectOption';
import infoCircle from '@_assets/images/svg/alert-circle.svg';

const CreatePost = () => {
  const location = useLocation();

  const updating = location.state?.isUpdate;
  const boardDetailInfo = location.state?.boardDetailInfo;

  return (
    <S.CreatePostContainer>
      <S.CreatePostHeaderText>
        {updating ? (
          <S.CreatePostText>
            <S.CreatePostTextImg src={infoCircle} />
            게시글 수정 값을 입력해주세요.
          </S.CreatePostText>
        ) : (
          <S.CreatePostText>
            <S.CreatePostTextImg src={infoCircle} />
            게시글의 기본 정보를 입력해주세요.
          </S.CreatePostText>
        )}
      </S.CreatePostHeaderText>
      <SelectOption updating={updating} boardDetailInfo={boardDetailInfo} />
    </S.CreatePostContainer>
  );
};

export default CreatePost;
