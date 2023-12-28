export type TokensResponse = {
  statusCode: number;
  data: {
    accessToken: string;
    refreshToken: string;
  };
};

export type UserInfoResponse = {
  statusCode: number;
  data: {
    email: string;
    name: string;
    nickname: string;
    genderType: string;
    birthYear: number;
    profileImageUrl?: string;
  };
};

export type UserState = {
  accessToken: string;
  email: string;
  name: string;
  nickname: string;
  genderType: string;
  birthYear: number;
  profileImageUrl?: string;
};
