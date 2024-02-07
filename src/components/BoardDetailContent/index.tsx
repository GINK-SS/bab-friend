import { StaticMap } from 'react-kakao-maps-sdk';
import { useNavigate, useParams } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import boardApi from '@_apis/board';
import { authState } from '@_recoil/atoms/auth';
import formatDate from '@_utils/formatDate';
import { ModalName, modalState } from '@_recoil/atoms/modal';
import Modal from '@_components/Modal';
import BoardDelete from '@_components/Modal/BoardDelete';
import * as S from './styles';
import KakaoStaticMap from '@_components/KakaoStaticMap';

type BoardDetailContentProps = {
  boardContent: string;
  boardLocation?: {
    content: string;
    position: {
      lat: number;
      lng: number;
    };
    address: string;
  };
  isWriter: boolean;
  boardUpdate: () => void;
  boardFix: boolean;
  promiseTime: string;
  lastModifiedAt: string;
  isLimitJoin?: boolean;
};

const BoardDetailContent = ({
  boardContent,
  boardLocation,
  isWriter,
  boardUpdate,
  boardFix,
  promiseTime,
  isLimitJoin,
}: BoardDetailContentProps) => {
  let params = useParams();
  const navigate = useNavigate();
  const isauthenticated = useRecoilValue(authState);
  const setModal = useSetRecoilState(modalState);

  const fixPromise = useMutation({
    mutationFn: () => boardApi.fixBoard(Number(params.id)),
    onSuccess(data) {
      if (boardFix === true) {
        alert('약속 마감이 해제 되었습니다.');
      } else {
        alert('약속이 마감 되었습니다.');
      }
      navigate('/');
    },
    onError(err) {
      console.log(err);
    },
  });

  const joinBoard = useMutation({
    mutationFn: () => boardApi.joinBoard(Number(params.id)),
    onSuccess(data) {
      console.log(data);
    },
    onError(err) {
      console.log(err);
    },
  });
  const clickJoinBtn = () => {
    if (isauthenticated.authStatus === 2) setModal({ name: ModalName.login, isActive: true });
    if (isauthenticated.authStatus === 0) {
      if (isLimitJoin === false) {
        joinBoard.mutate();
        alert('게시글에 참여하였습니다.');
      } else {
        alert('모집인원이 다 찼습니다.');
      }
    }
  };
  const clickDeleteBtn = () => {
    setModal({ name: ModalName.boardDelete, isActive: true });
  };
  return (
    <S.PostContentContainer>
      <Modal name={ModalName.boardDelete} contentPadding='4rem'>
        <BoardDelete />
      </Modal>
      {isWriter && (
        <S.BtnWrap>
          <S.PostEditBtn onClick={boardUpdate}>수정</S.PostEditBtn>
          <S.PostDeleteBtn onClick={clickDeleteBtn}>삭제</S.PostDeleteBtn>
          {boardFix ? (
            <S.FixBtn onClick={() => fixPromise.mutate()}>마감해제</S.FixBtn>
          ) : (
            <S.FixBtn onClick={() => fixPromise.mutate()}>마감</S.FixBtn>
          )}
        </S.BtnWrap>
      )}
      {boardFix && <S.FixBoardText>!! 게시글이 마감되었습니다 !!</S.FixBoardText>}
      {isLimitJoin && <S.LimitJoinText>!! 모집인원이 다 찼습니다 !!</S.LimitJoinText>}
      <S.ContentHeader>
        <S.PromiseTime>약속 시간 : {formatDate(promiseTime)}</S.PromiseTime>
      </S.ContentHeader>
      <S.Content>{boardContent}</S.Content>
      {boardLocation?.position.lat && boardLocation?.position.lng && (
        <KakaoStaticMap
          center={{
            lat: boardLocation.position.lat,
            lng: boardLocation.position.lng,
          }}
          height={250}
          content={boardLocation.content}
        />
      )}
      {
        <>
          {isWriter === false && (
            <S.JoinBtnWrap onClick={clickJoinBtn}>
              <S.JoinBtn>참여하기</S.JoinBtn>
            </S.JoinBtnWrap>
          )}
        </>
      }
    </S.PostContentContainer>
  );
};

export default BoardDetailContent;
