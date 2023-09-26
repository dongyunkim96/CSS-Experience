import styled, { keyframes } from 'styled-components';

const bezier = 'cubic-bezier(.21,.98,.6,.99)';

export const Frame = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  margin-top: -200px;
  margin-left: -200px;
  border-radius: 2px;
  box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.3);
  background: #E56262;
  color: #fff;
`;

export const Center = styled.div`
  position: absolute;
  height: 220px;
  width: 220px;
  top: 90px;
  left: 90px;
`;

const jumpAnim1 = keyframes`
  0%, 70% {
    box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.2);
    transform: scale(0);
  }
  100% {
    box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
    transform: scale(1);
  }
`;

const jumpAnim2 = keyframes`
  0%, 40% {
    box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.2);
    transform: scale(0);
  }
  100% {
    box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
    transform: scale(1);
  }
`;

const jumpAnim3 = keyframes`
  0%, 10% {
    box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.2);
    transform: scale(0);
  }
  100% {
    box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
    transform: scale(1);
  }
`;

export const Dot1 = styled.div`
  position: absolute;
  z-index: 3;
  width: 30px;
  height: 30px;
  top: 95px;
  left: 95px;
  background: #fff;
  border-radius: 50%;
  animation-fill-mode: both;
  animation: ${jumpAnim1} 2s ${bezier} infinite alternate;
`;

export const Dot2 = styled.div`
  position: absolute;
  z-index: 2;
  width: 60px;
  height: 60px;
  top: 80px;
  left: 80px;
  background: #fff;
  border-radius: 50%;
  animation-fill-mode: both;
  animation: ${jumpAnim2} 2s ${bezier} infinite alternate;
`;

export const Dot3 = styled.div`
  position: absolute;
  z-index: 1;
  width: 90px;
  height: 90px;
  top: 65px;
  left: 65px;
  background: #fff;
  border-radius: 50%;
  animation-fill-mode: both;
  animation: ${jumpAnim3} 2s ${bezier} infinite alternate;
`;
