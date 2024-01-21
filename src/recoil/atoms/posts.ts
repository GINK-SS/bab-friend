import { PostDataType } from '@_types/createPost';
import { atom, selector } from 'recoil';

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

    const location = JSON.stringify(locationObject.location);

    return location;
  },
});
