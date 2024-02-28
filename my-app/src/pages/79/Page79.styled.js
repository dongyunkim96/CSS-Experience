import styled, { keyframes } from 'styled-components';

const lineAnimation1 = keyframes`
  0% {
    transform: rotate(0) translate(0, 0) scale(1.1);
  }
  5% {
    transform: rotate(0) translate(0, 0) scale(1);
  }
  15% {
    transform: rotate(0deg) translate(0, 0);
  }
  20% {
    transform: rotate(0deg) translate(0, -100px) scale(0.25, 1);
  }
  25% {
    transform: rotate(0deg) translate(0, -100px) scale(0.25, 0.25) rotate(180deg);
  }
  30% {
    transform: rotate(0deg) translate(0, -100px) scale(1, 0.25) rotate(180deg);
  }
  35% {
    transform: rotate(0deg) translate(0, -60px) scale(1, 0.1);
  }
  40% {
    transform: rotate(0deg) translate(0, -60px) scale(1, 0.1) translate(-30px, 0);
  }
  45% {
    transform: rotate(0deg) translate(0, -60px) scale(1, 0.1) translate(30px, 0);
  }
  50% {
    transform: rotate(0deg) translate(0, -60px) scale(0.1, 1);
  }
  55% {
    transform: rotate(0deg) translate(0, -60px) scale(0.5, 0.1);
    border-radius: 0;
  }
  60% {
    transform: rotate(0deg) translate(0, -80px) scale(0.5, 0.5) rotate(180deg);
    border-radius: 50%;
  }
  65% {
    transform: rotate(0deg) translate(0, 0) scale(0.2, 0.2);
    border-radius: 50%;
  }
  70% {
    transform: rotate(0deg)translate(0, -100px) scale(0.25, 1);
    border-radius: 0;
  }
  75% {
    transform: rotate(0deg)translate(0, -100px) scale(0.25, 0.25);
  }
  80% {
    transform: rotate(0deg)translate(0, -50px) scale(0.5, 0.5);
  }
  85% {
    transform: rotate(0deg) translate(0, -50px) scale(0.5, 0.5) rotate(180deg) translate(-50px, 50px);
  }
  90% {
    transform: rotate(0deg) translate(0, -30px) scale(0.5, 0.1);
  }
  95% {
    transform: rotate(0deg) translate(0, -10px) scale(0.1, 0.5);
  }
  100% {
    transform: rotate(0deg) translate(0, -300px) scale(0.1, 0.8);
  }
`;

const lineAnimation2 = keyframes`
  0% {
    transform: rotate(0) translate(0, 0) scale(0.01);
  }
  5% {
    transform: rotate(0) translate(0, 0) scale(1);
  }
  15% {
    transform: rotate(36deg) translate(0, 0);
  }
  20% {
    transform: rotate(36deg)translate(0, -100px) scale(0.25, 1);
  }
  25% {
    transform: rotate(36deg) translate(0, -100px) scale(0.25, 0.25) rotate(180deg);
  }
  30% {
    transform: rotate(36deg)translate(0, -100px) scale(1, 0.25) rotate(180deg);
  }
  35% {
    transform: rotate(36deg)translate(0, -60px) scale(1, 0.1);
  }
  40% {
    transform: rotate(36deg)translate(0, -60px) scale(1, 0.1) translate(-30px, 0);
  }
  45% {
    transform: rotate(36deg)translate(0, -60px) scale(1, 0.1) translate(30px, 0);
  }
  50% {
    transform: rotate(36deg)translate(0, -60px) scale(0.1, 1);
  }
  55% {
    transform: rotate(36deg) translate(0, -60px) scale(0.5, 0.1);
    border-radius: 0;
  }
  60% {
    transform: rotate(36deg) translate(0, -80px) scale(0.5, 0.5) rotate(180deg);
    border-radius: 50%;
  }
  65% {
    transform: rotate(36deg) translate(0, 0) scale(0.2, 0.2);
    border-radius: 50%;
  }
  70% {
    transform: rotate(36deg)translate(0, -100px) scale(0.25, 1);
    border-radius: 0;
  }
  75% {
    transform: rotate(36deg)translate(0, -100px) scale(0.25, 0.25);
  }
  80% {
    transform: rotate(36deg)translate(0, -50px) scale(0.5, 0.5);
  }
  85% {
    transform: rotate(36deg) translate(0, -50px) scale(0.5, 0.5) rotate(180deg) translate(-50px, 50px);
  }
  90% {
    transform: rotate(36deg) translate(0, -30px) scale(0.5, 0.1);
  }
  95% {
    transform: rotate(36deg) translate(0, -10px) scale(0.1, 0.5);
  }
  100% {
    transform: rotate(36deg) translate(0, -300px) scale(0.1, 0.8);
  }
`;

