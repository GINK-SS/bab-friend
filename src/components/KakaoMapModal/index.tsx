import * as S from './styles';
import { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { PostDataType } from '@_types/createPost';

import closeBtn from '@_assets/images/svg/cancle.svg';
import { useRecoilState } from 'recoil';
import { locationData } from '@_recoil/atoms/posts';

declare global {
  interface Window {
    kakao: any;
  }
}
export type KakaoMapModalPropsType = {
  setMapModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  postState: PostDataType;
  setPostState: React.Dispatch<React.SetStateAction<PostDataType>>;
};

const KakaoMapModal = ({ setMapModalOpen, postState, setPostState }: KakaoMapModalPropsType) => {
  const [mapData, setMapData] = useRecoilState(locationData);
  // 검색된 장소의 마커 정보를 담을 상태
  const [markers, setMarkers] = useState<any>([]);
  // 지도 객체를 담을 상태
  const [map, setMap] = useState<any>();
  // 검색어 입력값을 담을 상태
  const [inputValue, setInputValue] = useState<string>('');

  // 검색 버튼 클릭 시 실행되는 함수
  const handleSearch = () => {
    if (!map) return;

    // 카카오맵 Places 서비스 객체 생성
    const ps = new window.kakao.maps.services.Places();

    // 키워드 검색 수행
    ps.keywordSearch(inputValue, (data: any, status: any, _pagination: any) => {
      // 검색 결과가 성공적으로 반환된 경우
      if (status === window.kakao.maps.services.Status.OK) {
        // 검색된 장소의 좌표를 기준으로 지도 범위를 재설정하기 위한 LatLngBounds 객체 생성
        const bounds = new window.kakao.maps.LatLngBounds();
        // 새로운 마커 정보를 담을 배열
        let markers = [];

        // 검색된 각 장소에 대해 반복
        for (var i = 0; i < data.length; i++) {
          markers.push({
            position: {
              lat: data[i].y,
              lng: data[i].x,
            },
            content: data[i].place_name,
          });
          bounds.extend(new window.kakao.maps.LatLng(data[i].y, data[i].x));
        }
        // 마커 상태 업데이트
        setMarkers(markers);
        // 검색된 장소 위치를 기준으로 지도 범위 재설정
        map.setBounds(bounds);
      }
    });
  };

  // 컴포넌트가 처음 렌더링될 때와 map 상태가 업데이트될 때 검색 수행
  useEffect(() => {
    handleSearch();
  }, [map]);

  const alertConfirm = (marker: any) => {
    if (mapData.location?.content === '') {
      alert('위치를 지정해주세요.');
    } else {
      setMapModalOpen(false);
    }
  };
  return (
    <S.ModalContainer>
      <S.CloseBtnWrap>
        <S.CloseBtn
          src={closeBtn}
          onClick={() => {
            setMapModalOpen(false);
          }}
        />
      </S.CloseBtnWrap>
      <S.ModalWrap>
        <S.ModalInput
          type='text'
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <S.ModalButton onClick={handleSearch}>검색</S.ModalButton>
      </S.ModalWrap>
      <S.TextRequired>장소를 검색하고 화살표를 클릭해주세요.</S.TextRequired>
      <Map
        center={{
          lat: 37.566826,
          lng: 126.9786567,
        }}
        style={{
          width: '100%',
          height: '350px',
        }}
        level={1}
        onCreate={setMap}
      >
        {markers.map((marker: any) => (
          <MapMarker
            key={`marker-${marker.content}-${marker?.position.lat},${marker?.position.lng}`}
            position={marker?.position}
            onClick={() =>
              setMapData((prevData) => ({
                ...prevData,
                location: marker,
              }))
            }
          >
            {/* 마커를 클릭하면 해당 장소의 정보를 표시 */}
            {mapData?.location && mapData?.location.content === marker?.content && (
              <div style={{ color: '#000' }}>{marker?.content}</div>
            )}
          </MapMarker>
        ))}
      </Map>
      <S.ContentWrap>
        <S.MarkerContent>{mapData.location?.content}</S.MarkerContent>
        <S.ConfirmBtn onClick={alertConfirm}>확인</S.ConfirmBtn>
      </S.ContentWrap>
    </S.ModalContainer>
  );
};

export default KakaoMapModal;
