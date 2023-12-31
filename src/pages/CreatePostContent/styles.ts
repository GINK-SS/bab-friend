import styled from 'styled-components';

export const CreateContentContainer = styled.div`
  p {
    color: ${({ theme }) => theme.blackColor};
  }
  input {
    width: 100%;
    border: 1px solid #d5d4dc;
    border-radius: 5px;
    padding: 5px 10px;
    background: none;
    outline: none;
    &::placeholder {
      font-size: 12px;
      opacity: 0.7;
      font-family: 'Pretendard-ExtraLight';
    }
    &:focus {
      border: 1px solid ${({ theme }) => theme.mainColor};
    }
  }
`;

export const TextBox = styled.div`
  width: 100%;
  height: 86px;
  border-bottom: 0.1px solid black;

  display: flex;
  padding-left: 30px;
  align-content: center;
`;
export const InfoText = styled.p`
  display: flex;
  align-items: center;
  font-size: 13px;
  height: inherit;
  font-family: 'Pretendard-Ligt';
`;
export const InfoImg = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 5px;
`;
export const Title = styled.div`
  padding: 0 30px;
  margin-top: 30px;
`;
export const TitleText = styled.p`
  margin-bottom: 15px;
  font-size: 16px;
  font-family: 'Pretendard-SemiBold';
`;
export const TitleInput = styled.input``;
export const Content = styled.div`
  padding: 0 30px;
  margin-top: 30px;
`;
export const ContentText = styled.p`
  margin-bottom: 15px;
  font-size: 16px;
  font-family: 'Pretendard-SemiBold';
`;
export const ContentInput = styled.textarea`
  width: 100%;
  height: 180px;
  border: 1px solid #d5d4dc;

  border-radius: 5px;
  padding: 20px 10px;
  background: none;
  outline: none;
  resize: none;
  &::placeholder {
    font-size: 12px;
    opacity: 0.7;
    font-family: 'Pretendard-ExtraLight';
  }
  &:focus {
    border: 1px solid ${({ theme }) => theme.mainColor};
  }
`;
export const Link = styled.div`
  padding: 0 30px;
  margin-top: 30px;
`;
export const LinkText = styled.p`
  margin-bottom: 15px;
  font-size: 16px;
`;
export const LinkInput = styled.input``;
export const BtnWrap = styled.div`
  padding: 0 30px;
  display: flex;
  margin: 36px 0;
  width: 100%;
  justify-content: center;
  gap: 20px;
  button {
    flex: 1;
    padding: 8px 20px;
    border-radius: 20px;
    font-family: 'Pretendard-SemiBold';
  }
`;
export const PrevBtn = styled.button`
  background-color: white;
  color: black;
  border: 0.1px solid black;
`;
export const registrationBtn = styled.button`
  background-color: ${({ theme }) => theme.subColor};
  color: white;
`;
