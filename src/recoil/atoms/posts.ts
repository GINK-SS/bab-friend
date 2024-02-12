import { PostDataType } from '@_types/createBoard';
import { atom } from 'recoil';

export const postsState = atom<PostDataType>({
  key: 'postsState',
  default: {
    categoryType: 'ALL',
    eatTime: '',
    joinLimit: 2,
    currentJoin: 1,
    alcohol: false,
    fix: false,
    genderType: 'ALL',
    priceRange: 0,
    ageGroupLimit: false,
    location: '',
    title: '',
    content: '',
    linkUrl: '',
  },
});
