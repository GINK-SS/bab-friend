import { PostDataType } from '../types/createBoard';
import { request } from './axios';

export const postsBoards = async (postData: PostDataType): Promise<PostDataType> => {
  const { data } = await request.post('/boards/posts', postData);

  return data;
};

const postApi = { postsBoards };

export default postApi;
