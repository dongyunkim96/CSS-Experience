import styled, { keyframes } from "styled-components";

const lineAnimation35 = keyframes`
  0% {
    stroke-dashoffset: 1152;
  }
  100% {
    stroke-dashoffset: 576;
  }
`;

const spinAnimation35 = keyframes`
  0% {
    transform: rotate(-90deg) translate3d(0, 0, 0);
  }
  100% {
    transform: rotate(270deg) translate3d(0, 0, 0)
  }
`;

export const Frame35 = styled.div`
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
  background: #1bbe9e;
  color: #fff;
`;

export const Center35 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Svg35 = styled.svg`
  width: 100px;
  height: 100px;
`;

const Circle35 = styled.circle`
  fill: none;
  stroke-width: 4;
`;

export const BackgroundCircle35 = styled(Circle35)`
  stroke: #12836d;
`;

export const LoaderCircle35 = styled(Circle35)`
  stroke: #fff;
  stroke-linecap: round;
  stroke-dasharray: 288;
  animation: ${lineAnimation35} 4s linear infinite, ${spinAnimation35} 3s linear infinite;
  transform-origin: 50% 50%;
`;