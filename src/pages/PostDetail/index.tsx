import PostOption from '@_components/PostOption';
import PostContent from '@_components/PostContent';
import CommnetInput from '@_components/CommentInput';
import CommentDisplay from '@_components/CommentDisplay';
import { useParams } from 'react-router-dom';
import boardApi from '@_apis/board';
import { BoardDetailInfo } from '@_types/board';
import { useEffect, useState } from 'react';

const PostDetail = () => {
  let params = useParams();
  const [boards, setBoards] = useState<BoardDetailInfo>();

  const getBoardDetailData = async () => {
    const { data } = await boardApi.getBoardDetail(Number(params.id));

    setBoards(data);
  };

  useEffect(() => {
    getBoardDetailData();
  }, []);

  return (
    <>
      <PostOption boardData={boards} />
      <PostContent boardContent={boards?.content} boardLocation={boards?.location} />
      <CommnetInput />
      <CommentDisplay />
    </>
  );
};

export default PostDetail;
