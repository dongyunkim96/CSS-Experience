import React from "react";
import { Candle88, Frame88 } from "./Page88.styled";

const Page88 = () => {
    return (
        <Frame88>
            <Candle88>
                <div className="shadow"></div>
                <div className="wick"></div>
                <div className="flame"></div>
            </Candle88>
        </Frame88>
    );
};

export default Page88;