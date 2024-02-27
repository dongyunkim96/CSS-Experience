import React from "react";
import { Center72, Frame72, Ring72 } from "./Page72.styled";

const Page72 = () => {
    return (
        <Frame72>
            <Center72>
                {[...Array(20)].map((_, index) => (
                    <Ring72 key={index} index={index} />
                ))}
            </Center72>
        </Frame72>
    );
};

export default Page72;