const lineAnimation3 = keyframes`
  0% {
    transform: rotate(0) translate(0, 0) scale(0.01);
  }
  5% {
    transform: rotate(0) translate(0, 0) scale(1);
  }
  15% {
    transform: rotate(72deg) translate(0, 0);
  }
  20% {
    transform: rotate(72deg)translate(0, -100px) scale(0.25, 1);
  }
  25% {
    transform: rotate(72deg) translate(0, -100px) scale(0.25, 0.25) rotate(180deg);
  }
  30% {
    transform: rotate(72deg)translate(0, -100px) scale(1, 0.25) rotate(180deg);
  }
  35% {
    transform: rotate(72deg)translate(0, -60px) scale(1, 0.1);
  }
  40% {
    transform: rotate(72deg)translate(0, -60px) scale(1, 0.1) translate(-30px, 0);
  }
  45% {
    transform: rotate(72deg)translate(0, -60px) scale(1, 0.1) translate(30px, 0);
  }
  50% {
    transform: rotate(72deg)translate(0, -60px) scale(0.1, 1);
  }
  55% {
    transform: rotate(72deg) translate(0, -60px) scale(0.5, 0.1);
    border-radius: 0;
  }
  60% {
    transform: rotate(72deg) translate(0, -80px) scale(0.5, 0.5) rotate(180deg);
    border-radius: 50%;
  }
  65% {
    transform: rotate(72deg) translate(0, 0) scale(0.2, 0.2);
    border-radius: 50%;
  }
  70% {
    transform: rotate(72deg)translate(0, -100px) scale(0.25, 1);
    border-radius: 0;
  }
  75% {
    transform: rotate(72deg)translate(0, -100px) scale(0.25, 0.25);
  }
  80% {
    transform: rotate(72deg)translate(0, -50px) scale(0.5, 0.5);
  }
  85% {
    transform: rotate(72deg) translate(0, -50px) scale(0.5, 0.5) rotate(180deg) translate(-50px, 50px);
  }
  90% {
    transform: rotate(72deg) translate(0, -30px) scale(0.5, 0.1);
  }
  95% {
    transform: rotate(72deg) translate(0, -10px) scale(0.1, 0.5);
  }
  100% {
    transform: rotate(72deg) translate(0, -300px) scale(0.1, 0.8);
  }
`;

