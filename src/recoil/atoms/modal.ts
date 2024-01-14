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

export const useCloseModal = () => {
  const setModal = useSetRecoilState(modalState);
  const closeModal = () => {
    setModal({ name: null, isActive: false });
  };

  return closeModal;
};
