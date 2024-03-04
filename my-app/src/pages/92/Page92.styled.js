import styled, { keyframes } from "styled-components";

export const Frame92 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  margin-top: -200px;
  margin-left: -200px;
  border-radius: 2px;
  box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  background: #27ae60;
`;

const BallXAnimation = keyframes`
  to {
    transform: translate(-195px, 195px);
  }
`;

const BallX2Animation = keyframes`
  to {
    transform: translate(195px, -195px);
  }
`;

const BallYAnimation = keyframes`
  to {
    transform: translate(395px, 195px);
  }
`;

const BallY2Animation = keyframes`
  to {
    transform: translate(195px, 395px);
  }
`;

export const Ball92 = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #fff;
`;

export const BallX92 = styled(Ball92)`
  top: 0;
  left: 195px;
  animation: ${BallXAnimation} 1.5s linear alternate both infinite;
`;

export const BallX292 = styled(Ball92)`
  top: 195px;
  left: 0;
  animation: ${BallX2Animation} 1.5s linear alternate both infinite;
`;

export const BallY92 = styled(Ball92)`
  top: 0;
  left: 0;
  animation: ${BallYAnimation} 3s linear alternate both infinite;
`;

export const BallY292 = styled(Ball92)`
  top: 0;
  left: 0;
  animation: ${BallY2Animation} 3s linear alternate both infinite;
`;

export const TopHalf92 = styled.div`
  width: 200px;
  height: 200px;
  -webkit-box-reflect: right 0;
`;

export const BottomHalf92 = styled.div`
  width: 400px;
  height: 200px;
  -webkit-box-reflect: below 0;
`;