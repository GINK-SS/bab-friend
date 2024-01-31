import { http, HttpResponse } from 'msw';
import { getReviewData } from './data/reviewData';

const handlers = [
  http.get(`${process.env.REACT_APP_BASE_URL}/reviews`, ({ request }) => {
    const url = new URL(request.url);
    const page = url.searchParams.get('page');
    const size = url.searchParams.get('size');

    return HttpResponse.json({
      data: {
        reviews: getReviewData({ page: Number(page), size: Number(size) ?? 5 }),
        first: !Number(page),
        last: Number(page) === 5,
        totalElement: 53,
        empty: false,
      },
    });
  }),
];

export default handlers;
