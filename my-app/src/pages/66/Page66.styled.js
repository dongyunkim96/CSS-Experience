import styled, { keyframes } from 'styled-components';

const sparkAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(0) scaleY(0);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(-50px) scaleY(1);
  }
`;

export const Frame66 = styled.div`
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
  background: #fff;
  color: #333;
`;

export const Center66 = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #5a717b;
`;

export const CheckboxWrapper66 = styled.div`
  z-index: 5;
  position: absolute;
  width: 40px;
  height: 40px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const ToggleInput66 = styled.input`
  display: none;

  &:checked + .toggle {
    border-width: 14px;
    background-color: #5fd17a;

    & ~ .sparkles .sparkle {
        animation: ${sparkAnimation} 0.5s ease-in-out;
    }
  }
`;

export const ToggleLabel66 = styled.label`
  position: relative;
  z-index: 5;
  box-sizing: border-box;
  cursor: pointer;
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: transparent;
  border-width: 2px;
  border-style: solid;
  border-color: #fff;
  transition: all 0.3s ease-in-out;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.2),
    inset 2px 2px 4px 0 rgba(0, 0, 0, 0.2);
`;

export const SparklesContainer66 = styled.div`
  z-index: 2;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 50%;
`;

export const Sparkle66 = styled.div`
  position: absolute;
  width: 2px;
  height: 20px;
  background-color: #fff;
  top: 25px;
  left: 19px;
  transition: none;
`;

export const SparkleWrapper66 = styled.div`
  transform: translateY(-50px) scaleY(0);
  animation: ${sparkAnimation} 2s ease-in-out;
`;