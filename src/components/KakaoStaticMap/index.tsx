import { StaticMap } from 'react-kakao-maps-sdk';

type KakaoStaticMapProps = {
  center: {
    lat: number;
    lng: number;
  };
  height: number;
  content: string;
};

/**
 * @param center {lat: number, lng: number} 중심 좌표
 * @param height StaticMap의 높이 px
 * @param content 마커에 표시할 텍스트
 */

const KakaoStaticMap = ({ center, height, content }: KakaoStaticMapProps) => {
  return (
    <>
      <StaticMap
        center={center}
        style={{
          width: '100%',
          height: `${height}px`,
          borderRadius: '20px',
          border: '1px solid #e0e0e0',
          boxShadow: '0px 0px 10px 0px #e0e0e0',
        }}
        marker={[
          {
            position: center,
            text: content,
          },
        ]}
        level={3}
      />
    </>
  );
};
export default KakaoStaticMap;
