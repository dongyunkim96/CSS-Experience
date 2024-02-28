import styled from "styled-components";

export const Frame78 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  margin-top: -200px;
  margin-left: -200px;
  border-radius: 30px;
  box-shadow: 4px 8px 16px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background-color: #fbda61;
  background-image: linear-gradient(45deg, #fbda61 0%, #ff5acd 100%);
  color: #333;
`;

export const Center78 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Button78 = styled.div`
  width: 180px;
  height: 60px;
  box-shadow: 
    inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1),
    4px 4px 5px 0 rgba(0, 0, 0, 0.1);
  outline: none;
  font-size: 15px;
  font-weight: 500;
  background: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    height: 0%;
    width: 2px;
  }
  &:hover {
    box-shadow: 
      4px 4px 8px 0 rgba(255, 255, 255, 0.5),
      -4px -4px 6px 0 rgba(116, 125, 136, 0.5),
      inset -4px -4px 6px 0 rgba(255, 255, 255, 0.2),
      inset 4px 4px 6px 0 rgba(0, 0, 0, 0.4);
  }
`;