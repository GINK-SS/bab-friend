import { http, HttpResponse } from 'msw';
import { getCommentData } from './data/comment';

const handlers = [
  http.get(`${process.env.REACT_APP_BASE_URL}/comment/:id`, ({ params }) => {
    const { id } = params;
    const commentData = getCommentData().filter((post) => post.id === Number(id));

    return HttpResponse.json({
      data: commentData,
    });
  }),
];

export default handlers;
