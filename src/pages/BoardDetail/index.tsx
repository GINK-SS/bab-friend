import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { useQuery } from '@tanstack/react-query';

import PostOption from '@_components/BoardDetailOption';
import PostContent from '@_components/BoardDetailContent';
import CommnetInput from '@_components/CommentInput';
import CommentDisplay from '@_components/CommentDisplay';

import boardApi from '@_apis/board';
import { userState } from '@_recoil/atoms/user';

const BoardDetail = () => {
  let params = useParams();
  const userInfo = useRecoilValue(userState);
  const navigate = useNavigate();
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

  useEffect(() => {
    if (userInfo.email === boardDetailInfo?.writerEmail) {
      setIsWriter(true);
    }
  }, [boardDetailInfo]);

  const boardUpdate = () => {
    navigate('/createboard', {
      state: {
        isUpdate: true,
        boardDetailInfo: boardDetailInfo,
      },
    });
  };
  const isLimitJoin = boardDetailInfo && boardDetailInfo?.currentJoin >= boardDetailInfo?.joinLimit;
  return (
    <>
      {boardDetailInfo && (
        <>
          <PostOption boardData={boardDetailInfo} />
          <PostContent
            boardContent={boardDetailInfo.content}
            boardLocation={boardDetailInfo?.location?.location}
            isWriter={isWriter}
            boardUpdate={boardUpdate}
            boardFix={boardDetailInfo.fix}
            promiseTime={boardDetailInfo.eatTime}
            lastModifiedAt={boardDetailInfo.lastModifiedAt}
            isLimitJoin={isLimitJoin}
          />
          <CommnetInput />
          {boardDetailInfo?.boardComments.map((item) => {
            return <CommentDisplay key={item.id} commentData={item} />;
          })}
        </>
      )}
    </>
  );
};

export default BoardDetail;
