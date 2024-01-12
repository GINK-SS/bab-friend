import { TokensResponse, UserInfoResponse } from '@_types/api';
import { request } from './axios';

/**
 * @description 카카오 로그인 API
 * @param code 카카오 인가코드
 * @returns statusCode, 유저 accessToken와 refreshToken
 */
const requestTokens = async (code: string) => {
  const { data } = await request.get<TokensResponse>('/kakao/callback', {
    params: {
      code,
    },
  });

  return data;
};

/**
 * @description 유저정보반환 API
 * @returns 유저 정보
 */
const requestUserInfo = async () => {
  const { data } = await request.get<UserInfoResponse>('/users/info');

  return data;
};

const fetchUserInfoDetail = async () => {
  const response = await request.get<UserInfoResponse>('/users/info/detail');

  return response.data;
};

const authApi = { requestTokens, requestUserInfo, fetchUserInfoDetail };

export default authApi;
