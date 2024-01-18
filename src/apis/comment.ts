import { request } from './axios';

type CommentType = {
  comments: string;
};
export const postsComment = async (commentData: CommentType): Promise<CommentType> => {
  const { data } = await request.post('/comment', commentData);

  return data;
};

const postApi = { postsComment };

export default postApi;
