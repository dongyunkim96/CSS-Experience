import styled, { keyframes } from "styled-components";

const lineAnimation34 = keyframes`
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
`;

const fillAnimation34 = keyframes`
  from {
    stroke-dashoffset: 0;
  }
  to {
    stroke-dashoffset: 270;
  }
`;

export const Frame34 = styled.div`
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
  background: #ea4c89;
  font-size: 0;
`;

export const Center34 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Line34 = styled.div`
  width: 225px;
  height: 2px;
  background: #fff;
  margin: 15px 0;
  animation: ${lineAnimation34} 0.6s ease-out both;
`;

export const TextSvg34 = styled.svg`
  stroke: #ea4c90;
  stroke-dashoffset: 0;
  stroke-dasharray: 270;
`;

export const AOne34 = styled.path`
  fill: #fff;
  stroke-width: 6;
  animation: ${fillAnimation34} 1.2s ease-in-out both;
`;

export const ATwo34 = styled.path`
  fill: #fff;
  stroke-width: 12;
  animation: ${fillAnimation34} 1.7s ease-in-out both;
`;

export const AThree34 = styled.path`
  fill: #fff;
  stroke-width: 18;
  animation: ${fillAnimation34} 2.2s ease-in-out both;
`;