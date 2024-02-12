import styled, { keyframes } from 'styled-components';

const showModel41 = keyframes`
  0% {
    transform: scale(0);
  }
  60% {
    transform: scale(1.1);
  }
  80% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
`;

const hideModal41 = keyframes`
  0% {
    transform: scale(1);
  }
  20% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(0);
  }
`;

export const Frame41 = styled.div`
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
  background: #3f3f3f;
  color: #415868;
`;

export const ModalContainer41 = styled.div`
  position: absolute;
  width: 280px;
  height: 210px;
  top: 95px;
  left: 60px;
  background: #fff;
  border-radius: 3px;
  box-shadow: 4px 8px 12px 0 rgba(0, 0, 0, 0.4);
  text-align: center;
  overflow: hidden;
  animation: ${props => (props.hide ? hideModal41 : showModel41)} 0.7s ease-in-out;
`;

export const Image41 = styled.div`
  margin-top: 24px;
`;

export const Title41 = styled.span`
  display: block;
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
  margin: 14px 0 5px 0;
`;

export const Paragraph41 = styled.p`
  font-size: 14px;
  font-weight: 300;
  line-height: 19px;
  margin: 0;
  padding: 0 30px;
`;

export const Button41 = styled.div`
  position: absolute;
  height: 40px;
  bottom: 0;
  left: 0;
  right: 0;
  background: #f65656;
  color: #fff;
  line-height: 40px;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: #ec3434;
  }
`;