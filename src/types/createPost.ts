export type PostDataType = {
  categoryType: string;
  eatTime: string;
  joinLimit: number;
  currentJoin: number;
  alchol: boolean;
  fix: boolean;
  genderType: 'MALE' | 'FEMALE' | 'ALL';
  priceRange: number;
  ageGroupLimit: boolean;
  location: string;
  title: string;
  content: string;
  linkUrl: string;
};
export type MapInfoType = {
  content: string;
  position: { lat: number; lng: number };
};
