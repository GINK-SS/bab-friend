import { ReactNode } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import * as S from './styles';

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
  return (
    <S.Backdrop>
      <S.Container $isFullScreen={fullScreen}>
        {fullScreen ? (
          <S.CloseBtn>
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
