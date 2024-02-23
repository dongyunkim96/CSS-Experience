import styled from "styled-components";

export const Frame57 = styled.div`
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
  background: #2c3e50;
  color: #333;
`;

export const Center57 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  perspective: 1000px;
`;

export const Icosahedron57 = styled.div`
  width: 160px;
  height: 280px;
  transform-style: preserve-3d;
  transform: rotateX(-40deg) rotateY(-40deg);
  transition: all 8s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: rotateX(-400deg) rotateY(-400deg);

    .side {
        opacity: 0.5;
    }
  }
`;

export const Side57 = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 80px 138.56px 80px;
  transform-origin: 50% 100%;
  transition: all 3s ease-in-out;
`;