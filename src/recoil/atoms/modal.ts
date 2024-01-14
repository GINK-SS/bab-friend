import { atom, useSetRecoilState } from 'recoil';

export enum ModalName {
  login,
}

export type ModalState = {
  name: ModalName | null;
  isActive: boolean;
};

export const modalState = atom<ModalState>({
  key: 'modalState',
  default: {
    name: null,
    isActive: false,
  },
});
