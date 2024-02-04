import styled, { keyframes } from'styled-components';

export const Frame38 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  margin-top: -200px;
  margin-left: -200px;
  border-radius: 2px;
  box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  background: #9B59B6;
  color: #fff;
  cursor: pointer;
`;

export const LogoContainer38 = styled.div`
  position: absolute;
  top: 160px;
  left: 165px;
`;

export const LogoAnimation38 = keyframes`
  to {
    transform: scale(10);
  }
`;

export const Logo38 = styled.svg`
  fill: ${(props) => (props.isWhite ? '#fff' : '#9B59B6')};
  transform-origin: center center;
  transform: scale(${(props) => (props.isSmall ? 0 : 1)});
  transition: all 0.5s ease-out ${(props) => (props.isSmall ? '0.3s' : '0s')};

  &.small {
    transform: scale(0);
    transition: all 0.5s ease-in;
  }

  &.normal {
    transform: scale(1);
    transition: all 0.5s ease-out 0.3s;
  }
  
  &.big {
    animation: ${LogoAnimation38} 0.5s ease-in;
  }
`;