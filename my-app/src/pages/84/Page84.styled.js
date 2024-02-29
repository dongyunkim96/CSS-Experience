import styled from "styled-components";

export const Frame84 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  margin-top: -200px;
  margin-left: -200px;
  border-radius: 2px;
  box-shadow: 1px 2px 10px 0 rgba(0, 0, 0, 0.07);
  overflow: hidden;
  background: #e3d7ea;
  color: #fff;
`;

export const Book84 = styled.div`
  position: absolute;
  width: 200px;
  height: 280px;
  top: 60px;
  left: 100px;
  border-radius: 2px 4px 4px 2px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2), -1px 4px 4px 0 rgba(0, 0, 0, 0.3);
  background: #1e1e1e;
  background: -moz-linear-gradient(45deg, #1e1e1e 0%, #4f4f4f 100%);
  background: -webkit-linear-gradient(45deg, #1e1e1e 0%, #4f4f4f 100%);
  background: linear-gradient(45deg, #1e1e1e 0%, #4f4f4f 100%);

  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 20px;
    top: 0;
    left: 0;
    bottom: 0;
    border-radius: 2px 0 0 2px;
    background: -moz-linear-gradient(left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 20%, rgba(0, 0, 0, 0.15) 49%, rgba(0, 0, 0, 0.15) 84%, rgba(0, 0, 0, 0) 100%);
    background: -webkit-linear-gradient(left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 20%, rgba(0, 0, 0, 0.15) 49%, rgba(0, 0, 0, 0.15) 84%, rgba(0, 0, 0, 0) 100%);
    background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 20%, rgba(0, 0, 0, 0.15) 49%, rgba(0, 0, 0, 0.15) 84%, rgba(0, 0, 0, 0) 100%);
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 10px;
    top: -1px;
    right: 25px;
    bottom: -1px;
    border-radius: 1px;
    box-shadow: -1px 0px 1px rgba(0, 0, 0, 0.4);
    background: #a90329;
    background: -moz-linear-gradient(left, #a90329 0%, #8e0028 12%, #a90329 25%, #8e0028 37%, #a90329 50%, #8e0028 62%, #a90329 75%, #8e0028 87%, #a90329 100%);
    background: -webkit-linear-gradient(left, #a90329 0%, #8e0028 12%, #a90329 25%, #8e0028 37%, #a90329 50%, #8e0028 62%, #a90329 75%, #8e0028 87%, #a90329 100%);
    background: linear-gradient(to right, #a90329 0%, #8e0028 12%, #a90329 25%, #8e0028 37%, #a90329 50%, #8e0028 62%, #a90329 75%, #8e0028 87%, #a90329 100%);    
  }

  .title {
    position: absolute;
    top: 55px;
    left: 33px;
    
    .big {
        font-size: 30px;
        line-height: 100%;
        font-weight: 900;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: #ccc;
    }

    .small {
        font-size: 13px;
        line-height: 160%;
        font-weight: 400;
        font-style: italic;
        padding-left: 2px;
        color: #ccc;
    }
  }
  `;