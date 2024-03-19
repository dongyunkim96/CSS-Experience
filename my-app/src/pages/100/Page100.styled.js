import styled, { keyframes } from "styled-components";

const flicker = keyframes`
  35%, 37%, 39%, 41%, 100% {
    background: #F1F4F5;
    box-shadow: 0px 0px 10px 0px #f1f4f5;
  }

  0%, 34%, 36%, 38%, 40% {
    background: #1a1e24;
    box-shadow: 0px 0px 6px 0px #1a1e24;
  }
`;

export const Frame100 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 400px;
  border-radius: 2px;
  box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  background: #272c34;
  color: #fff;
`;

export const Word100 = styled.div`
  position: absolute;
  height: 120px;
  width: 400px;
  top: 140px;
  left: 0;
`;

export const Light100 = styled.div`
  position: absolute;
  background: #1a1e24;
  box-shadow: 0px 0px 6px 0px #1a1e24;
  border-radius: 3px;
  animation: ${flicker} 6s ease-in-out infinite alternate;
`;

export const EE100 = styled.div`
  position: absolute;
  width: 60px;
  height: 120px;
  top: 0;
  left: 68px;
`;

export const NN100 = styled.div`
  position: absolute;
  width: 85px;
  height: 120px;
  top: 0;
  left: 162px;
`;

export const DD100 = styled.div`
  position: absolute;
  width: 72px;
  height: 120px;
  top: 0;
  left: 274px;
`;

export const DiagonalLight = styled(Light100)`
  width: 6px;
  height: 140px;
  transform: rotate(45deg);
  transform-origin: bottom left;
`;

export const Circle100 = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 80px;
  height: 80px;
  top: 20px;
  right: -10px;
  border: 6px solid #1a1e24;
  border-radius: 50%;
  border-color: #1a1e25 #1a1e24 transparent transparent;
  box-shadow: 0px 0px 10px 0px #1a1e24, inset 0px 0px 10px 0x #f1f4f5;
  transform: rotate(45deg);
  animation: ${flicker} 6s ease-in-out infinite alternate;
`;

export const Dot100 = styled.div`
  position: absolute;
  width: 15px;
  height: 6px;
  border-radius: 50%;
  background: #1a1e24;
  box-shadow: 0px 0px 10px 0px #1a1e24;
  animation: ${flicker} 6s ease-in-out infinite alternate;
`;