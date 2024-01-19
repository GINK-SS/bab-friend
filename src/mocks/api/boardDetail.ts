import { http, HttpResponse } from 'msw';
import { getBoardDetailData } from './data/boardDetailData';

const handlers = [
  http.get(`${process.env.REACT_APP_BASE_URL}/boards/:id`, ({ params }) => {
    const { id } = params;
    const boardData = getBoardDetailData().find((board) => board.id === Number(id));

    return HttpResponse.json({
      data: boardData,
    });
  }),
];

export default handlers;
