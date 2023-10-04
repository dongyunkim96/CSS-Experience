import styled, { keyframes } from 'styled-components';

const appear = keyframes`
  0% {
    opacity: 0;
    transform: translateY(0);
  }
  100% {
    opacity: 1;
    transform: translateY(15px); 
  }
`;

const disappear = keyframes`
  0% {
    opacity: 1;
    transform: translateY(15px);
  }
  99% {
    opacity: 0;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(500px);
  }
`;

export const Container = styled.div`
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
  color: #333;
  font-family: 'Open Sans', Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #4cb6de;
`;

export const Center = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
`;

export const MainText = styled.div`
  color: white;
  font-size: 24px;
  line-height: 35px;
  font-weight: 500;
  font-family: Arial;
  z-index: 10;
  position: relative;

  &::before {
    content: '„';
    position: absolute;
    color: #6ac2e3;
    font-size: 250px;
    top: -100px;
    left: -24px;
    z-index: -1;
  }
`;

export const ToolTipText = styled.span`
  background-color: #286f8a;
  padding: 5px 10px;
  cursor: pointer;
  position: relative;

  &::before {
    width: 50px;
    height: 30px;
    content: ' ';
    position: absolute;
  }

  &:hover .tooltip {
    opacity: 1;
    animation: ${appear} .6s forwards;
  }
`;

export const Tooltip = styled.div`
  position: absolute;
  background-color: #286f8a;
  height: 150px;
  width: 250px;
  top: -95px;
  left: 10px;
  cursor: unset;
  opacity: 0;
  transition: .6s;
  transform: translateY(-500px);
  animation: ${disappear} .6s forwards;
`;

export const Header = styled.div`
  background-color: white;
  height: 34.5px;
  color: #286f8a;
  font-size: 16px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding-left: 20px;

  p {
    margin-top: 21px;
    margin-left: 10px;
  }

  span {
    margin-left: 5px;
    transition: .2s;
  }
  span:hover {
    transform: scale(1.1);
  }
`;

export const Content = styled.div`
  font-size: 16px;
  box-sizing: border-box;
  padding: 12px 20px;
  line-height: 24px;
`;

export const Triangle = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-top: 20px solid transparent;
  left: 130px;
  top: 122px;
`;