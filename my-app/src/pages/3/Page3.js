import React, { useState } from "react";
import {
    Frame,
    Center,
    Circle,
    Sky,
    Sun,
    SideRight,
    Shadow,
    SideLeft,
    Ground
} from './Page3.styled';

const Page3 = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <Frame>
      <Center>
        <Circle onClick={handleClick} className={isActive ? "active" : ""}>
          <Sky />
          <Sun />
          <SideLeft />
          <SideRight />
          <Shadow />
          <Ground />
        </Circle>
      </Center>
    </Frame>
  );
};

export default Page3;