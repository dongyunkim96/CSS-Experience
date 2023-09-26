import React, { useState } from "react";
import {
  Frame,
  Center,
  MenuIcon,
  AnimatedLine,
  Content,
} from "./Page2.styled";

const Page2 = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const resetAnimation = () => {
    const icon = document.querySelector(".menu-icon");
    if (icon) {
      icon.classList.remove("no-animation");
    }
  };

  return (
    <Content>
      <Frame>
        <Center>
          <MenuIcon
            isActive={isActive}
            onClick={() => {
              toggleMenu();
              resetAnimation();
            }}
          >
            <AnimatedLine className={`line-1 ${isActive ? "active" : ""}`} />
            <AnimatedLine className={`line-2 ${isActive ? "active" : ""}`} />
            <AnimatedLine className={`line-3 ${isActive ? "active" : ""}`} />
          </MenuIcon>
        </Center>
      </Frame>
    </Content>
  );
};

export default Page2;
