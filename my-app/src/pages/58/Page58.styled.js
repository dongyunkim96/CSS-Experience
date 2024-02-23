import styled, { keyframes } from 'styled-components';

const frameKeyframes = keyframes`
  0% {
    transform: rotateX(90deg) scale(0);
  }
  10% {
    transform: rotateX(90deg) scale(1.2);
  }
  15% {
    transform: rotateX(90deg) scale(0.9);
  }
  20%, 70% {
    transform: rotateX(90deg) scale(1);
  }
  80% {
    transform: rotateX(90deg) scale(1.2);
  }
  90%, 100% {
    transform: rotateX(90deg) scale(0);
  }
`;

const sliceKeyframes = (i, offset, radius, size, fill, border) => keyframes`
  0%, 19% {
    transform: translateY(${offset}px) rotateX(90deg);
    opacity: 1;
  }
  20% {
    transform: translateY(${offset}px) rotateX(90deg);
    opacity: 1;
    border: 2px solid #fff;
  }
  30% {
    transform: translateY(${offset + i * 4}px) rotateX(90deg);
    border: 2px solid #d33526;
  }
  35% {
    transform: translateY(${offset - i * 2}px) rotateX(90deg);
  }
  40% {
    transform: translateY(${offset + i}px) rotateX(90deg);
  }
  45% {
    transform: translateY(${offset - i * 0.5}px) rotateX(90deg);
  }
  50%, 65% {
    transform: translateY(${offset}px) rotateX(90deg);
  }
  70% {
    transform: translateY(${offset + i * 4}px) rotateX(90deg);
    border: 2px solid #d33526;
  }
  80% {
    transform: translateY(0) rotateX(90deg);
    opacity: 1;
    border: 2px solid #fff;
  }
  81%, 100% {
    transform: translateY(0) rotateX(90deg);
    opacity: 0;
  }
`;

export const Frame58 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  margin-top: -200px;
  margin-left: -200px;
  border-radius: 2px;
  box-shadow: 1px 2px 10px 0 rgba(0, 0, 0, 0.3);
  overflow: hidden;
  color: white;
  font-size: 12px;
  background: #d33526;
  animation: ${frameKeyframes} 6s ease-in-out infinite;
`;

export const Center58 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  perspective: 350px;
`;

export const Form58 = styled.div`
  width: ${(props) => props.radius}px;
  height: ${(props) => props.radius}px;
  transform-style: preserve-3d;
  transform: rotateX(-25deg);
  transition: all 1s ease-in-out;
`;

export const Slice58 = styled.div`
  box-sizing: border-box;
  position: absolute;
  border-radius: 50%;
  background: ${(props) => props.fill};
  border: 2px solid ${(props) => props.border};
  opacity: 1;
  transition: all 1s ease-in-out;
`;

export const StyledSlice58 = styled(Slice58)`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  left: ${(props) => props.left}px;
  top: ${(props) => props.top}px;
  transform: ${(props) => `translateY(${props.offset}px) rotateX(90deg)`};
  animation: ${(props) =>
    sliceKeyframes(props.i, props.offset, props.radius, props.size, props.fill, props.border)}
    ${(props) => props.speed} ease-in-out infinite;
`;
