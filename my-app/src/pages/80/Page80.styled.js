import styled from "styled-components";

export const Frame80 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  margin-top: -200px;
  margin-left: -200px;
  border-radius: 2px;
  box-shadow: 1px 2px 10px 0 rgba(0, 0, 0, 0.25);
  overflow: hidden;
  background: #333;
  color: #fff;
`;

export const Boxes80 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  width: 100%;
  height: 100%;
`;

export const Box80 = styled.div`
  position: relative;
  flex: 1 1 auto;
  width: 20%;
  background: ${props => (props.dark ? '#34495e' : '#e67a22')};
  transition: all .5s ease-in-out;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    width: 100%;
  }
`;

export const Text80 = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.5);
  font-weight: 700;
  font-size: 30px;
  text-transform: uppercase;
  color: transparent;
  transition: all .5s ease-in-out;

  ${Box80}:hover & {
    color: #fff;
    transform: translate(-50%, -50%) scale(1);
  }
`;