import styled from "styled-components";

export const Frame90 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  margin-top: -200px;
  margin-left: -200px;
  border-radius: 2px;
  box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  background: #2980b9;
  color: #fff;
`;

export const Space90 = styled.div`
  height: 10px;
`;

export const Trigger90 = styled.div`
  position: relative;
  z-index: 10;
  box-sizing: border-box;
  float: left;
  width: 20px;
  height: 20px;
`;

export const Lines90 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Line90 = styled.div`
  margin: 19px 0px;
  height: 1px;
  width: 400px;

  .left, .right {
    float: left;
    height: 1px;
    width: 200px;
    background: #fff;
    transform-origin: 0 50%;
    transition: all .3s linear;
    transform: scaleX(0);
  }

  .right {
    transform-origin: 100% 50%;
  }
`;