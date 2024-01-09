import * as S from './styles';
import SelectOption from '@_components/SelectOption';
import infoCircle from '@_assets/images/svg/alert-circle.svg';

const CreatePost = () => {
  return (
    <S.CreatePostContainer>
      <S.CreatePostHeaderText>
        <S.CreatePostText>
          <S.CreatePostTextImg src={infoCircle} />
          게시글의 기본 정보를 입력해주세요.
        </S.CreatePostText>
      </S.CreatePostHeaderText>
      <SelectOption />
    </S.CreatePostContainer>
  );
};

export default CreatePost;
