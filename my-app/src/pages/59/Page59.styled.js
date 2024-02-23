import styled, { keyframes } from 'styled-components';

export const Frame59 = styled.div`
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
`;

export const BackgroundImg59 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 400px;
  background: url("https://100dayscss.com/codepen/slice-image-1.jpg") center no-repeat;
  background-size: cover;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
`;

const appear = keyframes`
  0% {
    transform: translateY(40px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const Slice59 = styled.div`
  width: 40px;
  height: 100%;
  z-index: 2;
  box-sizing: border-box;
  background: url("https://100dayscss.com/codepen/slice-image-2.jpg") no-repeat;
  opacity: 0;
  background-size: 400px 400px;
  transition: all 1s ease-in-out;
  animation: ${appear} 3s ease-in-out forwards;

  &:hover {
    transform: translateY(0) !important;
    opacity: 1;
  }
  
  &:nth-child(even) {
    transform: translateY(40px);
  }

  &:nth-child(odd) {
    transform: translateY(-40px);
  }

  &:nth-child(1) {
    background-position: 0px 0;
  }

  &:nth-child(2) {
    background-position: -40px 0;
  }

  &:nth-child(3) {
    background-position: -80px 0;
  }

  &:nth-child(4) {
    background-position: -120px 0;
  }

  &:nth-child(5) {
    background-position: -160px 0;
  }

  &:nth-child(6) {
    background-position: -200px 0;
  }

  &:nth-child(7) {
    background-position: -240px 0;
  }

  &:nth-child(8) {
    background-position: -280px 0;
  }

  &:nth-child(9) {
    background-position: -320px 0;
  }

  &:nth-child(10) {
    background-position: -360px 0;
  }
`;

export const Text59 = styled.div`
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.519);
`;

export const HOne59 = styled.h1`
  color: white;
  opacity: 1;
  transition: all 0.8s linear;
  margin: 0;
  padding: 0;
  font-size: 60px;
  top: 0;

  ${BackgroundImg59}:hover & {
    transform: translateX(-50%);
    opacity: 0;
  }
`;

export const HTwo59 = styled.h2`
  color: white;
  opacity: 1;
  transition: all 0.8s linear;
  margin: 0;
  padding: 0;
  font-size: 40px;
  transform: translateY(-15px);

  ${BackgroundImg59}:hover & {
    transform: translateX(50%) translateY(-15px);
    opacity: 0;
  }
`;