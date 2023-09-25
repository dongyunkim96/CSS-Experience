import { styled } from "styled-components";

export const Container = styled.div`
  margin: 2rem auto;
  width: 400px;
  height: 400px;
  background-image: linear-gradient(to top right, #4ec6ca, #43389f);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Numbers = styled.div`
  margin-left: 80px;
  padding: 2rem 0;
  position: relative;
  width: 300px;
  height: 150px;
`;

export const OneOne = styled.div`
  position: absolute;
  width: 20px;
  height: 40px;
  background: #fff;
  transform: rotate(45deg);
  top: 33px;
  left: -14px;
  display: inline;
  box-shadow: 2px 2px 10px #0000004c;
  z-index: 0;
  border-radius: 5px;
`;

export const OneTwo = styled.div`
  position: absolute;
  width: 20px;
  height: 130px;
  background-color: #fff;
  z-index: 10;
  box-shadow: 2px 2px 10px #0000004c;
  border-radius: 5px;
`;

export const ZeroOne = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  border:solid 20px #fff;
  border-radius: 70px;
  display: inline;
  box-shadow: 2px 2px 10px #0000004c;
  top: 30px;
  left: 18px;
`;

export const ZeroTwo = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  border: solid 20px #fff;
  border-radius: 70px;
  box-shadow: 2px 2px 10px #0000007f;
  top: 30px;
  left: 140px;
`;

export const Days = styled.div`
  color: #fff;
  font-size: 100px;
  font-weight: bolder;
  line-height: 60px;
`;

export const Challenge = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bolder;
  line-height: 60px;
`;