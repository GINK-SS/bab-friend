import { TokenResponse, UserInfoResponse } from '@_types/api';
import { request } from './axios';

/**
 * @description 카카오 로그인 API
 * @param code 카카오 인가코드
 * @returns statusCode, 유저 accessToken와 refreshToken
 */
const kakaoLogin = async (code: string) => {
  const { data } = await request.get<TokenResponse>('/kakao/callback', {
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

const authApi = { kakaoLogin, requestUserInfo, fetchUserInfoDetail };

export default authApi;
