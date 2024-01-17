import styled from 'styled-components';
import animations from '../../../style/animations';

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Spin = styled.span`
  width: 48px;
  height: 48px;
  border: 5px solid #fff;
  border-bottom-color: ${({ theme }) => theme.colors.mainColor};
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${animations.rotation} 1s linear infinite;
`;
