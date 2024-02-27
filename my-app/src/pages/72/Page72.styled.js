import styled, { keyframes } from 'styled-components';

export const Frame72 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  margin-top: -200px;
  margin-left: -200px;
  border-radius: 2px;
  box-shadow: 1px 2px 10px 0 rgba(0, 0, 0, 0.2);
  overflow: hidden;
  background: #3498db;
  color: #fff;
`;

export const Center72 = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  top: 100px;
  left: 100px;
  transform-style: preserve-3d;
`;

const rotateAnimation = (index) => keyframes`
  0% {
    transform: rotateX(0) rotateY(0) rotateZ(0);
  }
  ${index + 1}0% {
    transform: rotateX(0) rotateY(0) rotateZ(0);
  }
  100% {
    transform: rotateX(360deg) rotateY(-360deg) rotateZ(0);
  }
`;

export const Ring72 = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: 200px;
  border: 1px solid #fff;
  border-radius: 50%;
  transform-origin: 50% 50%;
  animation: ${({ index }) => rotateAnimation(index)} 10s ease-in-out infinite;
`;