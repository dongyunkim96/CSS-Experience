import styled, { keyframes, css } from 'styled-components';

export const raindropAnimation = dropHeight => css`
  @keyframes animation {
  0% {
    transform: translate3d(40px, -${dropHeight}px, 0) scaleX(1) scaleY(1) rotate(17deg);
  }
  85% {
    transform: translate3d(0, 0, 0) scaleX(1) scaleY(1) rotate(17deg);
  }
  100% {
    transform: translate3d(0, 0, 0) scaleX(3) scaleY(0) rotate(0deg);
  }
}
`;

export const moonrise = css`
  from {
    transform: translate(-50px, 200px);
  }
  to {
    transform: translate(0px, 0px);
  }
`;

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  margin-top: -200px;
  margin-left: -200px;
  border-radius: 2px;
  box-shadow: 4px 8px 16px 0 rgba(0, 0, 0, .1);
  overflow: hidden;
  background: #fff;
  color: #333;
  font-family: 'Open Sans', Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

export const Center = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Scenery = styled.div`
  width: 400px;
  height: 330px;
  background: #1A2238;
  overflow: hidden;
  position: relative;
`;

export const Circle = styled.div`
  width: 250px;
  height: ${(props) => props.height}px;
  background: ${(props) => props.backgroundColor};
  border-radius: 50%;
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  z-index: ${(props) => props.zIndex};
`;

export const Moon = styled.div`
  width: 70px;
  height: 70px;
  background: #F6EDBD;
  border-radius: 50%;
  position: relative;
  top: 60px;
  left: 70px;
  z-index: 2;
  box-shadow: 0px 0px 12px 1px #F6EDBD;
  overflow: hidden;
  animation: ${moonrise} 1.5s ease-in-out;
`;

export const Spots = styled.div`
  background: #ECE1A8;
  border-radius: 50%;
  position: absolute;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
`;

export const Report = styled.div`
  width: 400px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  color: #394568;
`;

export const Temp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: fit-content;
  max-height: 50px;
  margin-top: -12px;
  margin-left: -30px;
`;

export const Num = styled.div`
  font-size: 45px;
`;

export const Deg = styled.div`
  width: 10px;
  height: 10px;
  border: 1.6px solid #394568;
  border-radius: 50%;
  margin-top: -10px;
`;

export const Weather = styled.div`
  font-size: 16px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-top: -12px;
  margin-left: -38px;
`;

export const DaysInfo = styled.div`
  width: 100px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: -12px;
  margin-right: -35px;
`;

export const DayInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TempInfo = styled.div`
  display: flex;
`;

export const TempOne = styled.div`
  display: flex;
  flex-direction: row;
`;

export const OneNum = styled.div`
  font-weight: 550;
`;

export const OneDeg = styled.div`
  width: 3px;
  height: 3px;
  border: 1.4px solid #394568;
  border-radius: 50%;
`;

export const Raindrops = styled.div`
  .raindrop {
    position: absolute;
    background-color: #7FC1F9;
    border-radius: 50%;
    z-index: 4;

    &::before, &::after {
        content: "";
        position: absolute;
        background-color: #7FC1F9;
    }
  }

  .raindrop.small {
    top: calc(400px - (90px + 4px));
    height: 4px;
    width: 4px;
    opacity: .3;

    &::before {
        top: calc(4px / 4 * -1);
        left: calc(4px / 8);
        height: calc(4px - (4px / 4));
        width: calc(4px - (4px / 4));
        border-radius: calc(4px / 2.66);
    }

    &::after {
        top: calc(4px / 1.6 * -1);
        left: calc(4px / 4);
        height: calc(4px + (4px / 4));
        width: calc(4px / 2);
        border-radius: 50%;
    }
  }

  .raindrop.medium {
    top: calc(400px - (90px + 6px));
    height: 6px;
    width: 6px;
    opacity: 0.6;

    &::before {
      top: calc(6px / 4 * -1);
      left: calc(6px / 8);
      height: calc(6px - (6px / 4));
      width: calc(6px - (6px / 4));
      border-radius: calc(6px / 2.66);
    }

    &::after {
      top: calc(6px / 1.6 * -1);
      left: calc(6px / 4);
      height: calc(6px + (6px / 4));
      width: calc(6px / 2);
      border-radius: 50%;
    }
  }
  .raindrop.big {
    top: calc(400px - (90px + 8px));
    height: 8px;
    width: 8px;

    &::before {
      top: calc(8px / 4 * -1);
      left: calc(8px / 8);
      height: calc(8px - (8px / 4));
      width: calc(8px - (8px / 4));
      border-radius: calc(8px / 2.66);
    }

    &::after {
      top: calc(8px / 1.6 * -1);
      left: calc(8px / 4);
      height: calc(8px + (8px / 4));
      width: calc(8px / 2);
      border-radius: 50%;
    }
  }
`;
