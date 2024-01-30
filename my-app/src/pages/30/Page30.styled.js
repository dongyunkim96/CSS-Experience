import styled, { keyframes } from "styled-components";

const frameSize = 400;

const circleAnimation = keyframes`
  0%, 40% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0);
  }
  50% {
    opacity: 1;
  }
  70%, 100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.9);
  }
`;

const lineAnimation = keyframes`
  from {
    stroke-dashoffset: 50;
  }
  to {
    stroke-dashoffset: -590;
  }
`;

export const Frame30 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${frameSize}px;
  height: ${frameSize}px;
  margin-top: -${frameSize / 2}px;
  margin-left: -${frameSize / 2}px;
  border-radius: 2px;
  box-shadow: 4px 8px 16px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background: hsl(173, 100%, 67%);
  color: #333;
  font-family: "Open Sans", Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

export const Center30 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Circle30 = styled.div`
  width: 30px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 3px solid white;
  animation: ${circleAnimation} 2.5s infinite ease-out;
`;

export const Line30 = styled.svg`
  width: 400px;
  fill: none;
  stroke: white;
  height: 60px;
  stroke-width: 3;
  stroke-dasharray: 10 4 15 8 50 1000%;
  stroke-dashoffset: 50;
  animation: ${lineAnimation} 2.5s linear infinite;
`;

export const VerticalLine30 = styled.div`
  position: absolute;
  top: 0;
`;

export const LineTwo30 = styled(Line30)`
  transform: rotate(90deg);
  stroke: hsl(102, 100%, 49%);
`;

export const LineThree30 = styled(Line30)`
  transform: rotate(180deg);
  stroke: hsl(303, 97%, 50%);
`;

export const LineFour30 = styled(Line30)`
  transform: rotate(270deg);
  stroke: hsl(320, 95%, 86%);
`;


