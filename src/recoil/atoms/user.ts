import { RecoilState, atom } from 'recoil';
import { UserState } from '@_types/auth';

const { persistAtom } = recoilPersist();

export const userState: RecoilState<UserState> = atom({
  key: 'userState',
  default: {
    authStatus: 'pending',
    email: '',
    name: '',
    nickName: '',
    temperature: 0,
    genderType: '',
    birthYear: 0,
    profileImageUrl: '',
  } as UserState,
  effects_UNSTABLE: [persistAtom],
});
