import styled, { keyframes, css } from 'styled-components';

export const Frame63 = styled.div`
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
  background: #121212;
  color: #fff;
`;

const RingAnimation = keyframes`
  0% {
    transform: scale(0) translate(200px, -200px);
    opacity: 0.4;
  }
  100% {
    transform: scale(3.5) translate(0, 0);
    opacity: 1;
  }
`;

export const Ring63 = styled.div`
  position: absolute;
  top: 100px;
  left: 100px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 2px dotted #c0c5c1;
  transform-origin: 50% 50%;
  ${({ num }) => {
    const delay = `${num / -5}s`;
    return css`
      animation: ${RingAnimation} 10s ease-in-out ${delay} infinite both;
      z-index: ${num}
    `;
  }}
`;