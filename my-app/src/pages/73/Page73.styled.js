import styled, { keyframes } from "styled-components";

export const Frame73 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  margin-top: -200px;
  margin-left: -200px;
  border-radius: 2px;
  box-shadow: 1px 2px 10px 0 rgba(0, 0, 0, 0.13);
  overflow: hidden;
  background: #f39c12;
  color: #fff;
`;

export const Center73 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Carousel73 = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  font-size: 30px;
  line-height: 45px;
  height: 45px;
`;

export const Pre73 = styled.div`
  position: relative;
  top: 0;
  right: 56%;
  margin-right: 10px;
  height: 45px;
  text-shadow: 2px 2px 2px #e67e22;
`;

export const ChangeOuter73 = styled.div`
  position: absolute;
  top: 0;
  left: 46%;
  text-align: left;
  height: 45px;
  overflow: hidden;
`;

const ChangeInnerAnimation = keyframes`
  0%, 20% {
    transform: translateY(0);
  }
  25%, 45% {
    transform: translateY(-45px);
  }
  50%, 70% {
    transform: translateY(-90px);
  }
  75%, 95% {
    transform: translateY(-135px);
  }
  100% {
    transform: translateY(-180px);
  }
`;

export const ChangeInner73 = styled.div`
  position: relative;
  animation: ${ChangeInnerAnimation} 8s ease-in-out infinite;
`;

export const Element73 = styled.div`
  display: block;
  font-weight: 700;
  text-shadow: 2px 2px 2px #e67e22;
`;