import styled, { keyframes } from "styled-components";

const switchAnimation37 = keyframes`
  0%, 100% {
    transform: translate3d(0, 0, 0);
    box-shadow: 4px 8px 12px 0px rgba(0, 0, 0, 0.2);
  }
  33.33% {
    transform: translate3d(145px, 0, -45px);
    box-shadow: 2px 4px 6px 0px rgba(0, 0, 0, 0.2);
  }
  66.66% {
    transform: translate3d(-145px, 0, -45px);
    box-shadow: 2px 4px 6px 0px rgba(0, 0, 0, 0.2);
  }
`;

export const Frame37 = styled.div`
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
  background: #5a717b;
  color: #fff;
`;

export const Center37 = styled.div`
  position: absolute;
  height: 130px;
  width: 400px;
  top: 135px;
  left: 0;
  transform: perspective(60px);
  transform-style: preserve-3d;
`;

export const Card37 = styled.div`
  position: absolute;
  width: 140px;
  height: 130px;
  top: 0;
  left: 130px;
  background: #fff;
  border-radius: 3px;
  overflow: auto;
  box-shadow: 4px 8px 12px 0px rgba(0, 0, 0, 0.2);

  .top {
    width: 100%;
    height: 30px;
    background: #ff9800;
  }

  .content {
    margin-top: 20px;
    padding: 17px 14px;
  }

  .line {
    height: 4px;
    background: #e9e9e9;
    margin-top: 6px;
  }
`;

export const CardOne37 = styled(Card37)`
  animation: ${switchAnimation37} 5s ease-in-out infinite both;
`;

export const CardTwo37 = styled(Card37)`
  animation: ${switchAnimation37} 5s ease-in-out infinite both;
  animation-delay: -2.5s;
`;

export const CardThree37 = styled(Card37)`
  animation: ${switchAnimation37} 5s ease-in-out infinite both;
  animation-delay: -5s;
`;

