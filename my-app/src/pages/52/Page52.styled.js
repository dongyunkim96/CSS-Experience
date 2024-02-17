import styled, { keyframes } from "styled-components";

export const Frame52 = styled.div`
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
`;

export const Center52 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
`;

export const Bar52 = styled.div`
  position: absolute;
  left: 50%;
  top: 25%;
  transform-origin: 0 100%;
  transform: rotate(${props => props.rotate}deg);
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

export const Dot52 = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #1f1717;
  animation: ${keyframes`
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1);
    }
    100% {
        transform: scale(0);
    }
  `} 1.8s linear 0s infinite normal both;

  &:nth-child(${props => props.index}) {
    animation-delay: ${props => `calc((${props.total} - ${props.index}) * 0.15s)`};
  }
`;