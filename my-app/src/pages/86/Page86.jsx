import React from "react";
import { Ball86, BallFive86, BallOne86, Cradle86, Frame86 } from "./Page86.styled";

const Page86 = () => {
    return (
        <Frame86>
            <Cradle86>
                <BallOne86 />
                <Ball86 />
                <Ball86 />
                <Ball86 />
                <BallFive86 />
            </Cradle86>
        </Frame86>
    );
};

export default Page86;