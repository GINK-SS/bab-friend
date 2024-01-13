import styled from 'styled-components';

export const PostOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #dfe6e9;
`;
export const PostHeaderWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 30px;
`;
export const ProfileWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 18px;
`;
export const ProfileImg = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 5px;
  border-radius: 50%;
  object-fit: cover;
`;
export const Title = styled.h2`
  margin-top: 24px;
  font-family: 'Pretendard-SemiBold';
  font-size: 20px;
`;
export const Nickname = styled.p`
  font-size: 14px;
  font-family: 'Pretendard-Light';
`;
export const TimeWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: -10px;
`;
export const Time = styled.p`
  margin-left: 4px;
  font-size: 10px;
  font-family: 'Pretendard-Light';
`;
export const OptionContainer = styled.div`
  display: flex;
  width: 90%;
  /* height: 180px; */
  margin: 12px 0;
  background-color: #fff;
  border: 0.1px solid gray;
  border-radius: 5px;
`;
export const OptionWrap = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding: 14px 30px;
  > div {
    display: flex;
    gap: 10px;
  }
  > div > p {
    font-size: 14px;
  }
`;
export const CategoryWrap = styled.div``;
export const JoinLimitWrap = styled.div``;
export const AlcholWrap = styled.div``;
export const FixWrap = styled.div``;
export const PriceWrap = styled.div``;
export const StoreWrap = styled.div``;
export const GenderWrap = styled.div``;
export const LinkWrap = styled.div`
  display: flex;
  justify-content: center;
`;
export const OptionLink = styled.p`
  text-decoration: underline;
  cursor: pointer;
`;
export const OptionTitle = styled.p`
  flex: 1;
  font-size: 12px;
  font-family: 'Pretendard-Bold';
`;
export const OptionContent = styled.p`
  flex: 1;
  font-family: 'Pretendard-Light';
  font-size: 12px;
`;
