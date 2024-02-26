import styled, { keyframes } from 'styled-components';

export const Frame69 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  margin-top: -200px;
  margin-left: -200px;
  border-radius: 2px;
  box-shadow: 1px 2px 10px 0 rgba(0, 0, 0, 0.3);
  overflow: hidden;
  background: #363847;
  color: #fff;
`;

export const Eye69 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  width: 160px;
  height: 160px;
  border-radius: 160px 0;
  background: #d8d8d8;
  overflow: hidden;
  transition: all 0.5s ease-in-out;

  &:hover {
    .ball {
        transform: rotate(-45deg) translateX(0);
    }
  }
`;

const BallAnimation = keyframes`
  0%, 14%, 56% {
    transform: rotate(-45deg) translateX(0);
  }
  18%, 30% {
    transform: rotate(-45deg) translate(-25px, 5px) scale(0.9);
  }
  34%, 52% {
    transform: rotate(-45deg) translate(25px, 10px) scale(0.9);
  }
`;

export const Ball69 = styled.div`
  position: absolute;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background: #fff;
  top: 25px;
  left: 25px;
  animation: ${BallAnimation} 5s ease-in-out infinite;
`;

export const Iris69 = styled.div`
  position: absolute;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #617983;
  top: 37px;
  left: 37px;
`;

const LidTopAnimation = keyframes`
  0%, 10%, 18%, 26%, 34%, 48%, 56%, 76%, 84% {
    transform: translateY(-60px);
  }
  14%, 40%, 52%, 80% {
    transform: translateY(0);
  }
`;

const LidBottomAnimation = keyframes`
  0%, 10%, 18%, 26%, 34%, 48%, 56%, 76%, 84% {
    transform: rotate(180deg) translateY(-60px);
  }
  14%, 40%, 52%, 80% {
    transform: rotate(180deg) translateY(0);
  }
`;

export const LidTop69 = styled.div`
  position: absolute;
  z-index: 2;
  width: 240px;
  height: 106px;
  top: 125px;
  left: 80px;
  transform: translateY(-60px);
  animation: ${LidTopAnimation} 5s ease-in-out infinite;

  ${Eye69}:hover & {
    transform: translateY(0);
  }
`;

export const LidBottom69 = styled.div`
  position: absolute;
  z-index: 2;
  width: 240px;
  height: 106px;
  bottom: 125px;
  left: 80px;
  transform: rotate(180deg) translateY(-60px);
  animation: ${LidBottomAnimation} 5s ease-in-out infinite;

  ${Eye69}:hover & {
    transform: rotate(180deg) translateY(0);
  }
`;

export const Svg69 = styled.svg`
  path {
    fill: #363847;
    stroke: none;
  }
`;