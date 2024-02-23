import styled from "styled-components";

export const Frame60 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  margin-top: -200px;
  margin-left: -200px;
  border-radius: 2px;
  box-shadow: 4px 8px 16px 0 rgba(0, 0, 0, 0.1);
  background: #823e96;
  color: #fff;
  cursor: pointer;
`;

export const Background60 = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text60 = styled.h1`
  text-transform: uppercase;
  font-size: 64px;
  letter-spacing: 2px;
  color: #f8e3ff;
`;

export const Curtain60 = styled.div`
  height: ${({ height }) => height};
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(4px);
  transition: all 100ms ease-out;
`;