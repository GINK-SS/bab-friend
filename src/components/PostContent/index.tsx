import { StaticMap } from 'react-kakao-maps-sdk';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import boardApi from '@_apis/board';
import * as S from './styles';

type PostContentProps = {
  boardContent?: string;
  boardWriter?: string;
  boardLocation?: {
    content: string;
    position: {
      lat: number;
      lng: number;
    };
    address: string;
  };
  isWriter: boolean;
};

const PostContent = ({ boardContent, boardLocation, isWriter }: PostContentProps) => {
  let params = useParams();

  const fixPromise = useMutation({
    mutationFn: () => boardApi.fixBoard(Number(params.id)),
    onSuccess(data) {
      console.log('약속 확정');
    },
    onError(err) {
      console.log(err);
    },
  });

  return (
    <S.PostContentContainer>
      {isWriter && (
        <S.FixButtonWrap>
          <S.FixButton type='checkbox' id='fixBtn'></S.FixButton>
          <S.FixButtonLabel htmlFor='fixBtn' onClick={() => fixPromise.mutate()}>
            약속 확정
          </S.FixButtonLabel>
        </S.FixButtonWrap>
      )}
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
              text: boardLocation.content,
            },
          ]}
          level={3} // 지도의 확대 레벨
        />
      )}
    </S.PostContentContainer>
  );
};

export default PostContent;
