import styled, { keyframes } from 'styled-components';

export const Frame86 = styled.div`
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
  background: #34495e;
  color: #fff;
`;

export const Cradle86 = styled.div`
  position: absolute;
  width: 200px;
  height: 40px;
  top: 140px;
  left: 100px;
  padding-top: 100px;

  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 200px;
    height: 6px;
    top: 0;
    left: 0;
    border-radius: 3px;
    background: #bdc4c7;
  }
`;

export const bounce1 = keyframes`
  0%, 50% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(30deg);
  }
`;

export const bounce5 = keyframes`
  0%, 50% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(-30deg);
  }
`;

export const BallOne86 = styled.div`
  position: relative;
  float: left;
  width: 40px;
  height: 40px;
  background: #fff;
  border-radius: 50%;
  transform-origin: 50% -100px;
  animation: ${bounce1} 0.8s ease-out infinite alternate;

  &::before {
    content: '';
    display: block;
    position: absolute;
    height: 100px;
    width: 1px;
    top: -100px;
    left: 19px;
    background: #bdc3c7;
  }
`;

export const Ball86 = styled.div`
  position: relative;
  float: left;
  width: 40px;
  height: 40px;
  background: #fff;
  border-radius: 50%;
  transform-origin: 50% -100px;

  &::before {
    content: '';
    display: block;
    position: absolute;
    height: 100px;
    width: 1px;
    top: -100px;
    left: 19px;
    background: #bdc3c7;
  }
`;

export const BallFive86 = styled.div`
  position: relative;
  float: left;
  width: 40px;
  height: 40px;
  background: #fff;
  border-radius: 50%;
  transform-origin: 50% -100px;
  animation: ${bounce5} 0.8s ease-out .8s infinite alternate;

  &::before {
    content: '';
    display: block;
    position: absolute;
    height: 100px;
    width: 1px;
    top: -100px;
    left: 19px;
    background: #bdc3c7;
  }
`;