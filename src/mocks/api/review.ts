import { http, HttpResponse } from 'msw';
import { getReviewData } from './data/reviewData';

const handlers = [
  http.get(`${process.env.REACT_APP_BASE_URL}/reviews`, ({ request }) => {
    const url = new URL(request.url);
    const page = url.searchParams.get('page');
    const size = url.searchParams.get('size');

    return HttpResponse.json({
      data: {
        reviews: getReviewData({ page: Number(page), size: Number(size) }),
        first: !Number(page),
        last: Number(page) === Math.floor(53 / Number(size)),
        totalElement: 53,
        empty: false,
      },
    });
  }),
];

export default handlers;