const lineAnimation4 = keyframes`
  0% {
    transform: rotate(0) translate(0, 0) scale(0.01);
  }
  5% {
    transform: rotate(0) translate(0, 0) scale(1);
  }
  15% {
    transform: rotate(108deg) translate(0, 0);
  }
  20% {
    transform: rotate(108deg)translate(0, -100px) scale(0.25, 1);
  }
  25% {
    transform: rotate(108deg) translate(0, -100px) scale(0.25, 0.25) rotate(180deg);
  }
  30% {
    transform: rotate(108deg)translate(0, -100px) scale(1, 0.25) rotate(180deg);
  }
  35% {
    transform: rotate(108deg)translate(0, -60px) scale(1, 0.1);
  }
  40% {
    transform: rotate(108deg)translate(0, -60px) scale(1, 0.1) translate(-30px, 0);
  }
  45% {
    transform: rotate(108deg)translate(0, -60px) scale(1, 0.1) translate(30px, 0);
  }
  50% {
    transform: rotate(108deg)translate(0, -60px) scale(0.1, 1);
  }
  55% {
    transform: rotate(108deg) translate(0, -60px) scale(0.5, 0.1);
    border-radius: 0;
  }
  60% {
    transform: rotate(108deg) translate(0, -80px) scale(0.5, 0.5) rotate(180deg);
    border-radius: 50%;
  }
  65% {
    transform: rotate(108deg) translate(0, 0) scale(0.2, 0.2);
    border-radius: 50%;
  }
  70% {
    transform: rotate(108deg)translate(0, -100px) scale(0.25, 1);
    border-radius: 0;
  }
  75% {
    transform: rotate(108deg)translate(0, -100px) scale(0.25, 0.25);
  }
  80% {
    transform: rotate(108deg)translate(0, -50px) scale(0.5, 0.5);
  }
  85% {
    transform: rotate(108deg) translate(0, -50px) scale(0.5, 0.5) rotate(180deg) translate(-50px, 50px);
  }
  90% {
    transform: rotate(108deg) translate(0, -30px) scale(0.5, 0.1);
  }
  95% {
    transform: rotate(108deg) translate(0, -10px) scale(0.1, 0.5);
  }
  100% {
    transform: rotate(108deg) translate(0, -300px) scale(0.1, 0.8);
  }
`;

const lineAnimation5 = keyframes`
  0% {
    transform: rotate(0) translate(0, 0) scale(0.01);
  }
  5% {
    transform: rotate(0) translate(0, 0) scale(1);
  }
  15% {
    transform: rotate(144deg) translate(0, 0);
  }
  20% {
    transform: rotate(144deg)translate(0, -100px) scale(0.25, 1);
  }
  25% {
    transform: rotate(144deg) translate(0, -100px) scale(0.25, 0.25) rotate(180deg);
  }
  30% {
    transform: rotate(144deg)translate(0, -100px) scale(1, 0.25) rotate(180deg);
  }
  35% {
    transform: rotate(144deg)translate(0, -60px) scale(1, 0.1);
  }
  40% {
    transform: rotate(144deg)translate(0, -60px) scale(1, 0.1) translate(-30px, 0);
  }
  45% {
    transform: rotate(144deg)translate(0, -60px) scale(1, 0.1) translate(30px, 0);
  }
  50% {
    transform: rotate(144deg)translate(0, -60px) scale(0.1, 1);
  }
  55% {
    transform: rotate(144deg) translate(0, -60px) scale(0.5, 0.1);
    border-radius: 0;
  }
  60% {
    transform: rotate(144deg) translate(0, -80px) scale(0.5, 0.5) rotate(180deg);
    border-radius: 50%;
  }
  65% {
    transform: rotate(144deg) translate(0, 0) scale(0.2, 0.2);
    border-radius: 50%;
  }
  70% {
    transform: rotate(144deg)translate(0, -100px) scale(0.25, 1);
    border-radius: 0;
  }
  75% {
    transform: rotate(144deg)translate(0, -100px) scale(0.25, 0.25);
  }
  80% {
    transform: rotate(144deg)translate(0, -50px) scale(0.5, 0.5);
  }
  85% {
    transform: rotate(144deg) translate(0, -50px) scale(0.5, 0.5) rotate(180deg) translate(-50px, 50px);
  }
  90% {
    transform: rotate(144deg) translate(0, -30px) scale(0.5, 0.1);
  }
  95% {
    transform: rotate(144deg) translate(0, -10px) scale(0.1, 0.5);
  }
  100% {
    transform: rotate(144deg) translate(0, -300px) scale(0.1, 0.8);
  }
`;

