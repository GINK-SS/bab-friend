import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useMutation } from '@tanstack/react-query';
import { authState } from '@_recoil/atoms/auth';
import { ModalName, modalState } from '@_recoil/atoms/modal';
import boardApi from '@_apis/board';

import * as S from './styles';

const BoardDelete = () => {
  let params = useParams();
  const navigate = useNavigate();
  const setModal = useSetRecoilState(modalState);

  const deleteBoard = useMutation({
    mutationFn: () => boardApi.deleteBoard(Number(params.id)),
    onSuccess(data) {
      setModal({ name: ModalName.boardDelete, isActive: false });
      navigate('/');
    },
    onError(err) {
      console.log(err);
      alert('게시글 삭제 실패');
    },
  });
  const clickDeleteBtn = () => {
    deleteBoard.mutate();
  };
  return (
    <>
      <S.DeleteBoxWrap>
        <S.DeleteConfirm>게시물을 정말 삭제하시겠습니까</S.DeleteConfirm>
        <S.ConfirmBtnWrap>
          <S.DeleteBtn onClick={clickDeleteBtn}>삭제하기</S.DeleteBtn>
          <S.CancleBtn
            onClick={() => {
              setModal({ name: ModalName.boardDelete, isActive: false });
            }}
          >
            취소하기
          </S.CancleBtn>
        </S.ConfirmBtnWrap>
      </S.DeleteBoxWrap>
    </>
  );
};

export default BoardDelete;
