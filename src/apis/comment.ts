import { request } from './axios';
import { CommentResponse } from '@_types/comment';

export const getComment = async (feedId: number) => {
  const response = await request.get<CommentResponse>(`/comment/${feedId}`);

  return response.data.data;
};

export default getComment;
