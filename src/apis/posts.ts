import { FormDataType } from '../types/createPost';
import { request } from './axios';

export const postsBoards = async (
  accessToken: string,
  formData: FormDataType
): Promise<FormDataType> => {
  const { data } = await request.post('/boards/posts', formData, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return data;
};
