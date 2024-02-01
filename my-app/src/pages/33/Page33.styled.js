import styled, { keyframes } from "styled-components";

const moveLeft33 = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-300%);
  }
`;

const moveRight33 = keyframes`
  from {
    transform: translate(0);
  }
  to {
    transform: translateX(100%);
  }
`;

export const Frame33 = styled.div`
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
  background: #75c1e8;
`;

export const Sun33 = styled.div`
  position: absolute;
  height: 64px;
  width: 64px;
  top: 40px;
  left: 52px;
  background: #ffd93c;
  border-radius: 50%;
  animation: ${moveLeft33} 60s linear infinite alternate both;
`;

export const CloudBig33 = styled.svg`
  position: absolute;
  z-index: 5;
  top: 118px;
  left: 280px;
  animation: ${moveRight33} 60s linear infinite alternate both;
`;

export const CloudMedium33 = styled(CloudBig33)`
  top: 89px;
  left: 50px;
`;

export const CloudSmall33 = styled(CloudBig33)`
  top: 74px;
  left: 195px;
`;