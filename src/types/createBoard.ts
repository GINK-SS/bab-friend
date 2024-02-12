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

export type UpdatePost = {
  title: string;
  content: string;
  location: {
    address?: string;
    location: {
      content: string;
      position: {
        lat: number;
        lng: number;
      };
    };
  };
  categoryType: string;
  eatTime: string;
  alcohol: boolean;
  joinLimit: number;
  ageGroupLimit: boolean;
  genderType: string;
  linkUrl: string;
  priceRange: number;
};
export type UpdatePostRequest = {
  title: string;
  content: string;
  location: string;
  categoryType: string;
  eatTime: string;
  alcohol: boolean;
  joinLimit: number;
  ageGroupLimit: boolean;
  genderType: string;
  linkUrl: string;
  priceRange: number;
};
