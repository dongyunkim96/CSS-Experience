import styled from "styled-components";

export const Frame51 = styled.div`
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
  background: #007193;
  color: #333;
`;

export const Center51 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Counter51 = styled.div`
  width: 125px;
  height: 50px;
  background: white;
  border-radius: 10px;
  color: #007193;
  display: grid;
  place-items: center;
  font-size: 2em;
  font-weight: 600;
  letter-spacing: 0.1em;
  user-select: none;
`;

export const PauseBtn51 = styled.div`
  cursor: pointer;
  display: ${({ display }) => display};
  margin-top: 10px;
  margin-left: -5px;
  align-items: center;
  justify-content: center;

  .line {
    height: 25px;
    width: 6px;
    background: white;
    margin-left: 5px;
  }
`;

export const PlayBtn51 = styled.div`
  display: ${({ display }) => display};
  cursor: pointer;
  align-items: center;
  justify-content: center;
  margin-top: 10px;

  .right-arrow {
    width: 0;
    height: 0;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-left: 25px solid white;
  }
`;