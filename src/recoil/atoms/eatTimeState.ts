import { atom } from 'recoil';

export const eatTimeState = atom({
  key: 'eatTimeState',
  default: {
    eatTime: '',
  },
});