const lineAnimation6 = keyframes`
  0% {
    transform: rotate(0) translate(0, 0) scale(0.01);
  }
  5% {
    transform: rotate(0) translate(0, 0) scale(1);
  }
  15% {
    transform: rotate(180deg) translate(0, 0);
  }
  20% {
    transform: rotate(180deg)translate(0, -100px) scale(0.25, 1);
  }
  25% {
    transform: rotate(180deg) translate(0, -100px) scale(0.25, 0.25) rotate(180deg);
  }
  30% {
    transform: rotate(180deg)translate(0, -100px) scale(1, 0.25) rotate(180deg);
  }
  35% {
    transform: rotate(180deg)translate(0, -60px) scale(1, 0.1);
  }
  40% {
    transform: rotate(180deg)translate(0, -60px) scale(1, 0.1) translate(-30px, 0);
  }
  45% {
    transform: rotate(180deg)translate(0, -60px) scale(1, 0.1) translate(30px, 0);
  }
  50% {
    transform: rotate(180deg)translate(0, -60px) scale(0.1, 1);
  }
  55% {
    transform: rotate(180deg) translate(0, -60px) scale(0.5, 0.1);
    border-radius: 0;
  }
  60% {
    transform: rotate(180deg) translate(0, -80px) scale(0.5, 0.5) rotate(180deg);
    border-radius: 50%;
  }
  65% {
    transform: rotate(180deg) translate(0, 0) scale(0.2, 0.2);
    border-radius: 50%;
  }
  70% {
    transform: rotate(180deg)translate(0, -100px) scale(0.25, 1);
    border-radius: 0;
  }
  75% {
    transform: rotate(180deg)translate(0, -100px) scale(0.25, 0.25);
  }
  80% {
    transform: rotate(180deg)translate(0, -50px) scale(0.5, 0.5);
  }
  85% {
    transform: rotate(180deg) translate(0, -50px) scale(0.5, 0.5) rotate(180deg) translate(-50px, 50px);
  }
  90% {
    transform: rotate(180deg) translate(0, -30px) scale(0.5, 0.1);
  }
  95% {
    transform: rotate(180deg) translate(0, -10px) scale(0.1, 0.5);
  }
  100% {
    transform: rotate(180deg) translate(0, -300px) scale(0.1, 0.8);
  }
`;

const lineAnimation7 = keyframes`
  0% {
    transform: rotate(0) translate(0, 0) scale(0.01);
  }
  5% {
    transform: rotate(0) translate(0, 0) scale(1);
  }
  15% {
    transform: rotate(216deg) translate(0, 0);
  }
  20% {
    transform: rotate(216deg)translate(0, -100px) scale(0.25, 1);
  }
  25% {
    transform: rotate(216deg) translate(0, -100px) scale(0.25, 0.25) rotate(180deg);
  }
  30% {
    transform: rotate(216deg)translate(0, -100px) scale(1, 0.25) rotate(180deg);
  }
  35% {
    transform: rotate(216deg)translate(0, -60px) scale(1, 0.1);
  }
  40% {
    transform: rotate(216deg)translate(0, -60px) scale(1, 0.1) translate(-30px, 0);
  }
  45% {
    transform: rotate(216deg)translate(0, -60px) scale(1, 0.1) translate(30px, 0);
  }
  50% {
    transform: rotate(216deg)translate(0, -60px) scale(0.1, 1);
  }
  55% {
    transform: rotate(216deg) translate(0, -60px) scale(0.5, 0.1);
    border-radius: 0;
  }
  60% {
    transform: rotate(216deg) translate(0, -80px) scale(0.5, 0.5) rotate(180deg);
    border-radius: 50%;
  }
  65% {
    transform: rotate(216deg) translate(0, 0) scale(0.2, 0.2);
    border-radius: 50%;
  }
  70% {
    transform: rotate(216deg)translate(0, -100px) scale(0.25, 1);
    border-radius: 0;
  }
  75% {
    transform: rotate(216deg)translate(0, -100px) scale(0.25, 0.25);
  }
  80% {
    transform: rotate(216deg)translate(0, -50px) scale(0.5, 0.5);
  }
  85% {
    transform: rotate(216deg) translate(0, -50px) scale(0.5, 0.5) rotate(180deg) translate(-50px, 50px);
  }
  90% {
    transform: rotate(216deg) translate(0, -30px) scale(0.5, 0.1);
  }
  95% {
    transform: rotate(216deg) translate(0, -10px) scale(0.1, 0.5);
  }
  100% {
    transform: rotate(216deg) translate(0, -300px) scale(0.1, 0.8);
  }
`;

