import { TokenResponse, UserInfoResponse } from '@_types/api';
import { request, setAccessToken } from './axios';
import { setRecoil } from 'recoil-nexus';
import { authState } from '@_recoil/atoms/auth';

let refreshTimer: NodeJS.Timeout;

/**
 * @description accessToken, refreshToken 발급
 * @returns 새로운 accessToken
 */
const refresh = async () => {
  const {
    data: {
      data: { accessToken },
    },
  } = await request.post<TokenResponse>('/auth/refresh');

  if (!accessToken) {
    setRecoil(authState, {
      authStatus: 'unauthorized' as 'authorized' | 'pending' | 'unauthorized',
    });

    return;
  }

  setAccessToken(accessToken);
  setRecoil(authState, {
    authStatus: 'authorized' as 'authorized' | 'pending' | 'unauthorized',
  });
};

/**
 * @description 토큰 재발급 카운트
 */
const silentRefresh = () => {
  refreshTimer = setTimeout(
    async () => {
      try {
        await refresh();
        silentRefresh();
      } catch (e) {
        setTimeout(() => silentRefresh(), 10000);
      }
    },
    1000 * 60 * 29
  );
};

/**
 * @description 토큰 재발급 카운트 취소
 */
const stopRefresh = () => {
  if (refreshTimer) {
    clearTimeout(refreshTimer);
  }
};

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

const authApi = { refresh, silentRefresh, stopRefresh, kakaoLogin, requestUserInfo, fetchUserInfoDetail };

export default authApi;
