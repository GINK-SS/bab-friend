export type Comment = {
  id: number;
  feedId: number;
  createdAt: string;
  content: string;
  author: {
    id: number;
    profileImageUrl: string;
    nickName: string;
  };
};

export type CommentResponse = {
  data: Comment[];
};
