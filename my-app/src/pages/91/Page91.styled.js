import styled, { keyframes } from "styled-components";

const size = '120px';
const colorN = 'rgba(0, 0, 0, 0.1)';
const colorF = 'rgba(46, 204, 113, 0.8)';

const rotate = keyframes`
  0%, 25% {
    transform: scaleY(0);
  }
  75%, 100% {
    transform: scaleY(1);
  }
`;

const fillTop = keyframes`
  0%, 25% {
    transform: rotateX(90deg) translateZ(${parseInt(size) / -2}px);
  }
  75%, 100% {
    transform: rotateX(90deg) translateZ(${(parseInt(size) / 2) - 1}px);
  }
`;

export const Frame91 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  margin-top: -200px;
  margin-left: -200px;
  border-radius: 2px;
  box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background: #34495e;
  color: #fff;
`;

export const Center91 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  perspective: 500px;
`;

export const Loader91 = styled.div`
  width: ${size};
  height: ${size};
  transform-style: preserve-3d;
  transform: rotateX(-25deg) rotateY(45deg);
  transition: all 0.5s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: rotateX(-25deg) rotateY(45deg) translateY(-15px);

    .bottom {
        box-shadow: -22px -22px 30px 0 rgba(0, 0, 0, 0.4);
    }
  }
  
  .plane {
    position: absolute;
    width: ${size};
    height: ${size};
    top: 0;
    left: 0;
    background: ${colorN};
  }

  .bottom {
    transform: rotateX(-90deg) translateZ(${parseInt(size) / 2}px);
    background: ${colorF};
    box-shadow: -8px -8px 10px 0 rgba(0, 0, 0, 0.4);
    transition: all 0.5s ease-in-out;
  }

  .left,
  .right,
  .back,
  .front {
    &:before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: ${colorF};
        transform-origin: 50% 100%;
        animation: ${rotate} 4s ease-in-out infinite alternate;
    }
  }

  .left {
    transform: rotateY(-90deg) translateZ(${parseInt(size) / 2}px);
  }

  .right {
    transform: rotateY(90deg) translateZ(${parseInt(size) / 2}px);
  }

  .back {
    transform: rotateY(180deg) translateZ(${parseInt(size) / 2}px);
  }

  .front {
    transform: rotateY(0deg) translateZ(${parseInt(size) / 2}px);
  }

  .top {
    transform: rotateY(90deg) translateZ(${parseInt(size) / 2}px);
    opacity: 0.5;
  }

  .fill-top {
    background: ${colorF};
    animation: ${fillTop} 4s ease-in-out infinite alternate;
  }
`;