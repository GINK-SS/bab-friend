import * as S from './styles';
import { useEffect, useState } from 'react';
import { Map, MapMarker, MapTypeControl, ZoomControl } from 'react-kakao-maps-sdk';
import { PostDataType } from '@_types/createBoard';

import { useRecoilState, useSetRecoilState } from 'recoil';
import { locationData } from '@_recoil/atoms/posts';
import Input from '@_components/common/Input';

import closeBtn from '@_assets/images/svg/cancle.svg';
import { ModalName, modalState } from '@_recoil/atoms/modal';

declare global {
  interface Window {
    kakao: any;
  }
}

const KakaoMap = () => {
  // 검색된 장소의 정보를 담을 상태
  const [mapData, setMapData] = useRecoilState(locationData);
  // 검색된 장소의 마커 정보를 담을 상태
  const [markers, setMarkers] = useState<any>([]);
  // 지도 객체를 담을 상태
  const [map, setMap] = useState<any>();
  // 검색어 입력값을 담을 상태
  const [inputValue, setInputValue] = useState<string>('');
  // 현재 위치의 좌표값을 저장할 상태
  const [currentPosition, setCurrentPosition] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
  });
  const setModal = useSetRecoilState(modalState);

  // 컴포넌트가 처음 렌더링될 때와 map 상태가 업데이트될 때 검색 수행
  useEffect(() => {
    handleSearch();
  }, [map]);

  // GeoLocation을 이용해서 접속 위치를 얻어옴
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCurrentPosition((prev) => ({
          ...prev,
          center: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          },
        }));
      });
    }
  }, [navigator.geolocation.getCurrentPosition]);

  // 마커 클릭시 정보 저장
  const handleClickMarker = (marker: any) => {
    setMapData((prevData) => ({
      ...prevData,
      location: marker,
    }));
  };

  // 좌표 -> 주소 변환
  const getAddress = (lat: number, lng: number) => {
    const geocoder = new kakao.maps.services.Geocoder();
    const coord = new kakao.maps.LatLng(mapData.location.position.lat, mapData.location.position.lng);
    const callback = function (result: any, status: any) {
      if (status === kakao.maps.services.Status.OK) {
        const addressFullName =
          result[0].address.region_1depth_name +
          ' ' +
          result[0].address.region_2depth_name +
          ' ' +
          result[0].address.region_3depth_name;
        setMapData((prevData) => ({ ...prevData, address: addressFullName }));
      }
    };
    geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
  };

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

  const alertConfirm = (marker: any) => {
    getAddress(mapData.location.position.lat, mapData.location.position.lng);

    if (mapData.location?.content === '') {
      alert('위치를 지정해주세요.');
    } else {
      setModal({ name: ModalName.kakaoMap, isActive: false });
    }
  };
  return (
    <>
      <S.ModalContainer>
        <S.CloseBtnWrap>
          <S.CloseBtn
            src={closeBtn}
            onClick={() => {
              setModal({ name: ModalName.kakaoMap, isActive: false });
            }}
          />
        </S.CloseBtnWrap>
        <S.ModalWrap>
          <S.ModalInputWrap>
            <Input
              type='text'
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
          </S.ModalInputWrap>
          <S.ModalButton onClick={handleSearch}>검색</S.ModalButton>
        </S.ModalWrap>
        <S.TextRequired>장소를 검색하고 화살표를 클릭해주세요.</S.TextRequired>
        <Map
          center={{
            lat: currentPosition.center.lat,
            lng: currentPosition.center.lng,
          }}
          style={{
            width: '100%',
            height: '350px',
            borderRadius: '20px',
            border: '1px solid #e0e0e0',
            boxShadow: '0px 0px 10px 0px #e0e0e0',
          }}
          level={3}
          onCreate={setMap}
        >
          <MapTypeControl position={'TOPRIGHT'} />
          <ZoomControl position={'RIGHT'} />
          {markers.map((marker: any) => (
            <MapMarker
              key={`marker-${marker.content}-${marker?.position.lat},${marker?.position.lng}`}
              position={marker?.position}
              onClick={() => handleClickMarker(marker)}
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
    </>
  );
};

export default KakaoMap;
