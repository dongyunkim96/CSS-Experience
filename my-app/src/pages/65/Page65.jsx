import React from "react";
import { Center65, Frame65, Square65 } from "./Page65.styled";

const Page65 = () => {
    const angles = [0, 40, 80, 120, 160, 200, 240, 280, 320];

    return (
        <Frame65>
            <Center65>
                {angles.map((angle, index) => (
                    <Square65 key={`s${index}`} angle={angle} style={{ transform: `rotate(${angle}deg)`}} />
                ))}
            </Center65>
        </Frame65>
    );
};

export default Page65;