import React from "react";
import { BallX292, BallX92, BallY292, BallY92, BottomHalf92, Frame92, TopHalf92 } from "./Page92.styled";

const Page92 = () => {
    return (
        <Frame92>
            <BottomHalf92>
                <TopHalf92>
                    <BallX92 className="ball ball-x" />
                    <BallX292 className="ball ball-x-2" />
                    <BallY92 className="ball ball-y" />
                    <BallY292 className="ball ball-y-2" />
                </TopHalf92>
            </BottomHalf92>
        </Frame92>
    );
};

export default Page92;