import styled from "styled-components";

export const Frame47 = styled.div`
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
  background: #de4738;
  color: #fff;
`;

export const Pixel47 = styled.div`
  float: left;

  input {
    display: none;
  }

  label {
    box-sizing: border-box;
    display: block;
    width: 20px;
    height: 20px;
    border: 1px solid #e24e3f;
    cursor: pointer;

    &:hover {
        background: #ec5142;
        border-color: #e24e3f;
    }
  }

  input:checked ~ label {
    background: #fff;
    border-color: #fff;
  }
`;