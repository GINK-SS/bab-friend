import styled from 'styled-components';

export const ProfileInfoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 30px 20px;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
`;
export const ProfileImg = styled.img`
  margin-right: 20px;
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 50%;
`;
export const UserInfoWrapper = styled.div`
  width: 100%;
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
