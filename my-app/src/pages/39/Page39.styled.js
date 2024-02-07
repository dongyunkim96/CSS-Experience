import styled, { css, keyframes } from "styled-components";

export const lineTopOpen39 = keyframes`
  0% {
    transform: translate3d(0, 0, 0) scaleY(1) scaleX(1);
  }
  20% {
    transform: translate3d(0, 3px, 0) scaleY(1) scaleX(1);
  }
  40% {
    transform: translate3d(0, -20px, 0) scaleY(0.5) scaleX(1);
  }
  100% {
    transform: translate3d(0, -20px, 0) scaleY(0.5) scaleX(6);
  }
`;

export const lineTopClose39 = keyframes`
  0% {
    transform: translate3d(0, -20px, 0) scaleY(0.5) scaleX(6);
  }
  60% {
    transform: translate3d(0, -20px, 0) scaleY(0.5) scaleX(1);
  }
  100% {
    transform: translate3d(0, 0, 0) scaleY(1) scaleX(1);
  }
`;

export const lineBottomOpen39 = keyframes`
  0% {
    transform: translate3d(0, 0, 0) scaleY(1) scaleX(1);
  }
  20% {
    transform: translate3d(0, 3px, 0) scaleY(1) scaleX(1);
  }
  40% {
    transform: translate3d(0, 20px, 0) scaleY(0.5) scaleX(1);
  }
  100% {
    transform: translate3d(0, 20px, 0) scaleY(0.5) scaleX(6);
  }
`;

export const lineBottomClose39 = keyframes`
  0% {
    transform: translate3d(0, 20px, 0) scaleY(0.5) scaleX(6);
  }
  60% {
    transform: translate3d(0, 20px, 0) scaleY(0.5) scaleX(1);
  }
  100% {
    transform: translate3d(0, 0, 0) scaleY(1) scaleX(1);
  }
`;

export const Frame39 = styled.div`
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
  background: #4a627a;
  color: #fff;
`;

export const MenuIcon39 = styled.div`
  position: absolute;
  z-index: 2;
  width: 50px;
  height: 26px;
  top: 187px;
  left: 175px;
  cursor: pointer;
  &.paused .line-top,
  &.paused .line-bottom {
    animation: none;
  }
  .line-top,
  .line-bottom {
    position: absolute;
    width: 50px;
    height: 4px;
    background: #fff;
    transition: transform 0.5s;
    &.line-top {
        top: 0;
    }
    &.line-bottom {
        bottom: 0;
    }
  }
  &.active {
    pointer-events: none;
    .line-top {
        transform: ${({ active }) => 
          active
            ? 'translate3d(0, -20px, 0) scaleY(0.5) scaleX(6)'
            : 'translate3d(0, 0, 0) scaleY(1) scaleX(1)'};
        animation: ${({ active }) => 
          active ? css`${lineTopOpen39} 1s each both` : css`${lineTopClose39} 1s ease both`};
    }
    .line-bottom {
        transform: ${({ active }) =>
          active
            ? 'translate3d(0, 20px, 0) scaleY(0.5) scaleX(6)'
            : 'translate3d(0, 0, 0) scaleY(1) scaleX(1)'};
        animation: ${({ active }) =>
          active
            ? css`${lineBottomOpen39} 1s ease both`
            : css`${lineBottomClose39} 1s ease both`};
    }
  }
`;

export const Menu39 = styled.div`
  position: absolute;
  width: 300px;
  height: auto;
  top: 190px;
  left: 50px;
  padding: 0 10px;
  opacity: 0;
  pointer-events: none;
  transition: all 0.5s ease-in-out;

  ul {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    list-style: none;
    font-size: 16px;
    line-height: 20px;
    font-weight: 600;
    text-transform: uppercase;
    width: 280px;
    margin: 0;
    padding: 0;

    li {
        position: relative;
        display: block;
        flex: 0 1 auto;
        margin: 0;
        padding: 0;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        &:hover {
            opacity: 0.6;
        }
    }
  }
`;