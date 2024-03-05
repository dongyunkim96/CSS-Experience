import styled, { keyframes } from "styled-components";

const eyesAnimation = keyframes`
  0%, 23%, 25%, 65%, 67%, 89%, 91%, 100% {
    transform: scaleY(1);
  }
  24%, 66%, 90% {
    transform: scaleY(0);
  }
`;

const pupilsAnimation = keyframes`
  0%, 23%, 25%, 65%, 67%, 89%, 91%, 100% {
    transform: scaleY(1);
  }
  24%, 66%, 90% {
    transform: scaleY(2);
  }
`;

export const Frame95 = styled.div`
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
  background: #ffdcb5;
  color: #fff;
`;

export const Pig95 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Head95 = styled.div`
  position: relative;
  width: 160px;
  height: 160px;
  background: #f7949a;
  border-radius: 50%;
`;

export const Ear95 = styled.div`
  box-sizing: border-box;
  position: absolute;
  z-index: -1;
  width: 60px;
  height: 60px;
  top: -5px;
  background: #ffb7bc;
  border: 7px solid #f7949a;

  &.ear-l {
    border-radius: 15px 0 0 0;
    left: 10px;
    transform: rotate(-12deg) skewY(27deg);
  }

  &.ear-r {
    border-radius: 0 15px 0 0;
    right: 10px;
    transform: rotate(12deg) skewY(-27deg);
  }
`;

export const Eye95 = styled.div`
  position: absolute;
  width: 22px;
  height: 22px;
  top: 42%;
  background: #fff;
  border-radius: 50%;
  animation: ${eyesAnimation} 15s ease-in-out infinite;

  &:before {
    position: absolute;
    content: '';
    display: block;
    width: 4px;
    height: 4px;
    background: #333;
    border-radius: 50%;
    top: 9px;
    left: 9px;
    animation: ${pupilsAnimation} 15s ease-in-out infinite;
  }

  &.eye-l {
    left: 24%;
  }

  &.eye-r {
    right: 24%;
  }
`;

export const Nose95 = styled.div`
  position: absolute;
  height: 50px;
  width: 60px;
  top: 55%;
  left: 50px;
  background: #ffb7bc;
  border-radius: 100px / 80px;
`;

export const Nostril95 = styled.div`
  position: absolute;
  width: 12px;
  height: 12px;
  top: 15px;
  background: #ce666d;
  border-radius: 50%;

  &.nostril-l {
    left: 14px;
  }

  &.nostril-r {
    right: 14px;
  }
`;