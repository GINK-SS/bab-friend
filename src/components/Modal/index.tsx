import { ReactNode } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import * as S from './styles';
import { useSetRecoilState } from 'recoil';
import { modalState } from '../../recoil/atoms/modal';

type ModalProps = {
  children: ReactNode;
  fullScreen?: boolean;
  contentPadding?: string;
};

/**
 * @param fullScreen 전체 페이지를 덮는 모달인지
 * @param contentPadding 콘텐츠 영역 패딩값 (default: 1rem)
 */
const Modal = ({ children, fullScreen, contentPadding }: ModalProps) => {
  const setModal = useSetRecoilState(modalState);

  const closeModal = () => {
    setModal({ isActive: false });
  };

  const handleOuterClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (!fullScreen && e.target === e.currentTarget.firstChild) {
      closeModal();
    }
  };

  return (
    <S.Backdrop onClick={handleOuterClick}>
      <S.Container $isFullScreen={fullScreen}>
        {fullScreen ? (
          <S.CloseBtn onClick={closeModal}>
            <IoCloseOutline />
          </S.CloseBtn>
        ) : null}

        <S.Content $isFullScreen={fullScreen} contentPadding={contentPadding}>
          {children}
        </S.Content>
      </S.Container>
    </S.Backdrop>
  );
};

export default Modal;
