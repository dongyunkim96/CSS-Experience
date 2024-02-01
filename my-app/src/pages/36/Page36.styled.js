import styled from "styled-components";

export const Frame36 = styled.div`
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
  background: #2b3642;
  color: #333;
  font-family: 'Open Sans', Arial, Helvetica, sans-serif, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

export const Center36 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Container36 = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  box-shadow: 4px 8px 16px 0 rgba(0, 0, 0, 0.4);
`;

export const TabsContainer36 = styled.div`
  height: 40px;
  width: 100%;
  background-color: #3d4d5e;
  display: flex;
  justify-content: space-between;
`;

export const AlignLeft36 = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Tab36 = styled.div`
  cursor: pointer;
  position: relative;
  height: 40px;
  width: 40px;
  background-color: ${({ isSelected }) => (isSelected ? "#5da2ed" : "transparent")};
  transition: 0.25s background-color ease-in;
`;

export const Icon36 = styled.i`
  color: #8398ad;
`;

export const Content36 = styled.div`
  position: absolute;
  width: 90%;
  margin: 5%;
  height: calc(90% - 44px);
  opacity: ${({ isSelected }) => (isSelected ? "1" : "0")};
  transform: translateY(${({ isSelected}) => (isSelected ? "0%" : "5%")});
  transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;
`;

export const Title36 = styled.p`
  margin-top: 5px;
  font-weight: 400;
  font-size: 16px;
  color: #415868;
  margin: 0;
  padding: 0;
`;

export const Line36 = styled.div`
  width: 60%;
  height: 4px;
  background-color: #eee;
  margin-top: 8px;
`;