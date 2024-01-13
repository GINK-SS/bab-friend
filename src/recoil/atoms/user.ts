import { RecoilState, atom } from 'recoil';
import { UserState } from '@_types/user';

export const userState: RecoilState<UserState> = atom({
  key: 'userState',
  default: {
    email: '',
    name: '',
    nickName: '',
    temperature: 0,
    genderType: '',
    birthYear: 0,
    profileImageUrl: null,
  } as UserState,
});
