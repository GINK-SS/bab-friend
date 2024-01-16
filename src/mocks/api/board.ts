import { http, HttpResponse } from 'msw';
import { getBoardData } from './data/boardData';

const handlers = [
  http.get(`${process.env.REACT_APP_BASE_URL}/boards`, () => {
    return HttpResponse.json({
      data: getBoardData(),
    });
  }),
];

export default handlers;
