import React, { useState } from "react";
import { Background60, Curtain60, Frame60, Text60 } from "./Page60.styled";

const Page60 = () => {
    const [curtainHeight, setCurtainHeight] = useState('50%');

    const handleMouseMove = (event) => {
        const mouseLocation = event.clientY - event.currentTarget.getBoundingClientRect().top;
        setCurtainHeight(`${mouseLocation}px`);
    };

    const handleMouseLeave = () => {
        setCurtainHeight('50%');
    };

    return (
        <Frame60 onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            <Background60>
                <Text60>Hover</Text60>
            </Background60>
            <Curtain60 height={curtainHeight} />
        </Frame60>
    );
};

export default Page60;