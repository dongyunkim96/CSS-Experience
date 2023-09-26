import styled, { keyframes } from 'styled-components';

export const animateLine1 = keyframes`
  0% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }
  50% {
    transform: translate3d(0, 22px, 0) rotate(0);
  }
  100% {
    transform: translate3d(0, 22px, 0) rotate(45deg);
  }
`;

export const animateLine2 = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
`;

export const animateLine3 = keyframes`
  0% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }
  50% {
    transform: translate3d(0, -22px, 0) rotate(0);
  }
  100% {
    transform: translate3d(0, -22px, 0) rotate(135deg);
  }
`;

export const animateLine1Rev = keyframes`
  0% {
    transform: translate3d(0, 22px, 0) rotate(45deg);
  }
  50% {
    transform: translate3d(0, 22px, 0) rotate(0);
  }
  100% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }
`;

export const animateLine2Rev = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

export const animateLine3Rev = keyframes`
  0% {
    transform: translate3d(0, -22px, 0) rotate(135deg);
  }
  50% {
    transform: translate3d(0, -22px, 0) rotate(0);
  }
  100% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }
`;

export const Frame = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  margin-top: -200px;
  margin-left: -200px;
  border-radius: 2px;
  box-shadow: 1px 2px 10px 0 rgba(0, 0, 0, 0.3);
  background: #3faf82;
  color: #fff;
`;

export const Center = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const MenuIcon = styled.div`
  width: 80px;
  height: 48px;
  cursor: pointer;
  z-index: 50;

  .line-1,
  .line-2,
  .line-3 {
    height: 8px;
    width: 100%;
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.3);
    transition: background-color 0.2s ease-in-out;
  }

  .line-1 {
    animation: ${({ isActive }) => (isActive ? animateLine1 : animateLine1Rev)} 0.7s ease-in-out;
  }

  .line-2 {
    margin: 14px 0;
    animation: ${({ isActive }) => (isActive ? animateLine2 : animateLine2Rev)} 0.7s ease-in-out;
  }

  .line-3 {
    animation: ${({ isActive }) => (isActive ? animateLine3 : animateLine3Rev)} 0.7s ease-in-out;
  }

  &:hover {
    .line-1,
    .line-2,
    .line-3 {
      background-color: #fff;
    }
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 8px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.3);
  transition: background-color 0.2s ease-in-out;
`;

export const AnimatedLine = styled(Line)`
  animation: ${({ isActive }) => (isActive ? animateLine1 : animateLine1Rev)} 0.7s ease-in-out;
`;

export const NoAnimation = styled(Line)`
  -webkit-animation: none !important;
  animation: none !important;
`;

export const Content = styled.div`
  margin: 0 auto;
  border-radius: 2px;
  box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.3);
`;