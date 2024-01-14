import { AuthState, AuthStatus } from '@_types/auth';
import { atom } from 'recoil';

export const authState = atom<AuthState>({
  key: 'authState',
  default: {
    authStatus: AuthStatus.pending,
  },
});
