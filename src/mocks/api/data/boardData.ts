export const getBoardData = () => {
  const data = [];

  for (let i = 1; i <= 10; i += 1) {
    data.push({
      postId: i,
      title: `${i}번째 제목입니다`,
      content: `${i}번째 내용입니다`,
      linkUrl: 'https://gink-ss.com',
      eatTime: '2024-01-16T03:42:38.038Z',
      joinLimit: `${i % 5}`,
      fix: i % 2 ? true : false,
      location: `${i}번째 장소입니다`,
      priceRange: 1000 * i,
      alcohol: i % 2 ? true : false,
      ageGroupLimit: i % 2 ? true : false,
      categoryType: 'KOREAN',
      genderType: 'MALE',
    });
  }

  return data;
};
