import styled from 'styled-components';

export const Frame45 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  margin-top: -200px;
  margin-left: -200px;
  border-radius: 2px;
  box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  background: #5CA4EA;
  color: #fff;
`;

export const Center45 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Button45 = styled.div`
  position: relative;
  cursor: pointer;

  span {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    text-align: center;
    line-height: 58px;
    text-transform: uppercase;
    font-size: 18px;
    letter-spacing: 1px;
    font-weight: 300;
  }

  svg {
    width: 180px;
    height: 60px;
  }

  .border {
    fill: none;
    stroke-width: 1;
  }

  .bg-line {
    fill: #5ca4ea;
    stroke: #91c9ff;
    transition: all 0.8s ease-in-out;
  }

  .hl-line {
    stroke: #fff;
    stroke-dasharray: 40 480;
    stroke-dashoffset: 40;
    transition: all 0.8s ease-in-out;
  }

  &:hover {
    .bh-line {
        fill: #4f95da;
    }

    .hl-line {
        stroke-dashoffset: -480;
    }
  }
`;