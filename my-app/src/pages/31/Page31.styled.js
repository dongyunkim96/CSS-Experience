import styled, { keyframes } from "styled-components";

export const Frame31 = styled.div`
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
  background: #4c4ba2;
  color: #333;
  font-family: 'Open Sans', Helvetica, sans-serif;
  -moz-osx-font-smoothing: grayscale;
`;

export const Center31 = styled.div`
  position: relative;
  padding: 40px;
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DotBox31 = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Dot31 = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 12px;
  background: white;
`;

export const DotAnimation31 = keyframes`
  0%, 100% {
    transform: translateX(50px);
  }
  50% {
    transform: translateX(-50px);
  }
`;

export const DotWithAnimation31 = styled(Dot31)`
  animation: ${DotAnimation31} 2s ease-in-out infinite;
`;