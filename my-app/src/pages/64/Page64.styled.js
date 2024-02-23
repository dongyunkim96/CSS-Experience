import styled from "styled-components";

export const Frame64 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  margin-top: -200px;
  margin-left: -200px;
  border-radius: 2px;
  box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.3);
  overflow: hidden;
  background: #2c3e50;
  color: #2c3e50;
`;

export const Button64 = styled.div`
  position: absolute;
  z-index: 2;
  width: 200px;
  height: 70px;
  top: 160px;
  left: 100px;
  color: #2c3e50;
  font-size: 25px;
  font-weight: 400;
  line-height: 68px;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:before {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    content: '';
    display: block;
    width: 200px;
    height: 70px;
    background: #fff;
    transform: translate(0, 0);
    transition: all 0.3s ease-in-out;
    box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.1);
  }

  &:after {
    position: absolute;
    z-index: -2;
    top: 0;
    left: 0;
    content: '';
    display: block;
    width: 200px;
    height: 70px;
    background: #8e44ad;
    transform: translate(13px, 12px);
    transition: all 0.3s ease-in-out;
    box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.2);
  }

  &:hover {
    transform: translate(13px, 12px);
    color: #fff;

    &:before {
        background: #8e44ad;
        box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.2);
    }

    &:after {
        transform: translate(-15px, -10px);
        background: #fff;
    }
  }
`;