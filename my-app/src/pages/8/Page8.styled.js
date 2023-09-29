import styled, { keyframes } from "styled-components";

export const rotate = keyframes`
  from {
    transform: rotate(0deg) translate3d(0, 0, 0);
  }
  to {
    transform: rotate(360deg) translate3d(0, 0, 0);
  }
`;

export const Frame = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  margin-top: -200px;
  margin-left: -200px;
  border-radius: 2px;
  box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.2);
  background: #000;
  filter: contrast(25);
  border-radius: 50px 0px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

export const Center = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Ball = styled.div`
  position: relative;
  width: 90px;
  height: 90px;
  background: #fff;
  border-radius: 50%;
  filter: blur(15px);
`;

export const Blubb = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 50px;
  height: 50px;
  transform: rotate(${(props) => Math.random() * 300}deg);

  &:after {
    position: absolute;
    display: block;
    content: '';
    width: 50px;
    height: 50px;
    background: #fff;
    border-radius: 50%;
    transform-origin: ${(props) => `40px ${40 - props.i * 3}px`};
    animation: ${rotate} ${(props) => 2.5 + props.i / 5}s ease-in-out ${(props) => props.i / 5}s infinite;
    filter: blur(5px);
  };
`;

export const Sparkle = styled.div`
  position: absolute;
  top: 38px;
  left: 38px;
  width: ${(props) => 7 + props.i}px;
  height: ${(props) => 7 + props.i}px;
  transform: rotate(${(props) => Math.random() * 300}deg);

  &:after {
    position: absolute;
    display: block;
    content: '';
    width: ${(props) => 7 + props.i}px;
    height: ${(props) => 7 + props.i}px;
    background: #fff;
    border-radius: 50%;
    transform-origin: ${(props) => `60px ${60 - props.i * 2}px`};
    animation: ${rotate} ${(props) => 3.5 + props.i / 5}s ease-in-out ${(props) => props.i / 5}s infinite;
    filter: blur(3px);    
  }
`;