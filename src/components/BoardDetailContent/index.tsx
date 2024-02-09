import { useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import boardApi from '@_apis/board';
import { authState } from '@_recoil/atoms/auth';
import formatDate from '@_utils/formatDate';
import { ModalName, modalState } from '@_recoil/atoms/modal';
import Modal from '@_components/Modal';
import BoardDelete from '@_components/Modal/BoardDelete';
import * as S from './styles';
import KakaoStaticMap from '@_components/KakaoStaticMap';
import { AuthStatus } from '@_types/auth';

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
  isJoinOver?: boolean;
  isLimitAge: boolean;
  isLimitGender: boolean;
};

const BoardDetailContent = ({
  boardContent,
  boardLocation,
  isWriter,
  boardUpdate,
  boardFix,
  promiseTime,
  isJoinOver,
  isLimitAge,
  isLimitGender
}: BoardDetailContentProps) => {
  let params = useParams();
  const navigate = useNavigate();
  const setModal = useSetRecoilState(modalState);
  const { authStatus } = useRecoilValue(authState);
  const queryClient = useQueryClient();

  const { data: isJoin } = useQuery({
    queryKey: ['checkJoin', params.id],
    queryFn: () => boardApi.checkJoin(Number(params.id)),
  });

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
      queryClient.invalidateQueries({ queryKey: ['checkJoin'] });
      console.log(data);
    },
    onError(err) {
      console.log(err);
    },
  });
  const clickJoinBtn = () => {
    if (authStatus === AuthStatus.unauthorized) setModal({ name: ModalName.login, isActive: true });
    if (authStatus === AuthStatus.authorized) {
      if (isJoinOver === false) {
        joinBoard.mutate();
        if (isJoin?.data.joinPossible) alert('게시글에 참여하였습니다.');
        else alert('게시글 참여를 취소하였습니다.');
      }
      if (isJoinOver && isJoin?.data.alreadyJoin) alert('게시글 참여를 취소하였습니다.');
      if (isJoinOver) alert('모집인원이 다 찼습니다.');
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
      {isJoinOver && <S.LimitJoinText>!! 모집인원이 다 찼습니다 !!</S.LimitJoinText>}
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
      <>
        {isWriter === false && (
          <S.JoinBtnWrap onClick={clickJoinBtn}>
            {isLimitAge || isLimitGender ? (
              <S.JoinDisableBtn disabled>참여 불가</S.JoinDisableBtn>
            ) : (
              <>
                {isJoin?.data.joinPossible ? <S.JoinBtn>참여하기</S.JoinBtn> : <S.JoinBtn>참여하기 취소</S.JoinBtn>}
              </>
            )}
          </S.JoinBtnWrap>
        )}
      </>
    </S.PostContentContainer >
  );
};

export default BoardDetailContent;
