import styled, { keyframes } from 'styled-components';

const sparkling = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

const meteorAnimation = keyframes`
  0% {
    transform: translate3d(0, 0, 0) rotate(20deg);
  }
  10%, 100% {
    transform: translate3d(451px, 164px, 0) rotate(20deg);
  }
`;

export const Container42 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  margin-top: -200px;
  margin-left: -200px;
  border-radius: 2px;
  box-shadow: 4px 8px 16px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background: #fff;
  color: #333;
  font-family: 'Open Sans', Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

export const Sky42 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: #2980b9;
  background: -webkit-linear-gradient(to bottom, #2c3e50, #2980b9);
  background: linear-gradient(to bottom, #2c3e50, #2980b9);
`;

export const Star42 = styled.div`
  position: absolute;
  width: ${(props) => (props.size ? `${props.size}px` : '1px')};
  height: ${(props) => (props.size ? `${props.size}px` : '1px')};
  border-radius: 50%;
  background: #fff;
  animation: ${sparkling} 5s linear infinite;
`;

export const Meteor42 = styled.div`
  position: absolute;
  width: 130px;
  height: 3px;
  border-radius: 5px;
  background: url(https://100dayscss.com/codepen/shooting-star.png) center center no-repeat;
  background-size: 100% 100%;
  animation: ${meteorAnimation} 10s linear infinite;
`;