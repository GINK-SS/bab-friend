import { atom } from 'recoil';

export type ModalState = {
  isActive: boolean;
};

export const modalState = atom<ModalState>({
  key: 'modalState',
  default: {
    isActive: false,
  },
});
