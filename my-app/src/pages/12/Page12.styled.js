import styled from 'styled-components';

export const Frame = styled.div`
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
  background: #fff;
  color: #333;
  font-family: "Open Sans", Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #4cb6de;
  color: white;
  z-index: 1;
`;

export const Center = styled.div`
  width: min(85%, 400px);
  margin: auto;
  margin-top: 85px;
`;

export const Content = styled.p`
  font-size: 1.5rem;
  line-height: 1.5;
  position: relative;
`;

export const TooltipContainer = styled.div`
  background: #287089;
  padding: .3rem .4rem;
  cursor: pointer;
  position: relative;


  &::before {
    bottom: -20px;
    content: " ";
    display: block;
    height: 20px;
    left: 0;
    position: absolute;
    width: 100%;
  }

  &::after {
    border-left: solid transparent 10px;
    border-right: solid transparent 10px;
    border-top: solid transparent 10px;
    bottom: -9px;
    content: " ";
    height: 0;
    left: 50%;
    margin-left: -13px;
    position: absolute;
    width: 0;
  }
`;

export const Tooltip = styled.span`
  cursor: text;
  font-size: 1rem;
  width: 300px;
  background: white;
  bottom: 100%;
  color: #fff;
  display: block;
  left: 50%;
  margin-bottom: 15px;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  transform: translate(-50%, -16px);
  transition: all 0.3s ease-out;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2s);

  .tooltip__header {
    color: #286f8a;
    svg {
        position: relative;
        top: 3px;
        margin-left: 0.5rem;
        cursor: pointer;
        transform-origin: center center;
        transition: all .2s;
        &:hover {
            transform: scale(1.1);
        }
    }
  }

  .tooltip__content {
    background: #286f8a;
  }
`;

export const Author = styled.p`
  font-style: italic;
  font-size: 1.3rem;
`;