import styled, { keyframes } from 'styled-components';

export const Frame71 = styled.div`
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
  background: #333333;
  color: #fff;
`;

const ScreenAnimation = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`;

export const Screen71 = styled.div`
  width: 100%;
  height: 55%;
  font-size: 48px;
  font-weight: 600;
  text-shadow: 0px 0px 12px rgba(255, 255, 255, 0.6);
  display: grid;
  place-items: center;
  animation: ${ScreenAnimation} 1s ease infinite;
`;

export const Keyboard71 = styled.fieldset`
  border: 0;
  border-top: 2px solid #888;
  width: 95%;
  height: 40%;
  background: #666666;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  align-items: center;
  justify-content: space-evenly;
`;

export const RadioButton71 = styled.input`
  display: none;
`;

export const KeyLabel71 = styled.label`
  padding: 8px;
  margin: 1px;
  border-radius: 50%;
  text-align: center;
  &:hover {
    background: #999;
    cursor: pointer;
  }
`;