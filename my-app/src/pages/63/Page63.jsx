import React from "react";
import { Frame63, Ring63 } from "./Page63.styled";

const Page63 = () => {
    return (
        <Frame63>
            {[...Array(50)].map((_, index) => (
                <Ring63 key={index} num={index + 1} />
            ))}
        </Frame63>
    );
};

export default Page63;