import React from "react";
import {
    Frame31,
    Center31,
    DotWithAnimation31,
    DotBox31,
} from "./Page31.styled";

const Page31 = () => {
    const dots = Array.from({ length: 15 }, (_, index) => (
        <DotWithAnimation31 key={index} />
    ));

    return (
        <Frame31>
            <Center31>
                <DotBox31>
                    {dots}
                </DotBox31>
            </Center31>
        </Frame31>
    );
};

export default Page31;