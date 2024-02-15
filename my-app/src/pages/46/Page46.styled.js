import styled, { keyframes, css } from 'styled-components';

export const Frame46 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  margin-top: -200px;
  margin-left: -200px;
  border-radius: 5px;
  box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  background: #27ae60;
  color: #fff;
  transform: perspective(60px);
  transform-style: preserve-3d;
`;

export const Dot46 = styled.div`
  position: absolute;
  top: 100px;
  left: 100px;
  width: 10px;
  height: 10px;
  background: #fff;
  border-radius: 50px;
  transform-origin: 0 100px;
`;

export const Ring46 = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  top: 100px;
  left: 100px;
  animation: ${(props) => props.animation} 5s ease-in-out infinite alternate;
`;

const rotateAnimation46 = (deg) => keyframes`
  0% {
    transform: translate3d(0, -100px, 0) rotate(${deg}deg);
  }
  100% {
    transform: translate3d(0, -100px, 0) rotate(${deg + 360}deg);
  }
`;

export const rotateAnimation46Css = (deg) => css`
  ${rotateAnimation46(deg)};
`;
