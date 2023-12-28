import { TokensResponse, UserInfoResponse } from '../types/auth';
import { request } from './axios';

/**
 * @description 카카오 로그인 API
 * @param code 카카오 인가코드
 * @returns statusCode, 유저 accessToken와 refreshToken
 */
const requestTokens = async (code: string): Promise<TokensResponse> => {
  const { data } = await request.get('/login/oauth2/code/kakao', {
    params: {
      code: code,
    },
  });

  return data;
};

/**
 * @description 유저정보반환 API
 * @param accessToken 유저 엑세스 토큰
 * @returns 유저 정보
 */
const requestUserInfo = async (
  accessToken: string
): Promise<UserInfoResponse> => {
  const { data } = await request.get('/users/info', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return data;
};

const authApi = { requestTokens, requestUserInfo };

export default authApi;
