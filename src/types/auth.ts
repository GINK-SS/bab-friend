export type UserState = {
  authStatus: 'authorized' | 'pending' | 'unauthorized';
  email: string;
  name: string;
  nickName: string;
  temperature: number;
  genderType: string;
  birthYear: number;
  profileImageUrl: string;
};
