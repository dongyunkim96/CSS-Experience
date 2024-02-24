import styled, { keyframes } from 'styled-components';

const rotateTopAnimation = keyframes`
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(360deg);
  }
`;

const rotateTopShadowAnimation = keyframes`
  from {
    transform: translateZ(-150px) translateX(120px) translateY(-40px) scale(0.9) rotateZ(0deg);
  }
  to {
    transform: translateZ(-150px) translateX(120px) translateY(-40px) scale(0.9) rotateZ(360deg);
  }
`;

export const Frame67 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  transform: translate(-50%, -50%);
  border-radius: 2px;
  box-shadow: 1px 2px 10px 0 rgba(0, 0, 0, 0.3);
  overflow: hidden;
  background: #f5ce51;
  color: #fff;
  perspective: 350px;
`;

export const Parasol67 = styled.div`
  position: absolute;
  top: 8%;
  left: 13%;
  transform-style: preserve-3d;
  transform: rotateX(70deg) rotateY(-15deg);
`;

export const ShadowPola67 = styled.div`
  position: absolute;
  z-index: 1;
  width: 6px;
  height: 50px;
  top: 100px;
  left: 97px;
  background: #ab9038;
  transform-origin: 50% 0%;
  transform: translateZ(-150px) rotateZ(-90deg) rotateZ(-15deg);
  box-shadow: 0 0 2px 1px #ab9038;
  border-radius: 2px;
`;

export const Pola67 = styled.div`
  position: absolute;
  z-index: 2;
  width: 6px;
  height: 150px;
  top: 100px;
  left: 97px;
  background: black;
  transform-origin: 50% 0;
  transform: translateZ(-1px) rotateX(-90deg);
  border-radius: 2px;
`;

export const ShadowTop67 = styled.div`
  position: absolute;
  z-index: -1;
  width: 200px;
  height: 200px;
  top: 0;
  left: 0;
  border-radius: 50%;
  transform: translateZ(-150px) translateX(120px) translateY(-40px) scale(0.9);
  animation: ${rotateTopShadowAnimation} 5s linear infinite;
`;

export const Triangle67 = styled.div`
  position: absolute;
  top: 100px;
  left: 77px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 25px 98px 25px;
  border-color: transparent transparent #ab9038 transparent;
  transform-origin: 50% 0;
  box-shadow: 0 0 4px 2px #ab9038;
`;

export const Top67 = styled.div`
  position: relative;
  z-index: 3;
  width: 200px;
  height: 200px;
  transform-style: preserve-3d;
  animation: ${rotateTopAnimation} 5s linear infinite;
`;

export const TriangleTop67 = styled(Triangle67)`
  transform: rotateZ(${props => props.rotation}deg) rotateX(-24deg);
  border-color: transparent transparent white transparent;
`;

export const TriangleRed67 = styled(Triangle67)`
  transform: rotateZ(${props => props.rotation}deg) rotateX(-24deg);
  border-color: transparent transparent #d70808 transparent;
`;

export const TriangleShadow67 = styled(Triangle67)`
  transform: rotateZ(${props => props.rotation}deg) rotateX(-24deg);
  border-color: transparent transparent grey transparent;
`;