import styled, { keyframes } from "styled-components";

export const Container44 = styled.div`
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
  background: #222;
  color: #fff;
  cursor: pointer;

  &:hover .rect {
    animation-play-state: paused;
  }
`;

const rotateAnimation44 = keyframes`
  from {
    transform: rotate(0deg) translate3d(0, 0, 0);
  }
  to {
    transform: rotate(360deg) translate3d(0, 0, 0);
  }
`;

export const Rect44 = styled.div`
  box-sizing: border-box;
  position: absolute;
  border: 1px solid #888;
  background: #222;
`;

export const RectItem44 = styled(Rect44)`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  border-color: ${(props) => props.color};
  z-index: ${(props) =>props.index};
  animation: ${rotateAnimation44} 2s ease-in-out ${(props) => props.delay}s alternate infinite;
`;