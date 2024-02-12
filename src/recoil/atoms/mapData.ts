import { MapDataType } from '@_types/mapData';
import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();
export const locationData = atom<MapDataType>({
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
  effects_UNSTABLE: [persistAtom],
});
