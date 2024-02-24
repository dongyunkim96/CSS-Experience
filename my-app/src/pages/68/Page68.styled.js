import styled, { keyframes } from 'styled-components';

export const Frame68 = styled.div`
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
  background: ${props => props.bgColor || "#684595"};
  color: #fff;
`;

export const Checkbox68 = styled.input`
  display: none;
`;

export const Label68 = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 50;
  cursor: pointer;
`;

const circleAnimation = keyframes`
  0% {
    stroke-dashoffset: 0;
    stroke-dasharray: 296 296;
    transform: rotate(0deg);
  }
  100% {
    stroke-dashoffset: 0%(-296 * 2);
    stroke-dasharray: 296 296;
    transform: rotate(360deg);
  }
`;

const dotAnimation = keyframes`
  0% {
    transform: translateY(5px);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(5px);
  }
`;

const iconAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  30% {
    transform: scale(1.1);
    opacity: 1;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
`;

const dotsAnimation = keyframes`
  0%, 60% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

export const Microphone68 = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  top: 150px;
  left: 150px;
  display: flex;
  justify-content: center;
  align-items: center;

  .circle {
    fill: none;
    stroke: #fff;
    stroke-width: 3;
    stroke-linecap: round;
    transform-origin: 50% 50%;
    animation: ${props => props.checked ? circleAnimation : "none"} 5s linear infinite;
  }

  .icon {
    position: absolute;
    width: 24px;
    height: 66px;
    top: 16px;
    left: 38px;
    animation: ${props => props.checked ? iconAnimation : "none"} .7s ease-in-out both;

    .body {
        position: relative;
        width: 24px;
        height: 52px;
        background: #fff;
        border-radius: 12px;

        .fill {
            position: relative;
            width: 6px;
            height: 16px;
            top: 7px;
            left: 9px;
            background: ${props => props.bgColor || "#684595"};
            border-radius: 3px;
        }
    }

    .foot_v {
        position: absolute;
        width: 4px;
        height: 15px;
        top: 51px;
        left: 10px;
        background: #fff;
    }

    .foot_h {
        position: absolute;
        width: 24px;
        height: 4px;
        bottom: 0;
        left: 0;
        background: #fff;
        border-radius: 2px;
    }
  }

  .dots {
    opacity: 0;
    position: absolute;
    width: 50px;
    height: 10px;
    top: 45px;
    left: 25px;
    animation: ${props => props.checked ? dotsAnimation : "none"} 1s ease-in-out both;

    .dot {
        float: left;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #fff;
        animation: ${props => props.checked ? dotAnimation : "none"} 1s ease-in-out infinite;
    }

    .dot-2 {
        margin: 0 10px;
    }
  }
`;