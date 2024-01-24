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

export type BoardDetailInfo = BoardInfo & {
  location: {
    content: string;
    position: {
      lat: number;
      lng: number;
    };
  };
  linkeUrl: string;
  priceRange: number;
};

export type boardDetailResponse = {
  data: BoardDetailInfo;
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
