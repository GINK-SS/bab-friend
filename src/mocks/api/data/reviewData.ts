import { ReviewInfo } from '@_types/review';

export const getReviewData = ({ page, size = 10 }: { page: number; size?: number }) => {
  const data: ReviewInfo[] = [
    {
      id: 53,
      content: '재밌게 분위기 이끌어주셔서 좋았습니다 ! '.repeat(10),
      writerImageUrl:
        'https:images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      writer: '가련한 기린',
      createdAt: '2024-01-16T03:42:38.038Z',
    },
    {
      id: 52,
      content: '약속 시간에 잘 맞춰 도착하시고 재밌게 식사했습니다ㅎㅎ',
      writerImageUrl:
        'https:images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      writer: '집구석파스타전문가엄준식',
      createdAt: '2024-01-16T03:42:38.038Z',
    },
    {
      id: 51,
      content: '너무 좋았습니다 !',
      writerImageUrl:
        'https:images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      writer: '가련한 기린',
      createdAt: '2024-01-16T03:42:38.038Z',
    },
  ];

  for (let i = 50; i >= 1; i -= 1) {
    data.push({
      id: i,
      content: `${i}번째 내용입니다`,
      writerImageUrl:
        'https:images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      writer: `사용자 ${i}`,
      createdAt: '2024-01-16T03:42:38.038Z',
    });
  }

  return data.slice(page * size, page * size + size);
};
