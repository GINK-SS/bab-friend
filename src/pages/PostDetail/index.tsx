import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { useMutation, useQuery } from '@tanstack/react-query';

import PostOption from '@_components/PostOption';
import PostContent from '@_components/PostContent';
import CommnetInput from '@_components/CommentInput';
import CommentDisplay from '@_components/CommentDisplay';

import boardApi from '@_apis/board';
import getComment from '@_apis/comment';
import { userState } from '@_recoil/atoms/user';
import { BoardDetailInfo } from '@_types/board';
import { Comment } from '@_types/comment';
import * as S from './styles';

const PostDetail = () => {
  let params = useParams();
  const userInfo = useRecoilValue(userState);
  const navigate = useNavigate();
  const [comment, setComment] = useState<Comment[]>([]);
  const [isWriter, setIsWriter] = useState(false);

  // board detail get
  const { data: boardDetailInfo } = useQuery({
    queryKey: ['boardDetail', params.id],
    queryFn: () => boardApi.getBoardDetail(Number(params.id)),
    select: (result) => {
      return {
        ...result.data,
        location: JSON.parse(result.data.location),
      };
    },
  });
  console.log(boardDetailInfo);
  useEffect(() => {
    if (userInfo.email === boardDetailInfo?.writerEmail) {
      setIsWriter(true);
    }
  }, [boardDetailInfo]);

  const deleteBoard = useMutation({
    mutationFn: () => boardApi.deleteBoard(Number(params.id)),
    onSuccess(data) {
      navigate('/');
    },
    onError(err) {
      console.log(err);
      alert('게시글 삭제 실패');
    },
  });

  // const getCommentData = async () => {
  //   const data = await getComment(Number(params.id));

  //   setComment(data);
  // };
  return (
    <>
      {isWriter && (
        <S.PostEditBtnWrap>
          <S.PostEditBtn>수정</S.PostEditBtn>
          <S.PostDeleteBtn onClick={() => deleteBoard.mutate()}>삭제</S.PostDeleteBtn>
        </S.PostEditBtnWrap>
      )}

      <PostOption boardData={boardDetailInfo} />
      <PostContent
        boardContent={boardDetailInfo?.content}
        boardLocation={boardDetailInfo?.location.location}
        isWriter={isWriter}
      />
      <CommnetInput />
      {comment.map((item) => {
        return <CommentDisplay key={item.id} commentData={item} />;
      })}
    </>
  );
};

export default PostDetail;
