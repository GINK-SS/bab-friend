import { ErrorMessages } from '@_types/errorMessage';
import { atom } from 'recoil';

export const errorMessageState = atom({
  key: 'errorMessageState',
  default: {
    contentError: '',
    titleError: '',
    linkUrlError: '',
    priceRangeError: '',
  } as ErrorMessages,
});
