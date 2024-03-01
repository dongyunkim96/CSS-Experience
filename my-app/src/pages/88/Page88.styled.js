import styled, { keyframes } from "styled-components";

const windAnimation = keyframes`
  0%, 22%, 49%, 62%, 81%, 100% {
    border-radius: 2px 14px 8px 8px / 20px 20px 8px 8px;
  }
  14%, 32%, 56%, 70%, 89% {
    border-radius: 14px 2px 8px 8px / 20px 20px 8px 8px;
  }
`;

const sizeAnimation = keyframes`
  0%, 22%, 49%, 62%, 81%, 100% {
    transform: scale(1, 1);
  }
  14%, 32%, 56%, 70%, 89% {
    border-radius: 14px 2px 8px 8px / 20px 20px 8px 8px;
  }
`;

const flickrAnimation = keyframes`
  0%, 22%, 49%, 62%, 81%, 100% {
    box-shadow: 0 0 20px 0 rgba(255, 202, 0, 0.7);
  }
  14%, 32%, 56%, 70%, 89% {
    box-shadow: 0 0 20px 0 rgba(255, 202, 9, 0.8);
  }
`;

export const Frame88 = styled.div`
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
  background: #2c3e50;
  color: #fff;
`;

export const Candle88 = styled.div`
  position: absolute;
  width: 60px;
  height: 100px;
  top: 160px;
  left: 170px;
  background: #fff;
  border-radius: 3px;
  box-shadow: inset -10px 0 0 0 #e0e5ff;

  .shadow {
    position: absolute;
    width: 120px;
    height: 8px;
    background: #1b233e;
    bottom: -8px;
    left: -30px;
    border-radius: 3px;
  }

  .wick {
    position: absolute;
    width: 4px;
    height: 15px;
    top: -15px;
    left: 28px;
    background: #ad88a9;
    border-radius: 2px 2px 0 0;
  }

  .flame {
    position: absolute;
    width: 16px;
    height: 26px;
    top: -32px;
    left: 22px;
    background: #ffad00;
    border-radius: 8px 8px 8px 8px / 20px 20px 8px 8px;
    animation: ${windAnimation} 15s ease-in-out infinite,
               ${sizeAnimation} 20s ease-in-out infinite,
               ${flickrAnimation} 5s ease-in-out infinite;
    transform-origin: 50% 100%;
  }
`;