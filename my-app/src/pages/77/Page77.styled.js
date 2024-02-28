import styled, { keyframes } from "styled-components";

const ballAnimation = keyframes`
  0%, 100% {
    transform: translateX(-300%);
  }
  50% {
    transform: translateX(150%);
  }
`;

const blurAnimation = keyframes`
  0%, 50%, 100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-20px);
  }
  75% {
    transform: translateX(20px);
  }
`;

export const Frame77 = styled.div`
  position: absolute;
  top: 30%;
  left: 40%;
  width: 400px;
  height: 400px;
  border-radius: 8px;
  background: linear-gradient(90deg, #314755 0%, #26a0da 100%);
`;

export const Ball77 = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${ballAnimation} 2s ease-in-out infinite;
`;

export const Blur77 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.3);
  opacity: ${(props) => props.opacity};
  animation: ${blurAnimation} 2s ease-in-out infinite;
`;