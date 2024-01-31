export type PostDataType = {
  categoryType: 'KOREAN' | 'JAPAN' | 'CHINA' | 'WEST' | 'ALL';
  eatTime: string;
  joinLimit: number;
  currentJoin: number;
  alcohol: boolean;
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
