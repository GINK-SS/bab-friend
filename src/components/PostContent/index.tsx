import { StaticMap } from 'react-kakao-maps-sdk';
import * as S from './styles';

type PostContentProps = {
  boardContent?: string;
  boardLocation?: {
    location?: string;
    position: {
      lat?: number;
      lng?: number;
    };
  };
};

const PostContent = ({ boardContent, boardLocation }: PostContentProps) => {
  return (
    <S.PostContentContainer>
      <S.Content>{boardContent}</S.Content>
      {boardLocation?.position.lat && boardLocation?.position.lng && (
        <StaticMap
          center={{
            lat: boardLocation.position.lat,
            lng: boardLocation.position.lng,
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
                lat: boardLocation.position.lat,
                lng: boardLocation.position.lng,
              },
              text: '죽이는 감자탕',
            },
          ]}
          level={3} // 지도의 확대 레벨
        />
      )}
    </S.PostContentContainer>
  );
};

export default PostContent;
