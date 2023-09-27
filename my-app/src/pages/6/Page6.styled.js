import styled, { keyframes } from 'styled-components';

// Define the keyframes for the rotation animation
export const rotate360 = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Define the brown color
const brown = '#786450';

// Define the styled components
export const Frame = styled.div`
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
  background: linear-gradient(to top right, #EEBE6C 0%, #CA7C4E 100%);
  color: #333;
  font-family: 'Open Sans', Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

export const Center = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .card {
    width: 300px;
    height: 300px;
    border-radius: 4px;
    overflow: hidden;
    display: flex;
    background: #fff;
    box-shadow: 4px 4px 18px 0px rgba(71, 66, 66, 0.75);

    .profile {
      width: 60%;
      height: 100%;
      background: #fff;

      .image {
        display: flex;
        flex-flow: column;
        margin-top: 30px;
        margin-left: 60px;

        .circle-1 {
          margin-top: 30px;
          margin-left: 60px;
          position: absolute;
          border-color: ${brown} ${brown} ${brown} transparent;
          border-style: solid;
          border-width: 1px;
          width: 76px;
          height: 76px;
          top: -3px;
          left: -3px;
          border-radius: 50%;
          box-sizing: border-box;
          transition: all 1.5s ease-in-out;
        }

        .circle-2 {
          margin-top: 30px;
          margin-left: 60px;
          position: absolute;
          border-color: ${brown} transparent ${brown} ${brown};
          border-style: solid;
          border-width: 1px;
          width: 82px;
          height: 82px;
          top: -6px;
          left: -6px;
          border-radius: 50%;
          box-sizing: border-box;
          transition: all 1.5s ease-in-out;
        }

        img {
          display: block;
          border-radius: 50%;
          width: 70px;
          height: 70px;
          cursor: pointer;
        }

        &:hover {
          .circle-1 {
            animation: ${rotate360} 1.5s ease-in-out;
          }

          .circle-2 {
            animation: ${rotate360} -1.5s ease-in-out;
          }
        }
      }

      .info {
        height: 35%;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        gap: 0.8rem;

        .content {
          h5,
          p {
            color: ${brown};
            padding: 0;
            margin: 0;
            text-align: center;
          }

          p {
            font-size: 0.7rem;
          }
        }
      }

      .actions {
        height: 35%;
        display: flex;
        flex-flow: column;
        align-items: center;
        gap: 0.6rem;

        .btn {
          height: 28px;
          width: 115px;
          color: ${brown};
          font-size: 0.7rem;
          font-weight: bold;
          background: transparent;
          border: 1px solid ${brown};
          border-radius: 2rem;
          transition: all 0.3s linear;

          &:hover {
            background: ${brown};
            color: #fff;
          }
        }
      }
    }

    .statistic {
      width: 40%;
      height: 100%;
      display: flex;
      flex-flow: column;

      .mini-card {
        height: calc(100% / 3);
        background: #F5E8DF;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        transition: all 0.4s ease-in-out;

        h3,
        p {
          margin: 0;
          padding: 0;
          color: ${brown};
        }

        p {
          font-size: 0.7rem;
        }

        &:hover {
          cursor: pointer;
          background: #dfcdbf;
        }
      }

      .middle {
        border: 2px solid #fff;
        border-left: none;
        border-right: none;
        box-sizing: border-box;
      }
    }
  }
`;