import styled from 'styled-components';

// Define styled components
export const Frame = styled.div`
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
  background: #4fab9f;
  color: #333;
  font-family: "Open Sans", Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

export const Center = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Card = styled.div`
  width: 280px;
  height: 240px;
  overflow: hidden;
  border-radius: 2px;
  box-shadow: 8px 8px 23px -9px rgba(57, 57, 57, 0.86);
`;

export const CardHeader = styled.div`
  height: 65px;
  background: #F1BA64;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 0.4;
  padding: 0 0.7rem;
`;

export const Date = styled.div`
  color: #fff;
  font-size: .5rem;
  >h2 {
    font-size: 1rem;
  }
`;

export const Revenue = styled.div`
  text-align: end;
  color: #fff;
  font-size: .5rem;
  >h2 {
    font-size: 1rem;
  }
`;

export const CardBody = styled.div`
  height: 300px;
  background: #fff;
`;

export const Hints = styled.legend`
  text-align: end;
  padding: 0.9rem 0.4rem;
  display: flex;
  justify-content: right;
  gap: 1.5rem;
`;

export const Hint = styled.span`
  font-size: 0.6rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const Bar = styled.div`
  width: 14px;
  height: 3px;
  border-radius: 2px;
`;

export const BlueBar = styled(Bar)`
  background: #2d7cfb;
`;

export const RedBar = styled(Bar)`
  background: #ff3f3f;
`;

export const Statistic = styled.div`
  position: relative;
  height: 81px;
  width: 80%;
  margin: 0 auto;
  margin-left: 10px;
  margin-bottom: 0.6rem;
`;

export const Line = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 1px;
  background: #f2f2f2;
  top: 0;

  &.line-2 {
    top: 40px;
  }

  &.line-3 {
    top: 80px;
    bottom: 0;
  }
`;

export const Svg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Polyline = styled.polyline`
  fill: none;
  stroke-width: 2;
  stroke-linecap: round;
`;

export const Data = styled.div`
  position: relative;

  svg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  polyline {
    fill: none;
    stroke-width: 2;
    stroke-linecap: round;
  }
`;

export const RedData = styled(Data)`
  polyline {
    stroke: #ff3f3f;
  }
`;

export const BlueData = styled(Data)`
  polyline {
    stroke: #2d7cfb;
  }
`;

export const Tooltip = styled.div`
  position: absolute;
  bottom: 13px;
  left: 50%;
  transform: translate3d(-50%, 10px, 0);
  font-weight: 600;
  font-size: 11px;
  line-height: 11px;
  color: #fff;
  padding: 8px 6px;
  border-radius: 3px;
  visibility: hidden;
  opacity: 0;
  transition: transform 0.4s ease-out 0s, opacity 0.4s ease-out 0s;

  &:after {
    position: absolute;
    display: block;
    content: "";
    height: 6px;
    width: 6px;
    left: 50%;
    margin-left: -3px;
    bottom: -3px;
    transform: rotate(45deg);
  }
`;

export const Point = styled.div`
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 3px;
  cursor: pointer;
  z-index: 10;

  &:hover ${Tooltip} {
    visibility: visible;
    opacity: 1;
    transform: translate3d(-50%, 0, 0);
  }
`;

export const RedPoint = styled(Point)`
  background: #ff3f3f;
`;

export const BluePoint = styled(Point)`
  background: #fff;
`;

export const Days = styled.div`
  width: 280px;
  margin: 0 auto;
  font-size: 12px;
`;

export const Day = styled.span`
  display: block;
  float: left;
  width: 14.2857142857%;
  text-align: center;
`;