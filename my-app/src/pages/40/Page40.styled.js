import styled from "styled-components";

export const Frame40 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  transform: translate(-50%, -50%);
  border-radius: 2px;
  box-shadow: 4px 8px 16px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
  color: #333;
`;

export const ImgContainer40 = styled.div`
  position: absolute;
  z-index: ${({ active }) => (active ? '50' : '5')};
  width: 32%;
  height: 32%;
  transform: ${({ active }) => (active ? 'scale(3.066)' : 'scale(1)')};
  transition: transform 0.5s ease-in-out, z-index 0.5s ease-in;
  top: ${({ position }) => position.top};
  left: ${({ position }) => position.left};
`;

export const Img40 = styled.img`
  width: 100%;
  height: auto;
  opacity: ${({ active }) => (active ? '1' : '0')};
  transition: opacity 0.4s ease-in-out;
`;