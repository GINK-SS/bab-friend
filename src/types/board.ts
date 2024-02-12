export type BoardInfo = {
  id: number;
  title: string;
  content: string;
  writerImageUrl: string;
  writer: string;
  eatTime: string;
  location: {
    location: {
      content: string;
      position: {
        lat: number;
        lng: number;
      };
    };
    address: string;
  };
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
    address: string;
  };
  linkUrl: string;
  priceRange: number;
  writerEmail: string;
  lastModifiedAt: string;
  changed: boolean;
  boardComments?: [{ id: number; writer: string; content: string; createdAt: string; profileImageUrl: string }];
};

export type BoardDetailResponse = {
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
    linkUrl: string;
    priceRange: number;
    writerEmail: string;
    lastModifiedAt: string;
    changed: boolean;
    boardComments: [{ id: number; writer: string; content: string; createdAt: string; profileImageUrl: string }];
  };
};

export type BoardResponse = Omit<BoardInfo, 'location'> & {
  location: string;
};

export type getBoardResponse = {
  statusCode: number;
  data: {
    boards: BoardResponse[];
    first: boolean;
    last: boolean;
    totalElement: number;
    empty: boolean;
  };
};

export type BoardFilter = {
  isJoinPossible: boolean;
};
