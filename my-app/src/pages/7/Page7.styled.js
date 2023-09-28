import styled, { keyframes } from 'styled-components';

const blue = '#5F98CD';
const blueDark = '#264057';
const blueLight = '#B2DAFF';

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  margin-top: -200px;
  margin-left: -200px;
  border-radius: 2px;
  box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.3);
  background: ${blueDark};
  color: #666666;
  font-family: 'Open Sans', Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
`;

export const showMenu = keyframes`
  from {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  to {
    transform: translate3d(150px, 0, 0);
    opacity: 0;
  }
`;

export const Panel = styled.div`
  position: absolute;
  z-index: 2;
  height: 300px;
  width: 300px;
  top: 50px;
  left: 50px;
  background: #fff;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
  transition: all 0.5s ease-in-out;

  &.show-menu {
    animation: ${showMenu} 0.5s ease-in-out;
    transform: translate3d(150px, 0, 0);
    opacity: 0;
  }
`;

export const Header = styled.div`
  height: 60px;
  width: 100%;
  background: ${blue};
`;

export const MenuIcon = styled.div`
  position: absolute;
  width: 29px;
  height: 15px;
  top: 23px;
  left: 20px;
  cursor: pointer;

  &:hover {
    .dash-top,
    .dash-bottom,
    .circle {
      background: #fff;
    }
  }
`;

export const DashTop = styled.div`
  position: absolute;
  width: 20px;
  height: 3px;
  top: 0;
  left: 0;
  background: ${blueLight};
  border-radius: 3px;
  transition: all 0.2s ease-in-out;
`;

export const DashBottom = styled(DashTop)`
  width: 29px;
  top: auto;
  bottom: 0;
`;

export const Circle = styled.div`
  position: absolute;
  height: 7px;
  width: 7px;
  border-radius: 4px;
  top: -2px;
  right: 0;
  background: ${blueLight};
  transition: all 0.2s ease-in-out;
`;

export const Title = styled.div`
  display: block;
  text-align: center;
  line-height: 60px;
  color: #fff;
  font-weight: 600;
  font-size: 15px;
`;

export const SearchInput = styled.input`
  box-sizing: border-box;
  position: absolute;
  top: 13px;
  right: 55px;
  width: 230px;
  height: 34px;
  border-radius: 17px;
  border: none;
  background: #fff;
  padding: 0 17px;
  font-size: 13px;
  color: #666;
  transition: all 0.3s ease-in-out;
  transform: translateX(15px);
  opacity: 0;
  pointer-events: none;

  &:focus {
    outline: none;
  }

  &.active {
    transform: translateX(0);
    opacity: 1;
    pointer-events: all;
  }
`;

export const SearchIcon = styled.div`
  position: absolute;
  z-index: 2;
  font-size: 21px;
  color: ${blueLight};
  top: 18px;
  right: 20px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #fff;
  }
`;

export const Notifications = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;
`;

export const Line = styled.div`
  position: absolute;
  top: 0;
  left: 27px;
  bottom: 0;
  width: 3px;
  background: #EBEBEB;
`;

export const Notification = styled.div`
  position: relative;
  z-index: 2;
  margin: 25px 20px 25px 43px;

  &:hover {
    color: ${blue};
    cursor: pointer;
  }
`;

export const CircleNotification = styled.div`
  box-sizing: border-box;
  position: absolute;
  height: 11px;
  width: 11px;
  background: #fff;
  border: 2px solid ${blue};
  box-shadow: 0 0 0 3px #fff;
  border-radius: 6px;
  top: 0;
  left: -20px;
`;

export const Time = styled.div`
  display: block;
  font-size: 11px;
  line-height: 11px;
  margin-bottom: 2px;
`;

export const Text = styled.p`
  font-size: 15px;
  line-height: 20px;
  margin: 0;
`;

export const BoldText = styled.b`
  font-weight: 600;
`;

export const Menu = styled.div`
  position: absolute;
  width: 170px;
  height: 270px;
  top: 65px;
  left: 50px;
  background: #43627D;
  border-radius: 3px;
  transition: all 0.5s ease-in-out;
  transform: translate3d(20px, 0, 0);

  &.active {
    box-shadow: 5px 5px 8px 0 rgba(0, 0, 0, 0.2);
    transform: translate3d(0, 0, 0);
  }
`;

export const Ul = styled.ul`
  margin: 0;
  padding: 10px 0;
`;

export const Li = styled.li`
  color: #93B2CD;
  margin: 0;
  padding: 18px 17px;
  list-style: none;
  font-size: 14px;
  line-height: 14px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #fff;
    background: #385269;
  }

  span {
    display: block;
    float: left;
    margin-right: 8px;
    margin-top: -1px;
  }

  .fa-gear,
  .fa-user,
  .fa-bell {
    margin-top: 0;
  }
`;

export const Keyframes = {
  hereAmI: keyframes`
    from {
      transform: translate3d(0, 50px, 0);
      opacity: 0;
    }
    to {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  `,
};

