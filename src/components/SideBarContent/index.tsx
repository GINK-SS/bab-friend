import { useNavigate } from 'react-router-dom';

import { CommonPropsType } from '@_types/sideBar';
import { IoAddCircleOutline, IoReaderOutline } from 'react-icons/io5';
import * as S from './styles';

const SideBarContent = ({ setSidebarOpen }: CommonPropsType) => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.Wrapper
        onClick={() => {
          navigate('./createboard');
          setSidebarOpen(false);
        }}
      >
        <IoAddCircleOutline size={20} />
        <S.Title>새 글 작성하기</S.Title>
      </S.Wrapper>
      <S.Wrapper>
        <IoReaderOutline size={20} />
        <S.Title>참여한 식사 확인하기</S.Title>
      </S.Wrapper>
    </S.Container>
  );
};

export default SideBarContent;
