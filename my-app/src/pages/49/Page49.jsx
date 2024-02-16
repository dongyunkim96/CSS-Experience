import React, { useState } from "react";
import { Dot49, Frame49, Pulse49 } from "./Page49.styled";

const Page49 = () => {
    const [mousePosition, setMousePosition] = useState({ left: '50%', top: '50%' });

    const handleMouseMove = e => {
        setMousePosition({
            left: `${e.nativeEvent.offsetX}px`,
            top: `${e.nativeEvent.offsetY}px`
        });
    };

    const handleMouseLeave = () => {
        setMousePosition({ left: '50%', top: '50%' });
    };

    return (
        <Frame49 onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            <Dot49 top={mousePosition.top} left={mousePosition.left}>
                <Pulse49 />
            </Dot49>
        </Frame49>
    )
};

export default Page49;