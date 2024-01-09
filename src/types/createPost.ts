export type FormDataType = {
  categoryType: string;
  eatTime: string;
  joinLimit: string;
  alchol: boolean;
  fix: boolean;
  gender: string;
  priceRange: number;
  ageGroupLimit: boolean;
  location: MapInfoType;
};
export type MapInfoType = {
  content: string;
  position: { lat: string; lng: string };
};
export type ContentDataType = {
  title: string;
  content: string;
  linkUrl: string;
};
