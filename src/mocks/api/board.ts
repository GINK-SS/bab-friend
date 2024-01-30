import { http, HttpResponse } from 'msw';
import { getBoardData } from './data/boardData';

const handlers = [
  http.get(`${process.env.REACT_APP_BASE_URL}/boards`, ({ request }) => {
    const url = new URL(request.url);
    const page = url.searchParams.get('page');
    const size = url.searchParams.get('size');
    const search = url.searchParams.get('search') as string;

    return HttpResponse.json({
      data: {
        boards: getBoardData({ page: Number(page), size: Number(size), search }),
        first: !Number(page),
        last: Number(page) === 5,
        totalElement: 53,
        empty: false,
      },
    });
  }),
];

export default handlers;
