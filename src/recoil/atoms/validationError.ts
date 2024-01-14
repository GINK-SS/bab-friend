import { atom } from 'recoil';

export const errorMessageState = atom({
  key: 'errorMessageState',
  default: {
    contentError: '',
    titleError: '',
    linkUrlError: '',
    priceRangeError: '',
  },
});
