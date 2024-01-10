export type PostDataType = {
  categoryType: string;
  eatTime: string;
  joinLimit: string;
  alchol: boolean;
  fix: boolean;
  gender: string;
  priceRange: number;
  ageGroupLimit: boolean;
  location: MapInfoType;
  title: string;
  content: string;
  linkUrl: string;
};
export type MapInfoType = {
  content: string;
  position: { lat: string; lng: string };
};
