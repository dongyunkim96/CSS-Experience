import styled, { keyframes } from "styled-components";

const upperAnimation = keyframes`
  0% {
    transform: rotate(-75deg);
  }
  100% {
    transform: rotate(-85deg);
  }
`;

const lowerAnimation = keyframes`
  0% {
    transform: rotate(-75deg);
  }
  100% {
    transform: rotate(-105deg);
  }
`;

export const Frame97 = styled.div`
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
  background: #8e44ad;
  color: #fff;
`;

export const Puppet97 = styled.div`
  position: absolute;
  top: 90px;
  left: 50%;
  transform: translate(-50%, 0);
`;

export const Head97 = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  margin: 0 auto 10px auto;
  background: #fff;
  border-radius: 50%;
`;

export const Body97 = styled.div`
  position: relative;
  height: 100px;
  width: 50px;
  background: #fff;

  .arm {
    position: absolute;
    top: 0;

    &-left {
        left: -10px;

        .upper {
            transform: rotate(10deg);

            .lower {
                transform: rotate(-5deg);
            }
        }
    }

    &-right {
        right: -10px;

        .upper {
            transform: rotate(-75deg);
            animation: ${upperAnimation} 1s ease-in-out infinite alternate;

            .lower {
                transform: rotate(-75deg);
                animation: ${lowerAnimation} 1s ease-in-out infinite alternate;
            }
        }
    }

    .upper {
        position: relative;
        height: 50px;
        width: 16px;
        background: #fff;
        border-radius: 8px;
        transform-origin: 8px 8px;

        .lower {
            position: absolute;
            height: 52px;
            width: 16px;
            bottom: -36px;
            left: 0;
            background: #fff;
            border-radius: 8px;
            transform-origin: 8px 8px;
        }
    }
  }

  .leg {
    position: absolute;
    top: 78px;

    &-left {
        left: 0px;
    }

    &-right {
        right: 0px;
    }

    .upper {
        position: relative;
        height: 70px;
        width: 24px;
        background: #fff;
        border-radius: 12px;
        transform-origin: 12px 12px;

        .lower {
            position: absolute;
            height: 70px;
            width: 24px;
            bottom: -46px;
            left: 0;
            background: #fff;
            border-radius: 12px;
            transform-origin: 12px 12px;
        }
    }
  }
`;