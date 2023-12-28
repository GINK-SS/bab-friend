import { atom } from 'recoil';
import { UserState } from '../../types/auth';

export const userState = atom({
  key: 'userState',
  default: {
    accessToken: '',
    email: '',
    name: '',
    nickname: '',
    genderType: '',
    birthYear: 0,
    profileImageUrl: '',
  } as UserState,
});
