import { PostDataType } from '@_types/createPost';
import { atom } from 'recoil';

export const postsState = atom<PostDataType>({
  key: 'postsState',
  default: {
    categoryType: '',
    eatTime: '',
    joinLimit: '',
    alchol: false,
    fix: false,
    gender: 'ALL',
    priceRange: 0,
    ageGroupLimit: false,
    location: {
      content: '',
      position: {
        lat: '',
        lng: '',
      },
    },
    title: '',
    content: '',
    linkUrl: '',
  },
});
