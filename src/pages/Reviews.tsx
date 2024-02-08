import reviewApi from '@_apis/review';
import EmptyData from '@_components/EmptyData';
import Review from '@_components/Review';
import Spinner from '@_components/common/Spinner';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';

const Reviews = () => {
  const loadTargetRef = useRef<HTMLDivElement>(null);

  const {
    data: reviewsData,
    hasNextPage,
    isLoading,
    isFetching,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ['reviews'],
    queryFn: ({ pageParam }) => reviewApi.getReviews(pageParam),
    initialPageParam: { page: 0, size: 10 },
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (lastPage.data.last) return null;
      return { page: lastPageParam.page + 1, size: lastPageParam.size };
    },
    select: (data) => data.pages.map((page) => page.data),
  });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && hasNextPage && !isFetching) {
          fetchNextPage();
        }
      });
    });
    if (loadTargetRef.current) {
      observer.observe(loadTargetRef.current);
    }

    return () => {
      if (loadTargetRef.current) {
        observer.unobserve(loadTargetRef.current);
      }
    };
  }, [fetchNextPage, hasNextPage, isFetching]);

  return (
    <>
      <p style={{ padding: '20px 20px 10px', fontFamily: 'Pretendard-Bold', fontSize: '18px' }}>
        밥 후기 {reviewsData ? reviewsData[0].totalElement : 0}개
      </p>

      {reviewsData?.length ? (
        <>
          {reviewsData.map((value) =>
            value.reviews.map((reviewInfo, index) => <Review key={index} reviewInfo={reviewInfo} isFull />)
          )}
          {isFetching && (
            <div style={{ position: 'relative', height: '100px' }}>
              <Spinner />
            </div>
          )}
        </>
      ) : isLoading ? (
        <div style={{ position: 'relative', marginTop: '100px' }}>
          <Spinner />
        </div>
      ) : (
        <EmptyData content='존재하는 밥 후기가 없습니다 :(' />
      )}
      <div id='trigger' ref={loadTargetRef} style={{ height: '1px' }} />
    </>
  );
};

export default Reviews;
