import styled from "styled-components";

export const Frame48 = styled.div`
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
  background: #e47512;
  color: #fff;
`;

export const Center48 = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  top: 100px;
  left: 100px;
  perspective: 1000px;
`;

export const Cube48 = styled.div`
  width: 200px;
  height: 200px;
  position: absolute;
  transform-style: preserve-3d;
  transform: translateZ(-100px) rotateX(${props => props.rotateX}deg) rotateZ(${props => props.rotateZ}deg);
  transition: all 1s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateZ(-100px) rotateX(-120deg) rotateZ(135deg);
  }
`;

const Side48 = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
`;

export const Front48 = styled(Side48)`
  transform: rotateY(0deg) translateZ(100px);
  background: #fff;
`;

export const Back48 = styled(Side48)`
  transform: rotateX(180deg) translateZ(100px);
  background: #ccc;
`;

export const Right48 = styled(Side48)`
  transform: rotateY(90deg) translateZ(100px);
  background: #ddd;
`;

export const Left48 = styled(Side48)`
  transform: rotateY(-90deg) translateZ(100px);
  background: #eee;
`;

export const Top48 = styled(Side48)`
  transform: rotateX(90deg) translateZ(100px);
  background: #eee;
`;

export const Bottom48 = styled(Side48)`
  transform: rotateX(-90deg) translateZ(100px);
  background: #ddd;
`;