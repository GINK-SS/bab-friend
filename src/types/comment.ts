export type Comment = {
  id: number;
  writer: string;
  content: string;
  createdAt: string;
  profileImageUrl: string;
};

export type CommentResponse = {
  data: Comment[];
};
