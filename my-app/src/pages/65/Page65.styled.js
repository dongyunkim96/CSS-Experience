import styled, { keyframes } from 'styled-components';

export const Frame65 = styled.div`
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
  background: #2091dd;
  color: #fff;
`;

const spinAnimation = (angle) => keyframes`
  50% {
    transform: rotate(${angle}deg);
    height: 2.5rem;
    border-radius: 50%;
  }
`;

export const Center65 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const Square65 = styled.div`
  width: 20rem;
  height: 20rem;
  border: 1px solid white;
  position: absolute;
  animation: ${({ angle }) => spinAnimation(angle)} 3s infinite;
`;