const lineAnimation8 = keyframes`
  0% {
    transform: rotate(0) translate(0, 0) scale(0.01);
  }
  5% {
    transform: rotate(0) translate(0, 0) scale(1);
  }
  15% {
    transform: rotate(252deg) translate(0, 0);
  }
  20% {
    transform: rotate(252deg)translate(0, -100px) scale(0.25, 1);
  }
  25% {
    transform: rotate(252deg) translate(0, -100px) scale(0.25, 0.25) rotate(180deg);
  }
  30% {
    transform: rotate(252deg)translate(0, -100px) scale(1, 0.25) rotate(180deg);
  }
  35% {
    transform: rotate(252deg)translate(0, -60px) scale(1, 0.1);
  }
  40% {
    transform: rotate(252deg)translate(0, -60px) scale(1, 0.1) translate(-30px, 0);
  }
  45% {
    transform: rotate(252deg)translate(0, -60px) scale(1, 0.1) translate(30px, 0);
  }
  50% {
    transform: rotate(252deg)translate(0, -60px) scale(0.1, 1);
  }
  55% {
    transform: rotate(252deg) translate(0, -60px) scale(0.5, 0.1);
    border-radius: 0;
  }
  60% {
    transform: rotate(252deg) translate(0, -80px) scale(0.5, 0.5) rotate(180deg);
    border-radius: 50%;
  }
  65% {
    transform: rotate(252deg) translate(0, 0) scale(0.2, 0.2);
    border-radius: 50%;
  }
  70% {
    transform: rotate(252deg)translate(0, -100px) scale(0.25, 1);
    border-radius: 0;
  }
  75% {
    transform: rotate(252deg)translate(0, -100px) scale(0.25, 0.25);
  }
  80% {
    transform: rotate(252deg)translate(0, -50px) scale(0.5, 0.5);
  }
  85% {
    transform: rotate(252deg) translate(0, -50px) scale(0.5, 0.5) rotate(180deg) translate(-50px, 50px);
  }
  90% {
    transform: rotate(252deg) translate(0, -30px) scale(0.5, 0.1);
  }
  95% {
    transform: rotate(252deg) translate(0, -10px) scale(0.1, 0.5);
  }
  100% {
    transform: rotate(252deg) translate(0, -300px) scale(0.1, 0.8);
  }
`;

const lineAnimation9 = keyframes`
  0% {
    transform: rotate(0) translate(0, 0) scale(0.01);
  }
  5% {
    transform: rotate(0) translate(0, 0) scale(1);
  }
  15% {
    transform: rotate(288deg) translate(0, 0);
  }
  20% {
    transform: rotate(288deg)translate(0, -100px) scale(0.25, 1);
  }
  25% {
    transform: rotate(288deg) translate(0, -100px) scale(0.25, 0.25) rotate(180deg);
  }
  30% {
    transform: rotate(288deg)translate(0, -100px) scale(1, 0.25) rotate(180deg);
  }
  35% {
    transform: rotate(288deg)translate(0, -60px) scale(1, 0.1);
  }
  40% {
    transform: rotate(288deg)translate(0, -60px) scale(1, 0.1) translate(-30px, 0);
  }
  45% {
    transform: rotate(288deg)translate(0, -60px) scale(1, 0.1) translate(30px, 0);
  }
  50% {
    transform: rotate(288deg)translate(0, -60px) scale(0.1, 1);
  }
  55% {
    transform: rotate(288deg) translate(0, -60px) scale(0.5, 0.1);
    border-radius: 0;
  }
  60% {
    transform: rotate(288deg) translate(0, -80px) scale(0.5, 0.5) rotate(180deg);
    border-radius: 50%;
  }
  65% {
    transform: rotate(288deg) translate(0, 0) scale(0.2, 0.2);
    border-radius: 50%;
  }
  70% {
    transform: rotate(288deg)translate(0, -100px) scale(0.25, 1);
    border-radius: 0;
  }
  75% {
    transform: rotate(288deg)translate(0, -100px) scale(0.25, 0.25);
  }
  80% {
    transform: rotate(288deg)translate(0, -50px) scale(0.5, 0.5);
  }
  85% {
    transform: rotate(288deg) translate(0, -50px) scale(0.5, 0.5) rotate(180deg) translate(-50px, 50px);
  }
  90% {
    transform: rotate(288deg) translate(0, -30px) scale(0.5, 0.1);
  }
  95% {
    transform: rotate(288deg) translate(0, -10px) scale(0.1, 0.5);
  }
  100% {
    transform: rotate(288deg) translate(0, -300px) scale(0.1, 0.8);
  }
`;

