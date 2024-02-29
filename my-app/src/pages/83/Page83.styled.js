import styled, { keyframes } from 'styled-components';

const animationDuration = '4s';

export const Frame83 = styled.div`
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
  background: #1e3242;
  color: #fff;
`;

export const WarpContainer83 = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  top: 100px;
  left: 100px;
`;

const ringAnimation = keyframes`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: scale(4);
    opacity: 1;
  }
`;

export const Ring83 = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;

  &:nth-child(${props => props.index}) {
    animation: ${ringAnimation} ${animationDuration} cubic-bezier(.98, .02, .97, .12) ${props => props.timeOffset} infinite;
  }
`;

const stripeTransform83 = (degree, offset) => `
  transform: rotate(${degree}deg) translate3d(0, ${offset}px, 0) scaleY(${offset / 100});
`;

export const Stripe83 = styled.div`
  position: absolute;
  width: 2px;
  height: 20px;
  top: 90px;
  left: 99px;
  background: #c3dcec;
  ${props => stripeTransform83(props.degree, props.offset)}
`;