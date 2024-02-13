import styled from "styled-components";

export const Frame43 = styled.div`
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
  background: #404556;
`;

export const BulbSVG43 = styled.svg`
  position: absolute;
  z-index: 2;
  top: 134px;
  left: 162px;
  fill: ${(props) => (props.isHovered ? '#8C8F99' : '#FFF35C')};
  transition: all 0.5s ease-in-out;
  cursor: pointer;
`;

export const Glow43 = styled.div`
  position: absolute;
  width: 76px;
  height: 76px;
  background: #fff35c;
  border-radius: 50px;
  box-shadow: 0 0 50px 10px #fff35c;
  top: 134px;
  left: 162px;
  transition: all 0.5s ease-in-out;
  opacity: ${(props) => (props.isHovered ? 0 : 1)};
`;

export const BaseSVG43 = styled.svg`
  position: absolute;
  top: 233px;
  left: 184px;
  fill: #e5e5e5;
`;