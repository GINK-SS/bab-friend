import { StaticMap } from 'react-kakao-maps-sdk';
import { useNavigate, useParams } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import boardApi from '@_apis/board';
import * as S from './styles';
import formatDate from '@_utils/formatDate';
import formatDateToTimeAgo from '@_utils/formatDateToTimeAgo';

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
  changed: boolean;
  lastModifiedAt: string;
};

const BoardDetailContent = ({
  boardContent,
  boardLocation,
  isWriter,
  boardUpdate,
  boardFix,
  promiseTime,
  changed,
  lastModifiedAt,
}: BoardDetailContentProps) => {
  let params = useParams();
  const navigate = useNavigate();

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

  const deleteBoard = useMutation({
    mutationFn: () => boardApi.deleteBoard(Number(params.id)),
    onError(err) {
      console.log(err);
      alert('게시글 삭제 실패');
    },
  });
  const clickDeleteBtn = () => {
    deleteBoard.mutate();
    navigate('/');
    alert('게시글이 삭제되었습니다.');
  };
  console.log(promiseTime);
  return (
    <S.PostContentContainer>
      {changed && <S.ChangedBoardText>{formatDateToTimeAgo(lastModifiedAt)} 수정된 게시글 입니다.</S.ChangedBoardText>}
      <S.ContentHeader>
        <S.PromiseTime>약속 시간 : {formatDate(promiseTime)}</S.PromiseTime>
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
      </S.ContentHeader>
      <S.Content>{boardContent}</S.Content>
      {boardLocation?.position.lat && boardLocation?.position.lng && (
        <StaticMap
          center={{
            lat: boardLocation.position.lat,
            lng: boardLocation.position.lng,
          }}
          style={{
            width: '100%',
            height: '250px',
            marginTop: '50px',
            borderRadius: '10px',
          }}
          marker={[
            {
              position: {
                lat: boardLocation.position.lat,
                lng: boardLocation.position.lng,
              },
              text: boardLocation.content,
            },
          ]}
          level={3} // 지도의 확대 레벨
        />
      )}
    </S.PostContentContainer>
  );
};

export default BoardDetailContent;
