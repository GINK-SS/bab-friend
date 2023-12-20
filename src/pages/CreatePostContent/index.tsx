import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './styles';
import { useState } from 'react';
import { ContentDataType } from '../../types/createPost';

import infoCircle from '../../assets/images/svg/alert-circle.svg';

const CreatePostContent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [contentData, setContentDate] = useState<ContentDataType>({
    title: '',
    content: '',
    link: '',
  });

  const handleChange = (name: string, value: string) => {
    setContentDate((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  console.log(location.state);

  return (
    <S.CreateContentContainer>
      <S.TextBox>
        <S.InfoText>
          <S.InfoImg src={infoCircle} />
          게시글 내용을 입력해주세요.
        </S.InfoText>
      </S.TextBox>
      <S.Title>
        <S.TitleText>제목</S.TitleText>
        <S.TitleInput
          type="text"
          placeholder="글 제목을 입력해주세요.."
          onChange={(e) => handleChange('content', e.target.value)}
          value={contentData.content}
        ></S.TitleInput>
      </S.Title>
      <S.Content>
        <S.ContentText>내용</S.ContentText>
        <S.ContentInput
          placeholder="글 내용을 입력해주세요.."
          onChange={(e) => handleChange('title', e.target.value)}
          value={contentData.title}
        ></S.ContentInput>
      </S.Content>
      <S.Link>
        <S.LinkText>링크</S.LinkText>
        <S.LinkInput
          placeholder="링크(오픈채팅방)을 입력해주세요.."
          type="text"
          onChange={(e) => handleChange('link', e.target.value)}
          value={contentData.link}
        ></S.LinkInput>
      </S.Link>
      <S.BtnWrap>
        <S.PrevBtn
          onClick={() => {
            navigate(-1);
          }}
        >
          이전
        </S.PrevBtn>
        <S.registrationBtn>등록</S.registrationBtn>
      </S.BtnWrap>
    </S.CreateContentContainer>
  );
};

export default CreatePostContent;
