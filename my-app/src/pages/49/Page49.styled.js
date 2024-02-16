import styled, { keyframes } from 'styled-components';

const pulseAnimation = keyframes`
  from {
    opacity: 1;
    border-width: 1px;
    width: 20px;
    height: 20px;
    transform: translate(0px, 0px);
  }
  to {
    opacity: 0;
    border-width: 4px;
    width: 60px;
    height: 60px;
    transform: translate(-20px, -20px);
  }
`;

export const Frame49 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  transform: translate(-50%, -50%);
  border-radius: 7px;
  box-shadow: 4px 8px 16px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background: #121212;
`;

export const Dot49 = styled.div`
  pointer-events: none;
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  width: 20px;
  height: 20px;
  background: #fcb9aa;
  border-radius: 1000px;
  transition: all 100ms;
  transform: translate(-50%, -50%);
`;

export const Pulse49 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  border: 4px solid #fcb9aa;
  width: 20px;
  height: 20px;
  border-radius: 1000px;
  animation: ${pulseAnimation} ease-out 1.3s infinite;
`;