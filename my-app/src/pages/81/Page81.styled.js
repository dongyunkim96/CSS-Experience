import styled, { keyframes } from 'styled-components';

const speed = '5s';
const ease = 'cubic-bezier(0.22, 1, 0.38, 1)';

const moveAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-460px);
  }
`;

const ballAnimation = keyframes`
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-190px) scale(1.1);
  }
`;

const gravity = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(50px);
  }
`;

export const Frame81 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  margin-top: -200px;
  margin-left: -200px;
  border-radius: 2px;
  box-shadow: 1px 2px 10px 0 rgba(0, 0, 0, 0.25);
  overflow: hidden;
  background: #9b59b6;
  color: #fff;
`;

export const Floor81 = styled.div`
  position: absolute;
  width: 400px;
  height: 130px;
  left: 0;
  bottom: 0;
  background: #49627c;
`;

export const BallMove81 = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  top: 230px;
  left: 400px;
  animation: ${moveAnimation} ${speed} ${ease} infinite;

  .ball {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #fff;
    animation: ${ballAnimation} ${speed} ${ease} infinite, ${gravity} ${speed} ${ease} infinite;
  }
`;