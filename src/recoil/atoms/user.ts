import { atom } from 'recoil';
import { UserState } from '@_types/user';

export const userState = atom<UserState>({
  key: 'userState',
  default: {
    email: '',
    name: '',
    nickName: '',
    temperature: 0,
    genderType: '',
    birthYear: 0,
    profileImageUrl: null,
  },
});
