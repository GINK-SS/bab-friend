import { atom } from 'recoil';

export type ModalState = {
  isActive: boolean;
};

export const modalState = atom({
  key: 'modalState',
  default: {
    isActive: false,
  } as ModalState,
});
