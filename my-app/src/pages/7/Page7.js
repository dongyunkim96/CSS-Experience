import React, { useState } from 'react';
import {
    Container,
    Panel,
    Header,
    MenuIcon,
    DashTop,
    DashBottom,
    Circle,
    Title,
    SearchInput,
    SearchIcon,
    Notifications,
    Line,
    Notification,
    CircleNotification,
    Time,
    Text,
    BoldText,
    Menu,
    Ul,
    Li
  } from "./Page7.styled";

const Page7 = () => {
    const [isSearchActive, setSearchActive] = useState(false);
    const [isMenuActive, setMenuActive] = useState(false);
  
    const handleSearchClick = () => {
      setSearchActive(!isSearchActive);
    };
  
    const handleMenuClick = () => {
      setMenuActive(!isMenuActive);
    };
  
    return (
      <Container>
        <Panel className={isMenuActive ? 'show-menu' : ''}>
          <Header>
            <MenuIcon onClick={handleMenuClick}>
              <DashTop></DashTop>
              <DashBottom></DashBottom>
              <Circle></Circle>
            </MenuIcon>
            <Title>Notifications</Title>
            <SearchInput
              type="text"
              className={isSearchActive ? 'active' : ''}
              placeholder="Search ..."
            />
            <SearchIcon onClick={handleSearchClick}>?</SearchIcon>
          </Header>
  
          <Notifications>
            <Line></Line>
            {[1, 2, 3].map((_, index) => (
              <Notification key={index} index={index + 2}>
                <CircleNotification></CircleNotification>
                <Time>9:24 AM</Time>
                <Text>
                  <BoldText>John Walker</BoldText> posted a photo on your wall.
                </Text>
              </Notification>
            ))}
          </Notifications>
        </Panel>
  
        <Menu className={isMenuActive ? 'active' : ''}>
          <Ul>
            <Li>
              <span className="fa fa-dashboard"></span>Dashboard
            </Li>
            <Li>
              <span className="fa fa-user"></span>Profile
            </Li>
            <Li>
              <span className="fa fa-bell"></span>Notifications
            </Li>
            <Li>
              <span className="fa fa-comments"></span>Messages
            </Li>
            <Li>
              <span className="fa fa-gear"></span>Settings
            </Li>
          </Ul>
        </Menu>
      </Container>
    );
  };
  
  export default Page7;