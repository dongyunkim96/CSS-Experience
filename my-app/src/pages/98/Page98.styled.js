import styled, { keyframes } from "styled-components";

export const Frame98 = styled.div`
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

export const Edges98 = styled.div`
  position: absolute;
  z-index: 10;
  width: 160px;
  height: 160px;
  top: 120px;
  left: 120px;
`;

export const Elements98 = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  top: 185px;
  left: 185px;
`;

const edgeAnimationT = keyframes`
  0%, 20% {
    transform: translateY(0);
    opacity: 1;
  }
  80% {
    opacity: 0;
  }
  100% {
    transform: translateY(-180px);
    opacity: 0;
  }
`;

const edgeAnimationL = keyframes`
  0%, 20% {
    transform: translateY(0);
    opacity: 1;
  }
  80% {
    opacity: 0;
  }
  100% {
    transform: translateX(-180px);
    opacity: 0;
  }
`;

const edgeAnimationR = keyframes`
  0%, 20% {
    transform: translateY(0);
    opacity: 1;
  }
  80% {
    opacity: 0;
  }
  100% {
    transform: translateX(180px);
    opacity: 0;
  }
`;

const edgeAnimationB = keyframes`
  0%, 20% {
    transform: translateY(0);
    opacity: 1;
  }
  80% {
    opacity: 0;
  }
  100% {
    transform: translateY(180px);
    opacity: 0;
  }
`;

export const Edge98 = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  &.t {
    top: 0;
    left: 0;
    border-width: 80px 80px 0 80px;
    border-color: #3f91c7 transparent transparent transparent;
    animation: ${edgeAnimationT} 1.5s cubic-bezier(0.19, 0.69, 0.4, 1) infinite alternate;
  }

  &.r {
    top: 0;
    right: 0;
    border-width: 80px 80px 80px 0;
    border-color: transparent #2b82BB transparent transparent;
    animation: ${edgeAnimationR} 1.5s cubic-bezier(0.19, 0.69, 0.4, 1) infinite alternate;
  }

  &.l {
    top: 0;
    left: 0;
    border-width: 80px 0px 80px 80px;
    border-color: transparent transparent transparent #3289c3;
    animation: ${edgeAnimationL} 1.5s cubic-bezier(0.19, 0.69, 0.4, 1) infinite alternate;
  }

  &.b {
    bottom: 0;
    right: 0;
    border-width: 0px 80px 80px 80px;
    border-color: transparent transparent #2578ae transparent;
    animation: ${edgeAnimationB} 1.5s cubic-bezier(0.19, 0.69, 0.4, 1) infinite alternate;
  }
`;

const square1Animation98 = keyframes`
  0%, 20% {
    transform: scale(0) translate(0) rotate(0);
  }
  100% {
    transform: scale(1) translate(66px, 78px) rotate(110deg);
  }
`;

const square2Animation98 = keyframes`
  0%, 20% {
    transform: scale(0) translate(0) rotate(0);
  }
  100% {
    transform: scale(1) translate(46px, -141px) rotate(163deg);
  }
`;

const square3Animation98 = keyframes`
  0%, 20% {
    transform: scale(0) translate(0) rotate(0);
  }
  100% {
    transform: scale(1) translate(131px, -117px) rotate(126deg);
  }
`;

const square4Animation98 = keyframes`
  0%, 20% {
    transform: scale(0) translate(0) rotate(0);
  }
  100% {
    transform: scale(1) translate(91px, -94px) rotate(122deg);
  }
`;

const square5Animation98 = keyframes`
  0%, 20% {
    transform: scale(0) translate(0) rotate(0);
  }
  100% {
    transform: scale(1) translate(131px, -10px) rotate(111deg);
  }
`;

const square6Animation98 = keyframes`
  0%, 20% {
    transform: scale(0) translate(0) rotate(0);
  }
  100% {
    transform: scale(1) translate(-94px, -66px) rotate(125deg);
  }
`;

const square7Animation98 = keyframes`
  0%, 20% {
    transform: scale(0) translate(0) rotate(0);
  }
  100% {
    transform: scale(1) translate(-102px, 50px) rotate(139deg);
  }
`;

const square8Animation98 = keyframes`
  0%, 20% {
    transform: scale(0) translate(0) rotate(0);
  }
  100% {
    transform: scale(1) translate(-62px, 20px) rotate(118deg);
  }
`;

const circle1Animation98 = keyframes`
  0%, 20% {
    transform: scale(0) translate(0);
  }
  100% {
    transform: scale(1) translate(13px, -113px);
  }
`;

const circle2Animation98 = keyframes`
  0%, 20% {
    transform: scale(0) translate(0);
  }
  100% {
    transform: scale(1) translate(29px, -71px);
  }
