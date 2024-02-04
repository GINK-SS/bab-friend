import { BoardResponse } from '@_types/board';

const data: BoardResponse[] = [
  {
    id: 53,
    title: '좋은 시간 좋은 사람들과',
    content: '함께 동태탕에 밥 맛있게 먹을 사람 구해요 !'.repeat(10),
    writerImageUrl:
      'https:images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    writer: '가련한 기린',
    eatTime: '2024-01-20T03:40:38.038Z',
    location:
      '{"location":{"position":{"lat":"37.4688144811818","lng":"126.937139260096"},"content":"카페녹다"},"address":"서울 중랑구 면목동"}',
    categoryType: 'KOREAN',
    alcohol: false,
    currentJoin: 2,
    joinLimit: 4,
    ageGroupLimit: true,
    up: 1992,
    down: 1999,
    genderType: 'ALL',
    fix: false,
  },
  {
    id: 52,
    title: '좋은 시간 좋은 사람들과',
    content: '맛있는 파스타 고고',
    writerImageUrl:
      'https:images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    writer: '집구석파스타전문가엄준식',
    eatTime: '2024-01-19T03:42:38.038Z',
    location:
      '{"location":{"position":{"lat":"37.4688144811818","lng":"126.937139260096"},"content":"카페녹다"},"address":"서울 관악구 신림동"}',
    categoryType: 'WEST',
    alcohol: false,
    currentJoin: 4,
    joinLimit: 4,
    ageGroupLimit: false,
    up: 0,
    down: 0,

    genderType: 'FEMALE',
    fix: true,
  },
  {
    id: 51,
    title: '인천 처음인데 같이 밥 드실 분 ?',
    content: '인천 놀러왔는데 뭐가 맛있나요 ?',
    writerImageUrl:
      'https:images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    writer: '가련한 기린',
    eatTime: '2024-01-23T03:42:38.038Z',
    location:
      '{"location":{"position":{"lat":"37.4688144811818","lng":"126.937139260096"},"content":"카페녹다"},"address":"서울 관악구 신림동"}',
    categoryType: 'ALL',
    alcohol: true,
    currentJoin: 0,
    joinLimit: 4,
    ageGroupLimit: true,
    up: 2000,
    down: 2004,
    genderType: 'ALL',
    fix: false,
  },
];

for (let i = 50; i >= 1; i -= 1) {
  data.push({
    id: i,
    title: `${i}번째 제목`,
    content: `${i}번째 내용입니다`,
    writerImageUrl:
      'https:images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    writer: `사용자 ${i}`,
    eatTime: '2024-01-16T03:42:38.038Z',
    location: `{"location":{"position":{"lat":"37.4688144811818","lng":"126.937139260096"},"content":"카페녹다"},"address":"서울 ${i}구 XX동"}`,
    categoryType: 'KOREAN',
    alcohol: i % 2 ? true : false,
    currentJoin: i % 5,
    joinLimit: 5,
    ageGroupLimit: true,
    up: i % 2 ? 1993 : 1992,
    down: i % 2 ? 2001 : 1995,
    genderType: i % 2 ? 'MALE' : 'FEMALE',
    fix: false,
  });
}

export const getBoardData = ({ page, size = 10, search }: { page: number; size?: number; search: string }) => {
  if (search) {
    return data
      .filter((value) => value.title.includes(search) || value.content.includes(search))
      .slice(page * size, page * size + size);
  }

  return data.slice(page * size, page * size + size);
};

export const getBoardLast = ({ page, size = 10, search }: { page: number; size?: number; search: string }) => {
  if (search) {
    return (
      Math.floor(
        data.filter((value) => value.title.includes(search) || value.content.includes(search)).length / size
      ) === page
    );
  }

  return Math.floor(data.length / size) === page;
};
