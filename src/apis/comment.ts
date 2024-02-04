import { request } from './axios';
import { CommentResponse } from '@_types/comment';

export const getComment = async (feedId: number) => {
  const response = await request.get<CommentResponse>(`/comment/${feedId}`);

  return response.data.data;
};
export const postComment = async (feedId: number, content: { content: string }) => {
  const response = await request.post(`/boards/${feedId}/comment`, content);

  return response.data;
};

const commentApi = { getComment, postComment };

export default commentApi;
