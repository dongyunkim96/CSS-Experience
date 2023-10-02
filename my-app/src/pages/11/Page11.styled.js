import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0.75;
  }
  100% {
    opacity: 1;
  }
`;

const legSwing = keyframes`
 0%, 100% {
    transform: rotate(-22deg);
 }
 50% {
    transform: rotate(40deg);
 }
`;

const shoeTurn = keyframes`
  0%, 100% {
    transform: rotate(-10deg) translateY(-5px) translateX(10px);
  }
  25% {
    transform: rotate(0deg) translateY(0px) translateX(0);
  }
  50% {
    transform: rotate(10deg) translateY(-10px) translateX(10px);
  }
  75% {
    transform: rotate(0deg) translateY(-30px) translateX(0);
  }
`;

export const Frame = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 500px;
  margin-top: -200px;
  margin-left: -200px;
  border-radius: 2px;
  box-shadow: 1px 2px 10px 0 rgba(0, 0, 0, 0.3);
  overflow: hidden;
  background: radial-gradient(ellipse at center, rgba(246, 232, 215, 1) 0%, rgba(218, 190, 155, 1) 100%);
`;

export const Floor = styled.div`
  position: absolute;
  top: 240px;
  left: 0;
  right: 0;
  bottom: 0;
  background: #232323;
`;

export const InvisibleMan = styled.div`
  animation: ${fadeIn} 8s ease-in-out;
  animation-fill-mode: both;
`;

export const Leg = styled.div`
  position: absolute;
  top: 0px;
  left: 147px;
  width: 151px;
  height: 245px;
  transform-origin: 50% 0;
`;

export const Shoe = styled.div`
  position: absolute;
  width: 151px;
  height: 128px;
  bottom: 0;
  left: 0;
  background: url('https://100dayscss.com/codepen/doc-martens.svg') center center no-repeat;
  transform-origin: 0 95%;
`;

export const LeftLeg = styled(Leg)`
  animation: ${legSwing} 2s ease-in-out infinite;
  ${Shoe} {
    animation: ${shoeTurn} 2s ease-in-out infinite;
  }
`;

export const RightLeg = styled(Leg)`
  animation: ${legSwing} 2s ease-in-out 1s infinite;
  ${Shoe} {
    animation: ${shoeTurn} 2s ease-in-out 1s infinite;
  } 
`;