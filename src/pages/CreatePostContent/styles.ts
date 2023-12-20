import styled from 'styled-components';

export const CreateContentContainer = styled.div``;
export const TextBox = styled.div`
  width: 100%;
  height: 86px;
  border-bottom: 1px solid black;
  display: flex;
  padding-left: 30px;
  align-content: center;
`;
export const InfoText = styled.p`
  display: flex;
  align-items: center;
  font-size: 13px;
  height: inherit;
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
`;
export const TitleInput = styled.input`
  width: 100%;
  border: 1px gray solid;
  border-radius: 5px;
  padding: 5px 10px;
  background: none;
  outline: none;
  &::placeholder {
    font-size: 10px;
  }
`;
export const Content = styled.div`
  padding: 0 30px;
  margin-top: 30px;
`;
export const ContentText = styled.p`
  margin-bottom: 15px;
  font-size: 16px;
`;
export const ContentInput = styled.textarea`
  width: 100%;
  height: 180px;
  border: 1px gray solid;
  border-radius: 5px;
  padding: 20px 10px;
  background: none;
  outline: none;
  resize: none;
  &::placeholder {
    font-size: 10px;
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
export const LinkInput = styled.input`
  width: 100%;
  border: 1px gray solid;
  border-radius: 5px;
  padding: 5px 10px;
  background: none;
  outline: none;
  &::placeholder {
    font-size: 10px;
  }
`;
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
    background-color: black;
    color: white;
    border-radius: 20px;
  }
`;
export const PrevBtn = styled.button``;
export const registrationBtn = styled.button``;
