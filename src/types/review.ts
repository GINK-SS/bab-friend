export type ReviewInfo = {
  id: number;
  content: string;
  writerImageUrl: string;
  writer: string;
  createdAt: string;
};

export type ReviewResponse = {
  statusCode: number;
  data: {
    reviews: ReviewInfo[];
    first: boolean;
    last: boolean;
    totalElement: number;
  };
};
