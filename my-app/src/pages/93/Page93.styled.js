import styled, { keyframes } from "styled-components";

const rotate93 = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Frame93 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  margin-top: -200px;
  margin-left: -200px;
  border-radius: 2px;
  box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  background: #f57e15;
  color: #fff;
`;

export const Lock93 = styled.div`
  position: absolute;
  box-sizing: border-box;
  height: 240px;
  width: 160px;
  top: 75px;
  left: 120px;
  padding-top: 80px;
  cursor: pointer;

  &:hover .ring {
    animation: ${rotate93} 1.5s eae-in-out infinite;
  }
`;

export const Hanger93 = styled.div`
  position: absolute;
  width: 120px;
  height: 120px;
  left: 20px;
  top: 0;
  border-radius: 60px 60px 0 0;
  background: #d1dde5;
  box-shadow: inset 4px 4px 1px 0 rgba(255, 255, 255, 0.8), inset -3px -2px 1px 0 rgba(0, 0, 0, 0.3), 4px 8px 12px 0 rgba(0, 0, 0, 0.2);
`;

export const Inside93 = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  top: 10px;
  left: 10px;
  background: #f57e15;
  border-radius: 50px 50px 0 0;
  box-shadow: 4px 4px 1px 0 rgba(255, 255, 255, 0.8), -3px -2px 1px 0 rgba(0, 0, 0, 0.3), inset 4px 8px 12px 0 rgba(0, 0, 0, 0.2);
`;

export const Base93 = styled.div`
  position: relative;
  width: 160px;
  height: 160px;
  background: #d1dde5;
  border-radius: 50%;
  box-shadow: 4px 8px 12px 0 rgba(0, 0, 0, 0.2), inset 2px 4px 1px 0 rgba(255, 255, 255, 0.8), inset -1px -2px 1px 0 rgba(0, 0, 0, 0.3);
`;

export const Ring93 = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  top: 5px; 
  left: 5px;
  background: #333;
  border-radius: 50%;
`;

export const Line93 = styled.div`
  position: absolute;
  width: 2px;
  height: 10px;
  background: #ccc;
  top: 70px;
  left: 74px;

  &:nth-child(5n + 1) {
    width: 2px;
    height: 18px;
    top: 66px;
    left: 74px;
    background: #fff;
  }
`;

export const Number93 = styled.div`
  position: absolute;
  width: 20px;
  height: 14px;
  top: 68px;
  left: 65px;
  font-size: 13px;
  font-weight: 600;
  line-height: 14px;
  text-align: center;

  &.number-0 {
    transform: rotate(0deg) translateY(-40px);
  }

  &.number-1 {
    transform: rotate(45deg) translateY(-40px);
  }

  &.number-2 {
    transform: rotate(90deg) translateY(-40px);
  }

  &.number-3 {
    transform: rotate(135deg) translateY(-40px);
  }

  &.number-4 {
    transform: rotate(180deg) translateY(-40px);
  }

  &.number-5 {
    transform: rotate(225deg) translateY(-40px);
  }

  &.number-6 {
    transform: rotate(270deg) translateY(-40px);
  }

  &.number-7 {
    transform: rotate(315deg) translateY(-40px);
  }
`;

export const Knob93 = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  top: 55px;
  left: 55px;
  background: #e7ecf0;
  border-radius: 50%;
  box-shadow: inset 2px 4px 1px 0 rgba(255, 255, 255, 0.8), inset -1px -2px 1px 0 rgba(0, 0, 0, 0.2);
`;