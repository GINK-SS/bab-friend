import { StaticMap } from 'react-kakao-maps-sdk';
import * as S from './styles';

const PostContent = () => {
  return (
    <S.PostContentContainer>
      <S.Content>
        12월 8일 서울 성동구 롯데마트 앞 맛있는 동태탕집이 있는데 같이 가실분 구합니다. 저는 남자이구 성별은
        상관없습니다. 간단하게 술한잔도 하면 좋을거같아요. 같이 가실분은 댓글 달아주세요.
      </S.Content>
      <StaticMap
        center={{
          lat: 33.450701,
          lng: 126.570667,
        }}
        style={{
          width: '100%',
          height: '250px',
          marginTop: '50px',
          borderRadius: '10px',
        }}
        marker={[
          {
            position: {
              lat: 33.450001,
              lng: 126.570467,
            },
            text: '죽이는 감자탕',
          },
        ]}
        level={3} // 지도의 확대 레벨
      />
    </S.PostContentContainer>
  );
};

export default PostContent;
