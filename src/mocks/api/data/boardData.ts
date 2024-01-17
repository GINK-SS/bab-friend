import { BoardInfo } from '@_types/board';

export const getBoardData = () => {
  const data: BoardInfo[] = [
    {
      id: 53,
      title: '좋은 시간 좋은 사람들과',
      content: '함께 동태탕에 밥 맛있게 먹을 사람 구해요 !'.repeat(10),
      writerImageUrl:
        'https:images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      writer: '가련한 기린',
      eatTime: '2024-01-16T03:42:38.038Z',
      shortenedLocation: '서울 성동구 송정동',
      categoryType: 'KOREAN',
      alcohol: false,
      currentJoin: 2,
      joinLimit: 4,
      ageLimit: {
        isLimit: true,
        up: 30,
        down: 25,
      },
      genderLimit: 'ALL',
      fix: false,
    },
    {
      id: 52,
      title: '좋은 시간 좋은 사람들과',
      content: '맛있는 파스타 고고',
      writerImageUrl:
        'https:images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      writer: '집구석파스타전문가엄준식',
      eatTime: '2024-01-16T03:42:38.038Z',
      shortenedLocation: '서울 서초구 XX동',
      categoryType: 'WEST',
      alcohol: false,
      currentJoin: 4,
      joinLimit: 4,
      ageLimit: {
        isLimit: false,
        up: null,
        down: null,
      },
      genderLimit: 'FEMALE',
      fix: true,
    },
    {
      id: 51,
      title: '인천 처음인데 같이 밥 드실 분 ?',
      content: '인천 놀러왔는데 뭐가 맛있나요 ?',
      writerImageUrl:
        'https:images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      writer: '가련한 기린',
      eatTime: '2024-01-16T03:42:38.038Z',
      shortenedLocation: null,
      categoryType: 'ALL',
      alcohol: true,
      currentJoin: 0,
      joinLimit: 4,
      ageLimit: {
        isLimit: true,
        up: 25,
        down: 20,
      },
      genderLimit: 'ALL',
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
      shortenedLocation: `${i}번째 장소`,
      categoryType: 'KOREAN',
      alcohol: i % 2 ? true : false,
      currentJoin: i % 5,
      joinLimit: 5,
      ageLimit: {
        isLimit: i % 2 ? true : false,
        up: i % 2 ? 40 : null,
        down: i % 2 ? 22 : null,
      },
      genderLimit: i % 2 ? 'MALE' : 'FEMALE',
      fix: false,
    });
  }

  return data;
};
