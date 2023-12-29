import { useNavigate } from 'react-router-dom';

import * as S from './styles';
import { CommonPropsType } from '../../types/sideBar';

import square from '../../assets/images/svg/square.svg';
import page from '../../assets/images/svg/page.svg';

const SideBarContent = ({ setSidebarOpen }: CommonPropsType) => {
  const navigate = useNavigate();
  return (
    <S.SideBarCotentContainer>
      <S.WritePost
        onClick={() => {
          navigate('./createPost');
          setSidebarOpen(false);
        }}
      >
        <S.WritePostImg src={square}></S.WritePostImg>
        <S.WritePostText>새 글 작성하기</S.WritePostText>
      </S.WritePost>
      <S.MyPost>
        <S.MyPostImg src={page}></S.MyPostImg>
        <S.MyPostText>내가 만든 식사</S.MyPostText>
      </S.MyPost>
    </S.SideBarCotentContainer>
  );
};

export default SideBarContent;
