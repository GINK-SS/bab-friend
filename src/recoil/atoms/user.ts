import { recoilPersist } from 'recoil-persist';
import { atom } from 'recoil';
import { UserState } from '@_types/auth';

const { persistAtom } = recoilPersist();

export const userState = atom({
  key: 'userState',
  default: {
    accessToken: '',
    email: '',
    name: '',
    nickName: '',
    genderType: '',
    birthYear: 0,
    profileImageUrl: '',
  } as UserState,
  effects_UNSTABLE: [persistAtom],
});
