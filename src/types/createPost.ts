export type PostDataType = {
  categoryType: string;
  eatTime: string;
  joinLimit: string;
  alchol: boolean;
  fix: boolean;
  gender: string;
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