`;

const circle3Animation98 = keyframes`
  0%, 20% {
    transform: scale(0) translate(0);
  }
  100% {
    transform: scale(1) translate(1px, -72px);
  }
`;

const circle4Animation98 = keyframes`
  0%, 20% {
    transform: scale(0) translate(0);
  }
  100% {
    transform: scale(1) translate(-62px, 132px);
  }
`;

const circle5Animation98 = keyframes`
  0%, 20% {
    transform: scale(0) translate(0);
  }
  100% {
    transform: scale(1) translate(18px, 86px);
  }
`;

const circle6Animation98 = keyframes`
  0%, 20% {
    transform: scale(0) translate(0);
  }
  100% {
    transform: scale(1) translate(62px, 15px);
  }
`;

const circle7Animation98 = keyframes`
  0%, 20% {
    transform: scale(0) translate(0);
  }
  100% {
    transform: scale(1) translate(74px, -25px);
  }
`;

const circle8Animation98 = keyframes`
  0%, 20% {
    transform: scale(0) translate(0);
  }
  100% {
    transform: scale(1) translate(95px, -45px);
  }
`;

export const Square98 = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 5px;
  left: 5px;
  &.small {
    width: 10px;
    height: 10px;
    top: 10px;
    left: 10px;
  }
  &.big {
    width: 30px;
    height: 30px;
    top: 0;
    left: 0;
  }
  &.c1 {
    background: #0f8bbd;
    animation: ${square1Animation98} 1.5s cubic-bezier(0.19, 0.69, 0.4, 1) infinite alternate;
  }
  &.c2 {
    background: #ec9a29;
    animation: ${square2Animation98} 1.5s cubic-bezier(0.19, 0.69, 0.4, 1) infinite alternate;
  }
  &.c3 {
    background: #0f8bbd;
    animation: ${square3Animation98} 1.5s cubic-bezier(0.19, 0.69, 0.4, 1) infinite alternate;    
  }
  &.c4 {
    background: #a8201A;
    animation: ${square4Animation98} 1.5s cubic-bezier(0.19, 0.69, 0.4, 1) infinite alternate;
  }
  &.c5 {
    background: #0f8bbd;
    animation: ${square5Animation98} 1.5s cubic-bezier(0.19, 0.69, 0.4, 1) infinite alternate;
  }
  &.c6 {
    background: #0f8bbd;
    animation: ${square6Animation98} 1.5s cubic-bezier(0.19, 0.69, 0.4, 1) infinite alternate;
  }
  &.c7 {
    background: #0f8bbd;
    animation: ${square7Animation98} 1.5s cubic-bezier(0.19, 0.69, 0.4, 1) infinite alternate;
  }
  &.c8 {
    background: #a8201A;
    animation: ${square8Animation98} 1.5s cubic-bezier(0.19, 0.69, 0.4, 1) infinite alternate;
  }
`;

export const Circle98 = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 5px;
  left: 5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border-style: solid;
  border-width: 4px;
  &.small {
    width: 10px;
    height: 10px;
    border-width: 2px;
    top: 10px;
    left: 10px;
  }
  &.big {
    width: 30px;
    height: 30px;
    border-width: 8px;
    top: 0;
    left: 0;
  }
  &.c1{
    border-color: #0f8b8d;
    animation: ${circle1Animation98} 1.5s cubic-bezier(0.19, 0.69, 0.4, 1) infinite alternate;
  }
  &.c2{
    border-color: #ec9a29;
    animation: ${circle2Animation98} 1.5s cubic-bezier(0.19, 0.69, 0.4, 1) infinite alternate;
  }
  &.c3{
    border-color: #a8201a;
    animation: ${circle3Animation98} 1.5s cubic-bezier(0.19, 0.69, 0.4, 1) infinite alternate;
  }
  &.c4{
    border-color: #0f8b8d;
    animation: ${circle4Animation98} 1.5s cubic-bezier(0.19, 0.69, 0.4, 1) infinite alternate;    
  }
  &.c5{
    border-color: #a8201a;
    animation: ${circle5Animation98} 1.5s cubic-bezier(0.19, 0.69, 0.4, 1) infinite alternate;    
  }
  &.c6{
    border-color: #ec9a29;
    animation: ${circle6Animation98} 1.5s cubic-bezier(0.19, 0.69, 0.4, 1) infinite alternate;    
  }
  &.c7{
    border-color: #0f8b8d;
    animation: ${circle7Animation98} 1.5s cubic-bezier(0.19, 0.69, 0.4, 1) infinite alternate;    
  }
  &.c8{
    border-color: #a8201a;
    animation: ${circle8Animation98} 1.5s cubic-bezier(0.19, 0.69, 0.4, 1) infinite alternate;    
  }
`;