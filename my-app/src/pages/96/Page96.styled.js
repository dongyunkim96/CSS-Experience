import styled, { keyframes } from "styled-components";

const downAnimation = keyframes`
  0% {
    transform: translateY(-100px);
  }
  20%, 100% {
    transform: translateY(0);
  }
`;

const upAnimation = keyframes`
  0%, 75% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100px);
  }
`;

const squeezeAnimation = keyframes`
  0%, 4% {
    transform: scale(1);
  }
  45% {
    transform: scale(1.8, 0.4);
  }
  100% {
    transform: scale(1);
  }
`;

const rotateInAnimation = keyframes`
  0% {
    transform: rotate(-135deg);
  }
  20%, 100% {
    transform: rotate(0deg);
  }
`;

const rotateOutAnimation = keyframes`
  0%, 80% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(135deg);
  }
`;

const shadowAnimation = keyframes`
  0%, 100% {
    transform: scaleX(0.5) scaleY(0);
  }
  45%, 50% {
    transform: scaleX(1.8);
  }
`;

export const Frame96 = styled.div`
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
  background: #3498db;
  color: #fff;
`;

export const Center96 = styled.div`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Down96 = styled.div`
  position: relative;
  animation: ${downAnimation} 1.6s ease-in infinite both;

  .up {
    animation: ${upAnimation} 1.6s ease-in-out infinite both;

    .squeeze {
        transform-origin: 50% 100%;
        animation: ${squeezeAnimation} 1.6s ease-in-out infinite both;

        .rotate-in {
            animation: ${rotateInAnimation} 1.6s cubic-bezier(.72, .03, .28, .97) infinite both;

            .rotate-out {
                animation: ${rotateOutAnimation} 1.6s ease-out infinite both;

                .square {
                    width: 100px;
                    height: 100px;
                    background: #fff;
                }
            }
        }
    }
  }
`;

export const Shadow96 = styled.div`
  position: absolute;
  z-index: -1;
  bottom: -2px;
  left: -4px;
  right: -4px;
  height: 2px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 0px 8px rgba(0, 0, 0, 0.2);
  animation: ${shadowAnimation} 1.6s ease-in-out infinite both;
`;