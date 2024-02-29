import React from "react";
import { BallMove81, Floor81, Frame81 } from "./Page81.styled";

const Page81 = () => {
    return (
        <Frame81>
            <Floor81 />
            <BallMove81>
                <div className="ball"></div>
            </BallMove81>
        </Frame81>
    );
};

export default Page81;