export type BoardInfo = {
  id: number;
  title: string;
  content: string;
  writerImageUrl: string;
  writer: string;
  eatTime: string;
  shortenedLocation: string | null;
  categoryType: 'KOREAN' | 'JAPAN' | 'CHINA' | 'WEST' | 'ALL';
  alcohol: boolean;
  currentJoin: number;
  joinLimit: number;
  ageGroupLimit: boolean;
  up: number;
  down: number;
  genderType: 'MALE' | 'FEMALE' | 'ALL';
  fix: boolean;
};

export type BoardDetailInfo = {
  id: number;
  title: string;
  content: string;
  writerImageUrl: string;
  writer: string;
  eatTime: string;
  categoryType: 'KOREAN' | 'JAPAN' | 'CHINA' | 'WEST' | 'ALL';
  alcohol: boolean;
  currentJoin: number;
  joinLimit: number;
  ageGroupLimit: boolean;
  up: number;
  down: number;
  genderType: 'MALE' | 'FEMALE' | 'ALL';
  fix: boolean;
  location: {
    location: {
      content: string;
      position: {
        lat: number;
        lng: number;
      };
    };
    address?: string;
  };
  linkeUrl: string;
  priceRange: number;
  writerEmail: string;
  lastModifiedAt: string;
  changed: boolean;
};

export type boardDetailResponse = {
  data: {
    id: number;
    title: string;
    content: string;
    writerImageUrl: string;
    writer: string;
    eatTime: string;
    categoryType: 'KOREAN' | 'JAPAN' | 'CHINA' | 'WEST' | 'ALL';
    alcohol: boolean;
    currentJoin: number;
    joinLimit: number;
    ageGroupLimit: boolean;
    up: number;
    down: number;
    genderType: 'MALE' | 'FEMALE' | 'ALL';
    fix: boolean;
    location: string;
    linkeUrl: string;
    priceRange: number;
    writerEmail: string;
    lastModifiedAt: string;
    changed: boolean;
  };
};

export type getBoardResponse = {
  statusCode: number;
  data: {
    boards: BoardInfo[];
    first: boolean;
    last: boolean;
    totalElement: number;
    empty: boolean;
  };
};
