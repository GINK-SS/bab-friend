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
    nickName: string;
    temperature: number;
    genderType: string;
    birthYear: number;
    profileImageUrl?: string;
  };
};
