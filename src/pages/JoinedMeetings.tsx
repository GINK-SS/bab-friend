import { useQuery } from '@tanstack/react-query';
import authApi from '@_apis/auth';
import boardApi from '@_apis/board';
import Board from '@_components/Board';
import Spinner from '@_components/common/Spinner';
import EmptyData from '@_components/EmptyData';
import Modal from '@_components/Modal';
import { ModalName, modalState } from '@_recoil/atoms/modal';
import { useSetRecoilState } from 'recoil';
import Review from '@_components/Modal/Review';
import { useState } from 'react';
import { JoinedBoardResponse } from '@_types/board';

const JoinedMeetings = () => {
  const [selectJoined, setSelectJoined] = useState<JoinedBoardResponse>();
  const { data: userInfo } = useQuery({ queryKey: ['userInfo'], queryFn: authApi.requestUserInfo });
  const { data: joined, isLoading } = useQuery({
    queryKey: ['joined', userInfo?.nickName],
    queryFn: boardApi.getjoinedMettings,
    select: (data) => data.data.map((value) => ({ ...value, location: JSON.parse(value.location) })),
  });
  const setModal = useSetRecoilState(modalState);

  const onReview = (joinedData: JoinedBoardResponse) => {
    setSelectJoined(joinedData);
    setModal({ name: ModalName.review, isActive: true });
  };

  return (
    <>
      <p
        style={{
          margin: '20px',
          padding: '5px',
          border: '1px solid rgba(0, 0, 0, 0.5)',
          textAlign: 'center',
          fontWeight: '700',
        }}
      >
        확정 완료된 게시물의 약속 시간 1일 후부터 리뷰 작성이 가능합니다!
      </p>

      <Modal name={ModalName.review} fullScreen>
        <Review boardData={selectJoined} />
      </Modal>

      {joined?.length ? (
        joined.map((joinedData, index) => (
          <Board
            key={index}
            boardData={joinedData}
            isShowLimit={false}
            hasReviewBtn
            reviewStatus={joinedData.reviewStatus}
            onReviewClick={() => onReview(joinedData)}
          />
        ))
      ) : isLoading ? (
        <div style={{ position: 'relative', marginTop: '100px' }}>
          <Spinner />
        </div>
      ) : (
        <EmptyData content='존재하는 게시물이 없습니다 :(' />
      )}
    </>
  );
};

export default JoinedMeetings;
