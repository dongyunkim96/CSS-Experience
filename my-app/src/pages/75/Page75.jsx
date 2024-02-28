import React from "react";
import { Ball75, Center75, Disc75, Frame75 } from "./Page75.styled";

const Page75 = () => {
    return (
        <Frame75>
            <Center75>
                <Ball75>
                    <Disc75 className="disc disc-1" />
                    <Disc75 className="disc disc-2" />
                    <Disc75 className="disc disc-3" />
                    <Disc75 className="disc disc-4" />
                    <Disc75 className="disc disc-5" />
                    <Disc75 className="disc disc-6" />
                </Ball75>
            </Center75>
        </Frame75>
    );
};

export default Page75;