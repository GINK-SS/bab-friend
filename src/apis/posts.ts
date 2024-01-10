import { PostDataType } from '../types/createPost';
import { request } from './axios';

export const postsBoards = async (accessToken: string, postData: PostDataType): Promise<PostDataType> => {
  const { data } = await request.post('/boards/posts', postData, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return data;
};

const postApi = { postsBoards };

export default postApi;
