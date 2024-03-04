import styled, { keyframes } from 'styled-components';

const rotateHorizontal = keyframes`
  0% {
    transform: rotate(0);
  }
  20% {
    transform: rotate(45deg);
  }
  40% {
    transform: rotate(45deg) translateX(-20px);
  }
  60% {
    transform: rotate(45deg) scaleY(2) scaleX(.5);
  }
  80% {
    transform: rotate(45deg) scaleY(2) scaleX(.5);
  }
  100% {
    transform: rotate(90deg);
  }
`;

const rotateVertical = keyframes`
  0% {
    transform: rotate(0);
  }
  20% {
    transform: rotate(45deg);
  }
  40% {
    transform: rotate(45deg) translateX(10px);
  }
  60% {
    transform: rotate(45deg) scaleX(2) scaleY(.5);
  }
  80% {
    transform: rotate(90deg) scaleX(2) scaleY(.5);
  }
  100% {
    transform: rotate(90deg);
  }
`;

export const Frame89 = styled.div`
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
  background: #16a085;
  color: #fff;
`;

export const HorizontalStripes89 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const VerticalStripes89 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Stripe89 = styled.div`
  position: relative;
  float: left;
  background: #fff;
  animation: ${(props) => (props.horizontal ? rotateHorizontal : rotateVertical)} 4s ease-in-out infinite;

  ${(props) =>
    props.horizontal
      ? `
      width: 40px;
      height: 10px;
      margin: 15px 0;
    `
        : `
      width: 10px;
      height: 40px;
      margin: 0 15px;
    `}
`;