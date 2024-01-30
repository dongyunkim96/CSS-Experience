import styled, { keyframes } from "styled-components";

export const shakeAnimation = keyframes`
  0%, 50%, 100% {
    transform: rotate(0);
  }
  5%, 10%, 15%, 20%, 25%, 30%, 35%, 40% {
    transform: rotate(6deg);
  }
  45% {
    transform: rotate(4deg);
  }
  7.5%, 12.5%, 17.5%, 22.5%, 27.5%, 32.5%, 37.5%, 42.5% {
    transform: rotate(-6deg);
  }
  47.5% {
    transform: rotate(-2deg);
  }
`;

export const lineAnimation = ( translateValue, scaleValue ) => keyframes`
  0% {
    transform: translate3d(0, 0, 0) scale(1);
    opacity: 1;
  }
  50%, 100% {
    transform: translate3d(${translateValue}px, 0, 0) scale(${scaleValue});
    opacity: 0;
  }
`;

export const Frame28 = styled.div`
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
  background: #DD3C54;
`;

export const Bell28 = styled.svg`
  position: absolute;
  top: 173px;
  left: 175px;
  fill: #fff;
  transform-origin: 50% 0;
  animation: ${shakeAnimation} 2.5s ease infinite;
`;

export const Line28 = styled.svg`
  fill: none;
  stroke: #fff;
  stroke-width: 2;
  stroke-linecap: round;
`;

export const LineOne28 = styled(Line28)`
  position: absolute;
  top: 170px;
  left: 230px;
  animation: ${lineAnimation(60, 2)} 2.5s ease-out infinite both;
`;

export const LineTwo28 = styled(Line28)`
  position: absolute;
  top: 170px;
  left: 230px;
  animation: ${lineAnimation(60, 2)} 2.5s ease-out .4s infinite both;
`;

export const LineThree28 = styled(Line28)`
  position: absolute;
  top: 170px;
  left: 230px;
  animation: ${lineAnimation(60, 2)} 2.5s ease-out .8s infinite both;
`;

export const LineFour28 = styled(Line28)`
  position: absolute;
  top: 170px;
  left: 150px;
  animation: ${lineAnimation(-60, 2)} 2.5s ease-out infinite both;
`;

export const LineFive28 = styled(Line28)`
  position: absolute;
  top: 170px;
  left: 150px;
  animation: ${lineAnimation(-60, 2)} 2.5s ease-out .4s infinite both;
`;

export const LineSix28 = styled(Line28)`
  position: absolute;
  top: 170px;
  left: 150px;
  animation: ${lineAnimation(-60, 2)} 2.5s ease-out .8s infinite both;
`;