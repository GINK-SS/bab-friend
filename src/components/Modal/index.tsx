import { ReactNode } from 'react';
import * as S from './styles';

type ModalProps = {
  children: ReactNode;
  isFullScreen?: boolean;
  contentPadding?: string;
};

/**
 * @param isFullScreen 전체 페이지를 덮는 모달인지
 * @param contentPadding 콘텐츠 영역 패딩값 (default: 1rem)
 */
const Modal = ({
  children,
  isFullScreen = false,
  contentPadding,
}: ModalProps) => {
  return (
    <S.Backdrop>
      <S.Container isFullScreen={isFullScreen}>
        <S.Content isFullScreen={isFullScreen} contentPadding={contentPadding}>
          {children}
        </S.Content>
      </S.Container>
    </S.Backdrop>
  );
};

export default Modal;
