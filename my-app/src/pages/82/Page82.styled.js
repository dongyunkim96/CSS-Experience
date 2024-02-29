import styled from 'styled-components';

export const Frame82 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  margin-top: -200px;
  margin-left: -200px;
  border-radius: 2px;
  box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  background: #bdcedb;
  color: #fff;
  perspective: 150px;
`;

export const InputCheckbox82 = styled.input.attrs({ type: 'checkbox', name: 'cb', id: 'cb' })`
  display: none;
`;

export const ButtonLabel82 = styled.label`
  position: absolute;
  display: block;
  width: 100px;
  height: 50px;
  top: 175px;
  left: 150px;
  border-radius: 25px;
  text-align: center;
  line-height: 46px;
  text-transform: uppercase;
  font-weight: 600;
  transform-style: preserve-3d;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  box-shadow: 4px 8px 12px 0 rgba(0, 0, 0, 0.1);
  background-color: ${props => (props.isChecked ? '#64c760' : '#fff')};
  color: ${props => (props.isChecked ? '#fff' : '#34485e')};

  &:hover {
    transform: scale(1.05);
  }
`;

export const FrontSpan82 = styled.span`
  box-sizing: border-box;
  position: absolute;
  display: block;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  color: #34495e;
  background: inherit;
  border: 2px solid #fff;
  border-radius: 25px;
  backface-visibility: hidden;
  transform: rotateX(0);
`;

export const BackSpan82 = styled.span`
  position: absolute;
  display: block;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  color: #fff;
  background: #64c760;
  border: 2px solid #fff;
  border-radius: 25px;
  transform: rotateX(180deg);
`;
