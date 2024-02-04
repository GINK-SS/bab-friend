import * as S from './styles';
import { ReactNode } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { ModalName, modalState, useCloseModal } from '@_recoil/atoms/modal';
import { useRecoilValue } from 'recoil';

type ModalProps = {
  children: ReactNode;
  fullScreen?: boolean;
  contentPadding?: string;
  name: ModalName;
};

/**
 * @param name 모달 이름
 * @param fullScreen 전체 페이지를 덮는 모달인지
 * @param contentPadding 콘텐츠 영역 패딩값 (default: 1rem)
 */
const Modal = ({ children, name, fullScreen, contentPadding }: ModalProps) => {
  const closeModal = useCloseModal();
  const { name: currentModalName, isActive } = useRecoilValue(modalState);

  const handleOuterClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!fullScreen && e.target === e.currentTarget.firstChild) {
      closeModal();
    }
  };

  if (!isActive || currentModalName !== name) return null;

  return (
    <S.Backdrop onClick={handleOuterClick}>
      <S.Container $isFullScreen={fullScreen}>
        {fullScreen ? (
          <S.CloseBtn onClick={closeModal}>
            <IoCloseOutline />
          </S.CloseBtn>
        ) : null}

        <S.Content $isFullScreen={fullScreen} $contentPadding={contentPadding}>
          {children}
        </S.Content>
      </S.Container>
    </S.Backdrop>
  );
};

export default Modal;
