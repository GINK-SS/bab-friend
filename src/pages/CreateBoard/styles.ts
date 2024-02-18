import styled from 'styled-components';
import { IoIosInformationCircleOutline } from 'react-icons/io';

export const CreatePostContainer = styled.div``;
export const CreatePostHeaderText = styled.div`
  width: 100%;
  height: 86px;
  border-bottom: 0.1px solid black;
  display: flex;
  padding-left: 30px;
  align-content: center;
`;
export const CreatePostText = styled.p`
  display: flex;
  align-items: center;
  font-size: 13px;
  height: inherit;
`;
export const CreatePostTextImg = styled(IoIosInformationCircleOutline)`
  width: 18px;
  height: 18px;
  margin-right: 5px;
`;
