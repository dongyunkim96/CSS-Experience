import styled from "styled-components";

export const Frame70 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  margin-top: -200px;
  margin-left: -200px;
  border-radius: 2px;
  box-shadow: 1px 2px 10px 0 rgba(0, 0, 0, 0.15);
  overflow: hidden;
  background: #512626;
  color: #fff;
`;

export const CardsContainer70 = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`;

export const Card70 = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 200px;
  height: 200px;
  background: #e27474;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  text-align: center;
  padding-top: 55px;

  &:hover {
    box-shadow: inset 2px 2px 4px 1px rgba(0, 0, 0, 0.25);
    transform: scale(0.95);
  }

  .text {
    display: block;
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
  }

  .number {
    display: block;
    font-weight: 700;
    font-size: 60px;
    line-height: 100%;
  }
`;