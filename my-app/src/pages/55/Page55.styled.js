import styled, { keyframes } from 'styled-components';

const rotateIndicator = keyframes`
  from {
    transform: rotate(-50deg);
  }
  to {
    transform: rotate(-20deg);
  }
`;

const translateTempRoom = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-50px) scale(0.5);
  }
`;

const translateTempRoomTwo = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px) scale(0.5);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Frame55 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  transform: translate(-50%, -50%);
  border-radius: 2px;
  box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  background: #2b4147;
  color: #7a7a7a;
  line-height: 130%;
`;

export const ThermostatContainer55 = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  top: 100px;
  left: 100px;
  background: #f2f2f2;
  border-radius: 50%;
  box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.3);
  cursor: pointer;

  &:hover .control .indicator {
    animation: ${rotateIndicator} 0.5s ease-in-out forwards;
  }

  &:hover .control .temp-room {
    animation: ${translateTempRoom} 0.5s ease-in-out forwards;
  }

  &:hover .control .temp-room .two {
    animation: ${translateTempRoomTwo} 0.5s ease-in-out forwards;
  }
`;

export const Control55 = styled.div`
  position: absolute;
  z-index: 5;
  width: 130px;
  height: 130px;
  top: 35px;
  left: 35px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.2);
`;

export const Indicator55 = styled.div`
  position: absolute;
  width: 1px;
  height: 12px;
  left: 50%;
  top: 0;
  background: #6c6c6c;
  transform-origin: 0 65px;
`;

export const TempOut55 = styled.div`
  position: absolute;
  top: 18px;
  left: 6px;
  right: 0;
  text-align: center;
  font-weight: 300;
  font-size: 12px;
`;

export const TempRoom55 = styled.div`
  position: absolute;
  top: 34px;
  left: 0;
  right: 0;
  text-align: center;
  font-weight: 400;
  font-size: 60px;
  line-height: 60px;
  color: ${props => props.color};
  letter-spacing: ${props => props.spacing};
  padding-right: ${props => props.paddingRight};
  opacity: ${props => props.opacity};
  transform: ${props => props.transform};
  transition: all 0.5s ease-in-out;
`;

export const Room55 = styled.div`
  position: absolute;
  bottom: 18px;
  left: 0;
  right: 0;
  text-align: center;
  font-weight: 300;
  font-size: 12px;
`;

export const Ring55 = styled.div`
  position: absolute;
  width: 180px;
  height: 180px;
  top: 10px;
  left: 10px;
  background: #672b95;
  background: linear-gradient(90deg, #672b95 0%, #ce2e5f 100%);
  border-radius: 50%;
  box-shadow: inset 2px 4px 4px 0px rgba(0, 0, 0, 0.3);
`;

export const Bottom55 = styled.div`
  position: absolute;
  width: 95px;
  height: 95px;
  top: 50%;
  left: 50%;
  background: #f2f2f2;
  transform-origin: 0 0;
  transform: rotate(45deg);
  border-radius: 0 0 95px 0;
`;