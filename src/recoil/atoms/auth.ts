import { AuthState } from '@_types/auth';
import { atom } from 'recoil';

export const authState = atom<AuthState>({
  key: 'authState',
  default: {
    authStatus: 'pending',
  },
});
