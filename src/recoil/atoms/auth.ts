import { AuthState } from '@_types/auth';
import { atom, RecoilState } from 'recoil';

export const authState: RecoilState<AuthState> = atom({
  key: 'authState',
  default: {
    authStatus: 'pending',
  } as AuthState,
});
