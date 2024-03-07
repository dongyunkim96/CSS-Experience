import styled, { css } from "styled-components";

export const Frame99 = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  top: 150px;
  left: 40%;
  background-color: #27ae60;
  border-radius: 8px;
  overflow: hidden;
`;

export const Label99 = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
  z-index: 9;
`;

export const Input99 = styled.input`
  display: none;

  &:checked {
    & ~ .bg {
        transform: translate(-50%, -50%) scale(1);
    }
    & ~ .icon {
        border-radius: 0;
        transform: rotate(180deg) scale(1.1);
        box-shadow: -4px -8px 16px rgba(0, 0, 0, 0.2);
    }
    & ~ .ring,
    & ~ .stripes {
        opacity: 0;
        transform: translate(-50%, -50%) scale(1);
        transition: transform 0.6s ease-out, opacity 0.3s ease-out 0.3s;
    }
  }
`;

export const Background99 = styled.div`
  position: absolute;
  width: 600px;
  height: 600px;
  top: 50%;
  left: 50%;
  background: #2ecc71;
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: all 0.6s ease-in-out;
`;

export const Icon99 = styled.div`
  width: 30px;
  height: 30px;
  background-color: #fff;
  top: 185px;
  left: 185px;
  border-radius: 50%;
  box-shadow: 1px 2px 4px rgb(0 0 0 / 20%);
  transition: all 0.6s ease-in-out;
`;

export const Ring99 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  width: 150px;
  height: 150px;
  border: 5px solid #fff;
  border-radius: 50%;
  transition: transform 0.6s ease-in, opacity 0.3s ease-in;
`;

export const Stripes99 = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.6s ease-in, opacity 0.3s ease-in;

  div {
    position: absolute;
    height: 26px;
    width: 4px;
    background: #fff;
    top: 137px;
    left: 148px;
  }

  ${[...Array(18).keys()].map(
    i => css`
      .s${i + 1} {
        transform: rotate(${20 * (i + 1)}deg) translateY(-120px);
      }
    `
  )}
`;