import styled, { keyframes } from 'styled-components';

const gradientAnimation = keyframes`
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`;

export const Gradient61 = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  top: 0;
  left: 0;
`;

export const Frame61 = styled.div`
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
  background: #333;
  color: #fff;
`;

export const GradientOne61 = styled(Gradient61)`
  ${({ color1, color2 }) => `
    background: ${color1};
    background: -moz-linear-gradient(-45deg, ${color1} 0%, ${color2} 100%);
    background: -webkit-linear-gradient(-45deg, ${color1} 0%, ${color2} 100%);
    background: linear-gradient(135deg, ${color1} 0%, ${color2} 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='${color1}', endColorstr='${color2}', GradientType=1);    
  `}
`;

export const GradientTwo61 = styled(Gradient61)`
  z-index: 2;
  opacity: 0;
  ${({ color1, color2 }) => `
    background: ${color1};
    background: -webkit-linear-gradient(-45deg, ${color1} 0%, ${color2} 100%);
    background: linear-gradient(135deg, ${color1} 0%, ${color2} 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='${color1}', endColorstr='${color2}', GradientType=1);
  `}
  animation: ${gradientAnimation} 4s ease-in-out infinite;
`;