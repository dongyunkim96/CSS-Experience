import styled, { keyframes } from "styled-components";

const flashAnimation = keyframes`
  0% {
    transform: rotate(-44deg) translateX(-30px);
  }
  10%, 100% {
    transform: rotate(-44deg) translateX(30px);
  }
`;

export const Frame87 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  margin-top: -200px;
  margin-left: -200px;
  border-radius: 2px;
  box-shadow: 1px 2xp 10px 0px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  background: #ffc902;
  color: #fff;
`;

export const RubyContainer87 = styled.div`
  position: absolute;
  width: 192px;
  height: 126px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
`;

export const BottomLeft87 = styled.div`
  position: absolute;
  z-index: 2;
  width: 0;
  height: 0;
  left: 0;
  bottom: 0;
  border-style: solid;
  border-width: 84px 0px 0 96px;
  border-color: #890505 transparent transparent transparent;
`;

export const BottomRight87 = styled.div`
  position: absolute;
  z-index: 2;
  width: 0;
  height: 0;
  right: 0;
  bottom: 0;
  border-style: solid;
  border-width: 84px 96px 0 0px;
  border-color: #C81718 transparent transparent transparent;
`;

export const BottomMiddle87 = styled.div`
  position: absolute;
  z-index: 3;
  width: 0;
  height: 0;
  left: 54px;
  bottom: 0;
  border-style: solid;
  border-width: 84px 42px 0 42px;
  border-color: #a51012 transparent transparent transparent;
`;

export const TopLeftLeft87 = styled.div`
  position: absolute;
  z-index: 2;
  width: 0;
  height: 0;
  left: 0;
  top: 0;
  border-style: solid;
  border-width: 0 22px 42px 32px;
  border-color: transparent transparent #9e0707 transparent;
`;

export const TopLeft87 = styled.div`
  position: absolute;
  z-index: 1;
  width: 64px;
  height: 42px;
  top: 0;
  left: 32px;
  background: #dc2323;
`;

export const TopMiddle87 = styled.div`
  position: absolute;
  z-index: 2;
  width: 0;
  height: 0;
  top: 0;
  left: 54px;
  border-style: solid;
  border-width: 0 42px 42px 42px;
  border-color: transparent transparent #bc0e0e transparent;
`;

export const TopRight87 = styled.div`
  position: absolute;
  z-index: 1;
  width: 64px;
  height: 42px;
  top: 0;
  right: 32px;
  background: #f58181;
  overflow: hidden;
`;

export const Flash87 = styled.div`
  position: absolute;
  width: 4px;
  height: 80px;
  top: -40px;
  left: 30px;
  background: #ffdfdf;
  transform: rotate(-44deg) translateX(-30px);
  animation: ${flashAnimation} 3s linear infinite both;
  box-shadow: 0 0 5px 0 #ffdfdf;
`;

export const TopRightRight87 = styled.div`
  position: absolute;
  z-index: 2;
  width: 0;
  height: 0;
  top: 0;
  right: 0;
  border-style: solid;
  border-width: 0 32px 42px 22px;
  border-color: transparent transparent #b90b0c transparent;
`;