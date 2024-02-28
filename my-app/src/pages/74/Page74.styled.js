import styled from "styled-components";

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
  background-color: #1abc9c;
  color: #333;
`;

export const Center74 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Pagination74 = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 24px;
  align-items: center;
`;

export const Input74 = styled.input`
  all: unset;
  border: 1px solid white;
  border-radius: 100%;
  width: 30px;
  height: 30px;
  color: white;
  margin: 0;
  transition: 0.8s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const Label74 = styled.label`
  color: white;
  margin: 0;
  margin-left: -44px;
`;

export const CheckedInput74 = styled(Input74)`
  transform: 0.8s;
  background-color: white;
`;

export const CheckedLabel74 = styled(Label74)`
  color: #1abc9c;
`;