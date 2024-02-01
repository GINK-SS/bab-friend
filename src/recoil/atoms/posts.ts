import { PostDataType } from '@_types/createBoard';
import { atom, selector } from 'recoil';

export const postsState = atom<PostDataType>({
  key: 'postsState',
  default: {
    categoryType: 'ALL',
    eatTime: '',
    joinLimit: 0,
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
export const locationData = atom({
  key: 'locationData',
  default: {
    location: {
      content: '',
      position: {
        lat: 0,
        lng: 0,
      },
    },
    address: '',
  },
});
export const locationStringSelector = selector<string>({
  key: 'locationStringSelector',
  get: ({ get }) => {
    const locationObject = get(locationData);

    return JSON.stringify(locationObject);
  },
});
