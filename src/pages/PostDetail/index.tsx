import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import PostOption from '@_components/PostOption';
import PostContent from '@_components/PostContent';
import CommnetInput from '@_components/CommentInput';
import CommentDisplay from '@_components/CommentDisplay';

import boardApi from '@_apis/board';
import getComment from '@_apis/comment';
import { BoardDetailInfo } from '@_types/board';
import { Comment } from '@_types/comment';
const PostDetail = () => {
  let params = useParams();
  const [boards, setBoards] = useState<BoardDetailInfo>();
  const [comment, setComment] = useState<Comment[]>([]);

  useEffect(() => {
    getBoardDetailData();
    getCommentData();
  }, [params.id]);

  const getBoardDetailData = async () => {
    const { data } = await boardApi.getBoardDetail(Number(params.id));

    setBoards(data);
  };

  const getCommentData = async () => {
    const data = await getComment(Number(params.id));

    setComment(data);
  };

  return (
    <>
      <PostOption boardData={boards} />
      <PostContent boardContent={boards?.content} boardLocation={boards?.location} />
      <CommnetInput />
      {comment.map((item) => {
        return <CommentDisplay key={item.id} commentData={item} />;
      })}
    </>
  );
};

export default PostDetail;
