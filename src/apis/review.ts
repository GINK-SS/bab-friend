import { ReviewResponse } from '@_types/review';
import { request } from './axios';

/**
 * @description 받은 밥 후기 가져오는 API
 * @param page 현재 페이지
 * @param size 한번에 가져올 페이지의 크기
 * @returns page에 맞는 size개의 후기들 정보
 */
export const getReviews = async ({ page, size = 5 }: { page: number; size?: number }) => {
  const { data } = await request.get<ReviewResponse>('/reviews', {
    params: {
      page,
      size,
    },
  });

  return data;
};

const reviewApi = { getReviews };

export default reviewApi;
