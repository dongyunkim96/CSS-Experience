import styled, { keyframes } from "styled-components";

const scaleXAnimation = keyframes`
  0% {
    transform: scaleX(0);
  }
  60% {
    transform: scaleX(1.1);
  }
  80% {
    transform: scaleX(0.95);
  }
  100% {
    transform: scaleX(1);
  }
`;

const scaleYAnimation = keyframes`
  0% {
    transform: scaleY(0);
  }
  60% {
    transform: scaleY(1.1);
  }
  80% {
    transform: scaleY(0.95);
  }
  100% {
    transform: scaleY(1);
  }
`;

export const Frame94 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  margin-top: -200px;
  margin-left: -200px;
  border-radius: 2px;
  box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  background: #e0f0e5;
  color: #fff;
`;

export const TreeContainer94 = styled.div`
  position: absolute;
  z-index: 2;
  top: 120px;
  left: 198px;

  &:after {
    position: absolute;
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background: #b9d6c2;
    bottom: 0px;
    left: -38px;
    border-radius: 2px;
    animation: ${scaleXAnimation} 0.7s ease-in-out both;
  }
`;

export const Leafs94 = styled.div`
  position: absolute;
  z-index: -1;
  width: 0;
  height: 0;
  top: -60px;
  left: -60px;
  border-style: solid;
  border-width: 0 62px 204px 62px;
  border-color: transparent transparent #e84624 transparent;
  animation: ${scaleXAnimation} 1s ease-in-out 0.7s both;

  &:before {
    position: absolute;
    content: '';
    display: block;
    width: 0;
    height: 0;
    top: 0;
    left: -62px;
    border-style: solid;
    border-width: 0 0px 204px 62px;
    border-color: transparent transparent rgba(0, 0, 0, 0.2) transparent;
  }
`;

export const Trunk94 = styled.div`
  position: relative;
  width: 4px;
  height: 200px;
  background: #e8c87e;
  border-radius: 2px;
  transform-origin: 50% 100%;
  animation: ${scaleYAnimation} 0.7s ease-in-out both;
`;

export const Branch94 = styled.div`
  position: absolute;
  width: 4px;
  height: ${({ height }) => height}px;
  top: ${({ top }) => top}px;
  background: #e8c87e;
  border-radius: 2px;
  transform-origin: 50% 100%;
`;