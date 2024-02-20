import styled, { keyframes } from "styled-components";

const moveX = keyframes`
  from {
    transform: translateX(-10px);
  }
  to {
    transform: translateX(10px);
  }
`;

export const Frame54 = styled.div`
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
  background: linear-gradient(181deg, #d25d05 0%, #ff8d00 40%, #ffaf00 90%);
  color: #333;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const Cloud54 = styled.div`
  position: absolute;
  width: ${props => props.size};
  height: calc(${props => props.size} / ${props => props.height});
  border-radius: 1rem;
  background-color: #faf4e4;
  top: 20%;
  left: ${props => props.left};
  z-index: 10;
  animation: ${moveX} 4s ease-in-out infinite alternate-reverse;

  &:nth-child(2) {
    left: 80%;
  }

  &.big {
    width: calc(${props => props.size} * 3);
    height: calc(calc(${props => props.size} / ${props => props.height}) * 2);
    top: 30%;
    left: 10%;
  }

  &::after,
  &::before {
    position: absolute;
    content: "";
    background-color: #faf4e4;
    width: 1rem;
    height: 1rem;
    border-radius: 100%;
  }

  &::before {
    top: -10px;
    left: 50%;
  }

  &::after {
    top: -8px;
    left: 30px;
  }

  &.big::after,
  &.big::before {
    width: ${props => props.size};
    height: ${props => props.size};
  }

  &.big::after {
    top: -20px;
    left: 20%;
  }

  &.big::before {
    top: -30px;
    left: 40%;
  }
`;

export const Center54 = styled.div`
  position: absolute;
  bottom: 0;
  height: 50%;
  width: 100%;
`;

export const Row54 = styled.div`
  width: 120%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  &.row-one {
    background-color: #17b7d7;
    bottom: 0;
    left: -30px;
    animation: ${moveX} 5s ease-in-out infinite alternate;
  }

  &.row-two {
    background-color: #62c5e2;
    bottom: -50px;
    left: -20px;
    z-index: 2;
    animation: ${moveX} 4s ease-in-out infinite alternate-reverse;
  }

  &.row-three {
    background-color: #104a70;
    bottom: -100px;
    z-index: 3;
    left: -40px;
    animation: ${moveX} 3s ease-in-out infinite alternate;
  }
`;

export const Circle54 = styled.div`
  height: 50px;
  width: 100px;
  margin-top: -24px;
  background-color: ${props => props.backgroundColor};
  border-radius: ${props => props.borderRadius};
`;