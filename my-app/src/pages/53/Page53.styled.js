import styled from "styled-components";

export const Frame53 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  margin-top: -200px;
  margin-left: -200px;
  border-radius: 2px;
  box-shadow: 1px 2px 8px 0 rgba(0, 0, 0, 0.3);
  overflow: hidden;
  background: #506172;
  color: #fff;
`;

export const Center53 = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 300px;
  height: 40px;
  top: 180px;
  left: 50px;
  background: #fff;
  border-radius: 3px;
  box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.3);
  padding: 5px 15px;
`;

export const InputRange53 = styled.input.attrs({ type: 'range', min: 0, max: 100})`
  -webkit-appearance: none;
  margin: 0;
  width: 270px;
  height: 30px;
  &:focus {
    outline: none;
  }
  &::-webkit-slider-runnable-track {
    width: 270px;
    height: 4px;
    cursor: pointer;
    background: #7ad175;
    border: none;
    border-radius: 2px;
    box-shadow: inset 0 1px 1px 0 rgba(0, 0, 0, 0.2);
    transition: all .2s ease;
  }
  &::-webkit-slider-thumb {
    border: 2px solid #7ad175;
    height: 24px;
    width: 24px;
    border-radius: 24px;
    background: #fff url(https://100dayscss.com/codepen/slider-thumb.png) center center no-repeat;
    background-size: 50% 50%;
    cursor: pointer;
    box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.1);
    -webkit-appearance: none;
    margin-top: -11px;
    margin-left: -11px;
  }
`;