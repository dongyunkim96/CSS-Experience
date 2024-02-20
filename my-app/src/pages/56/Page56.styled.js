import styled, { keyframes, css } from "styled-components";

export const Frame56 = styled.div`
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
  background: #17a078;
  color: #fff;
`;

export const Center56 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const FlowerRotation = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Flower56 = styled.div`
  position: absolute;
  box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.25);
  animation: ${FlowerRotation} 6s ease infinite both;

  &:hover {
    cursor: pointer;
  }

  &:hover .petal {
    opacity: 0.25;
  }

  &:hover .stigma {
    transform: scale(0);
  }
`;

const petalAnimation = (num) => keyframes`
  0% {
    transform: rotate(${num * 18}deg) translateX(30px) scale(0.75);
  }
  25% {
    transform: rotate(${num * 18}deg) translateX(30px) scale(1.5);
  }
  100% {
    transform: rotate(${num * 18}deg) translateX(30px) scale(1);
  }
`;

export const Petal56 = styled.div`
  position: absolute;
  top: calc(50% - 60px);
  left: calc(50% - 30px);
  width: 60px;
  height: 60px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  background: #fff;
  border-radius: 60px 0;
  opacity: 0.7;
  transform-origin: 50% 100%;
  z-index: 1;
  transition: all 300ms ease;

  ${( props ) => {
    const delay = props.num * 50;
    return css`
      animation: ${petalAnimation(props.num)} 6s ease infinite both;
      animation-delay: ${delay}ms
    `;
  }}
`;

export const Stigma56 = styled.div`
  position: absolute;
  top: calc(50% - 25px);
  left: calc(50% - 25px);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #f4d055;
  z-index: 2;
  transition: all 600ms ease;
`;