import * as S from './styles';
import infoCircle from '../../assets/images/svg/alert-circle.svg';
import SelectOption from '../../components/SelectOption';

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
