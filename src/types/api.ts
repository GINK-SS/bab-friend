export type TokenResponse = {
  statusCode: number;
  data: {
    accessToken: string;
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
    profileImageUrl: string | null;
  };
};