const lineAnimation10 = keyframes`
  0% {
    transform: rotate(0) translate(0, 0) scale(0.01);
  }
  5% {
    transform: rotate(0) translate(0, 0) scale(1);
  }
  15% {
    transform: rotate(324deg) translate(0, 0);
  }
  20% {
    transform: rotate(324deg)translate(0, -100px) scale(0.25, 1);
  }
  25% {
    transform: rotate(324deg) translate(0, -100px) scale(0.25, 0.25) rotate(180deg);
  }
  30% {
    transform: rotate(324deg)translate(0, -100px) scale(1, 0.25) rotate(180deg);
  }
  35% {
    transform: rotate(324deg)translate(0, -60px) scale(1, 0.1);
  }
  40% {
    transform: rotate(324deg)translate(0, -60px) scale(1, 0.1) translate(-30px, 0);
  }
  45% {
    transform: rotate(324deg)translate(0, -60px) scale(1, 0.1) translate(30px, 0);
  }
  50% {
    transform: rotate(324deg)translate(0, -60px) scale(0.1, 1);
  }
  55% {
    transform: rotate(324deg) translate(0, -60px) scale(0.5, 0.1);
    border-radius: 0;
  }
  60% {
    transform: rotate(324deg) translate(0, -80px) scale(0.5, 0.5) rotate(180deg);
    border-radius: 50%;
  }
  65% {
    transform: rotate(324deg) translate(0, 0) scale(0.2, 0.2);
    border-radius: 50%;
  }
  70% {
    transform: rotate(324deg)translate(0, -100px) scale(0.25, 1);
    border-radius: 0;
  }
  75% {
    transform: rotate(324deg)translate(0, -100px) scale(0.25, 0.25);
  }
  80% {
    transform: rotate(324deg)translate(0, -50px) scale(0.5, 0.5);
  }
  85% {
    transform: rotate(324deg) translate(0, -50px) scale(0.5, 0.5) rotate(180deg) translate(-50px, 50px);
  }
  90% {
    transform: rotate(324deg) translate(0, -30px) scale(0.5, 0.1);
  }
  95% {
    transform: rotate(324deg) translate(0, -10px) scale(0.1, 0.5);
  }
  100% {
    transform: rotate(324deg) translate(0, -300px) scale(0.1, 0.8);
  }
`;

export const Frame79 = styled.div`
  position: absolute;
  height: 400px;
  width: 400px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #276365;
  color: #fff;
  border-radius: 4px;
  overflow: hidden;
`;

export const Center79 = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Line79 = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  top: 0;
  left: 0;
  background: #fff;

  &.line-1 {
    animation: ${lineAnimation1} 10s ease-in-out infinite;
  }

  &.line-2 {
    animation: ${lineAnimation2} 10s ease-in-out infinite;
  }
  
  &.line-3 {
    animation: ${lineAnimation3} 10s ease-in-out infinite;
  }

  &.line-4 {
    animation: ${lineAnimation4} 10s ease-in-out infinite;
  }

  &.line-5 {
    animation: ${lineAnimation5} 10s ease-in-out infinite;
  }

  &.line-6 {
    animation: ${lineAnimation6} 10s ease-in-out infinite;
  }

  &.line-7 {
    animation: ${lineAnimation7} 10s ease-in-out infinite;
  }

  &.line-8 {
    animation: ${lineAnimation8} 10s ease-in-out infinite;
  }

  &.line-9 {
    animation: ${lineAnimation9} 10s ease-in-out infinite;
  }

  &.line-10 {
    animation: ${lineAnimation10} 10s ease-in-out infinite;
  }
`;