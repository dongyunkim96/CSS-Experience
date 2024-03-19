import styled from 'styled-components';

export const Frame74 = styled.div`
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
  background: #1abc9c;
  color: #333;
`;

export const Center74 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Container74 = styled.div`
  display: flex;
  justify-content: center;
`;

export const Circle74 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border: 1px solid;
  border-radius: 40px;
  background: none;
  color: white;
  margin: 10px;
  transition: all 0.5s ease-in-out;

  &:hover {
    background-color: #16a085;
    cursor: pointer;
  }

  &:focus {
    background-color: white;
    color: #1abc9c;
    border: 1px solid #1abc9c;
  }
`;
