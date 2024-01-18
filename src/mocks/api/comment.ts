import { http, HttpResponse } from 'msw';

const handlers = [
  http.post(`${process.env.REACT_APP_BASE_URL}/comment`, async ({ request }) => {
    try {
      const comment = await request.json();

      return HttpResponse.json(comment, { status: 201 });
    } catch (error) {
      return HttpResponse.json({ error: error }, { status: 400 });
    }
  }),
];

export default handlers;
