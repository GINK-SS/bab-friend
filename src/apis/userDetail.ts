import { UserInfoResponse } from '../types/api';
import { request } from './axios';

export const fetchUserInfoDetail = async (
  accessToken: string
): Promise<UserInfoResponse> => {
  const response = await request.get('/users/info/detail', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};
