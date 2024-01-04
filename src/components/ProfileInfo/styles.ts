import styled from 'styled-components';

import editImage from '../../assets/images/svg/image.svg';

export const ProfileInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 20px;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
`;
export const ProfileImgWrap = styled.div<{ $editSet: boolean }>`
  position: relative;
  min-width: 60px;
  cursor: ${(props) => (props.$editSet ? 'pointer' : '')};
  &::after {
    content: ${(props) => (props.$editSet ? `url(${editImage})` : '')};
    position: absolute;
    bottom: 0;
    right: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: whitesmoke;
    background-size: cover;
  }
`;
export const ProfileImg = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 50%;
`;

export const UserInfoWrap = styled.div`
  width: 100%;
  padding-left: 20px;
`;
export const Nickname = styled.p`
  position: relative;
  font-size: 18px;
  font-family: 'Pretendard-ExtraBold';
`;
export const UserEmail = styled.p`
  margin-top: 1px;
  font-size: 10px;
  font-family: 'Pretendard-ExtraLight';
  opacity: 0.8;
`;
export const EditWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px 0 10px;
  width: 66px;
  height: 36px;
  border: 1px solid ${({ theme }) => theme.mainColor};
  border-radius: 8px;
  cursor: pointer;
`;
export const EditText = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.mainColor};
`;
export const EditingWrap = styled.div`
  width: 100%;
  padding-left: 20px;
`;
export const EditingText = styled.p`
  margin-bottom: 10px;
`;
export const EditingInput = styled.input`
  width: 60%;
  border: 1px solid #d5d4dc;
  border-radius: 5px;
  padding: 2px 10px;
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
`;
