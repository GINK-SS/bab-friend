import reviewApi from '@_apis/review';
import EmptyData from '@_components/EmptyData';
import Review from '@_components/Review';
import Spinner from '@_components/common/Spinner';
import { ReviewInfo } from '@_types/review';
import { useEffect, useRef, useState } from 'react';

const Reviews = () => {
  const [reviews, setReviews] = useState<ReviewInfo[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const [isLoadActive, setIsLoadActive] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const loadTargetRef = useRef<HTMLDivElement>(null);

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);

        if (isLoadActive) {
          setPage((prev) => prev + 1);
        }
      }
    });
  });

  const getReviewData = async () => {
    const {
      data: { reviews, totalElement, last },
    } = await reviewApi.getReviews({ page, size: 10 });

    setReviews((prev) => [...prev, ...reviews]);
    setTotal(totalElement);

    if (last) {
      setIsLoadActive(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    getReviewData();
    setIsLoading(false);
  }, [page]);

  useEffect(() => {
    if (loadTargetRef.current) {
      observer.observe(loadTargetRef.current);
    }
  }, [reviews]);

  return (
    <div>
      <p style={{ padding: '20px 20px 10px', fontFamily: 'Pretendard-Bold', fontSize: '18px' }}>밥 후기 {total}개</p>

      {reviews.length ? (
        <>
          {reviews.map((reviewInfo, index) => (
            <Review
              key={index}
              reviewInfo={reviewInfo}
              ref={loadTargetRef}
              isTarget={index === reviews.length - 3}
              isFull
            />
          ))}
          {isLoading && (
            <div style={{ position: 'relative' }}>
              <Spinner />
            </div>
          )}
        </>
      ) : (
        <EmptyData content='존재하는 밥 후기가 없습니다 :(' />
      )}
    </div>
  );
};

export default Reviews;
