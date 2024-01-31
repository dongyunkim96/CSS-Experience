import styled, { keyframes } from 'styled-components';

export const Frame32 = styled.div`
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
  background: #fdb03a;
  background: -webkit-gradient(
    bottom left,
    #d2592a 0%,
    #fdb03a 100%
  );
`;

export const Counter32 = styled.div`
  position: absolute;
  height: 40px;
  width: 130px;
  top: 180px;
  left: 135px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 4px 8px 12px 0 rgba(0, 0, 0, 0.1);
`;

export const Minus32 = styled.div`
  position: absolute;
  z-index: 10;
  width: 32px;
  height: 32px;
  top: 4px;
  left: 5px;
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.3s ease-in-out;

  .line {
    position: absolute;
    height: 2px;
    width: 18px;
    left: 7px;
    top: 15px;
    background: #e26e6e;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    background: #e26e6e;

    .line {
        background: #fff;
    }
  }
`;

export const Plus32 = styled.div`
  position: absolute;
  z-index: 10;
  width: 32px;
  height: 32px;
  top: 4px;
  right: 5px;
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.3s ease-in-out;

  .line-h {
    position: absolute;
    height: 2px;
    width: 18px;
    left: 7px;
    top: 15px;
    background: #8ed273;
    transition: all 0.3s ease-in-out;
  }

  .line-v {
    position: absolute;
    height: 18px;
    width: 2px;
    left: 15px;
    top: 7px;
    background: #8ed273;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    background: #8ed273;
    
    .line-h,
    .line-v {
        background: #fff;
    }
  }
`;

export const Number32 = styled.div`
  position: relative;
  width: 130px;
  height: 40px;
  font-weight: 600;
  font-size: 20px;
  color: #6a85a0;
  line-height: 40px;
  text-align: center;
`;

const fadeInUp32 = keyframes`
  from {
    transform: scale(0.6);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const fadeOutUp32 = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(1.4);
    opacity: 0;
  }
`;

const fadeInDown32 = keyframes`
  from {
    transform: scale(1.4);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const fadeOutDown32 = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0.6);
    opacity: 0;
  }
`;

export const NumberSpan32 = styled.span`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform-origin: 50% 50%;

  &.fadeInUp32 {
    animation: ${fadeInUp32} 0.3s ease-out 0.15s backwards;
    transform: scale(1);
    opacity: 1;
  }

  &.fadeOutUp32 {
    animation: ${fadeOutUp32} 0.3s ease-in;
    transform: scale(1.4);
    opacity: 0;
  }

  &.fadeInDown32 {
    animation: ${fadeInDown32} 0.3s ease-out 0.15s reverse backwards;
    transform: scale(1);
    opacity: 1;
  }

  &.fadeOutDown32 {
    animation: ${fadeOutDown32} 0.3s ease-in reverse;
    transform: scale(0.6);
    opacity: 0;
  }
`;