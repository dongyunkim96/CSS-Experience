import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle27 = createGlobalStyle`
  body {
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
    height: 100vh;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const Frame27 = styled.div`
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
  background: #fff;
  color: #333;
  font-family: 'Open Sans', Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

export const Center27 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  grid-template-rows: 1fr 3fr;
  width: 100%;
  height: 100%;
`;

export const Top27 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TopTitle27 = styled.div`
  font-weight: 900;
  font-size: 1.5em;
`;

export const Line27 = styled.div`
  position: absolute;
  width: 80%;
  height: 1px;
  background-color: #000;
  top: 25%;
  left: 10%;
`;

export const List27 = styled.div`
  width: 80%;
  margin: 10% auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-weight: 600;
`;

export const ListItem27 = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
`;
export const CheckboxInput27 = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

export const CustomCheckbox27 = styled.label`
  width: 14px;
  height: 14px;
  border: 2px solid #000;
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;
`;

export const CheckedCheckbox27 = styled(CustomCheckbox27)`
  border: none;
  transition: border 0.6s ease;

  &::before {
    width: 16px;
    height: 16px;
    content: '✔';
    display: block;
    color: #008080;
    margin: 2px;
    position: relative;
    transition: width 0.3s ease, height 0.3s ease;
  }
`;

export const Text27 = styled.div`
  font-weight: ${({ isChecked }) => (isChecked ? 1000 : 'normal')};
`;