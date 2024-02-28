import styled, { keyframes } from 'styled-components';

export const Frame75 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  margin-top: -200px;
  margin-left: -200px;
  border-radius: 2px;
  box-shadow: 4px 8px 16px 0 rgba(0, 0, 0, 0.1);
  color: #333;
  background-color: #d33526;
`;

export const Center75 = styled.div`
  left: 50%;
  perspective: 1500px;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const BallAnimation = keyframes`
  0% {
    transform: rotateY(0deg) rotateX(0deg) rotateZ(0deg);
  }
  25% {
    transform: rotateY(45deg) rotateX(180deg) rotateZ(20deg);
  }
  50% {
    transform: rotateY(225deg) rotateX(0deg) rotateZ(90deg);
  }
  75% {
    transform: rotateY(0deg) rotateX(45deg) rotateZ(120deg);
  }
  100% {
    transform: rotateY(0deg) rotateX(0deg) rotateZ(0deg);
  }
`;

export const Ball75 = styled.div`
  animation: ${BallAnimation} 7s ease-in-out infinite;
  position: relative;
  height: 200px;
  width: 200px;
  transform-style: preserve-3d;
`;

export const Disc75 = styled.div`
  background-color: #fff;
  position: absolute;
  border-radius: 50%;
  height: 200px;
  width: 200px;
  top: 0;
  left: 0;
  opacity: 0.3;

  &.disc-1 {
    transform: rotateX(0deg);
  }
  &.disc-2 {
    transform: rotateX(30deg);
  }
  &.disc-3 {
    transform: rotateX(60deg);
  }
  &.disc-4 {
    transform: rotateX(90deg);
  }
  &.disc-5 {
    transform: rotateX(120deg);
  }
  &.disc-6 {
    transform: rotateX(180deg);
  }
`;