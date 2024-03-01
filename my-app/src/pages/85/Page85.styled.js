import styled, { keyframes } from 'styled-components';

const waveAnimation = (offset) => keyframes`
  0%, 100% {
    transform: translateY(${offset * -1}px);
  }
  50% {
    transform: translateY(${offset}px);
  }
`;

export const Frame85 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  margin-top: -200px;
  margin-left: -200px;
  border-radius: 2px;
  box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  background: #9B59B6;
  color: #fff;
`;

export const Wave85 = styled.div`
  position: absolute;
  height: 2px;
  width: 400px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Dot85 = styled.div`
  float: left;
  width: 2px;
  height: 2px;
  border-radius: 1px;
  background: #fff;
  animation: ${({ offset }) => waveAnimation(offset)} 3s ease-in-out infinite;
`;