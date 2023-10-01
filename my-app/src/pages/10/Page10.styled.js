import styled, { keyframes } from 'styled-components';

const beat = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.4);
  }
`;

const spin = keyframes`
  0% {
    strokeDashoffset: 600;
  }
  100% {
    strokeDashoffset: -600;
  }
`;

const Circle = ({ className }) => {
    <Svg className={className} height="400" width="400">
        <circle
          cx="200"
          cy="200"
          r="95px"
          stroke="#F9595B"
          strokeWidth="3"
          fill="transparent"
          strokeDasharray="600"
          strokeDashoffset="600"
        />
    </Svg>
};

export const Frame = styled.div`
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
  background: #4c4c4c;
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

export const CircleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 200px;
  height: 200px;
  background: #242424;
  border: 5px dotted #F8585B;
  border-radius: 50%;
`;

export const DateText = styled.p`
  color: #fff;
  font-weight: 600;
  position: absolute;
  top: 25%;
  font-size: .8rem;
  padding-bottom: 1rem;
  text-transform: uppercase;
`;

export const TimeText = styled.p`
  color: #fff;
  font-size: 2rem;
`;

export const Details = styled.div`
  position: absolute;
  bottom: 30%;
  width: 150px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 0.8rem;
`;

export const HeartIcon = styled.div`
  color: #f8585b;
  animation: ${beat} .5s alternate infinite;
`;

export const Cal = styled.div`
  color: #fff;
  font-weight: 600;
`;

export const Svg = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-90deg);
`;

export const AnimatedCircle = styled(Circle)`
  animation: ${spin} 4s linear forwards infinite;
`;