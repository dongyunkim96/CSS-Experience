import React from "react";
import { BackgroundImg59, Frame59, HOne59, HTwo59, Slice59, Text59 } from "./Page59.styled";

const Page59 = () => {
    return (
        <Frame59>
            <BackgroundImg59>
                {[...Array(10)].map((_, index) => (
                    <Slice59 key={index} />
                ))}
                <Text59>
                    <HOne59>SLICE</HOne59>
                    <HTwo59>TRANSITION</HTwo59>
                </Text59>
            </BackgroundImg59>
        </Frame59>
    );
};

export default Page59;