import React from "react";
import { Center79, Frame79, Line79 } from "./Page79.styled";

const Page79 = () => {
    return (
        <Frame79>
            <Center79>
                {[...Array(10)].map((_, index) => (
                    <Line79 key={`line-${index + 1}`} className={`line line-${index + 1}`} />
                ))}
            </Center79>
        </Frame79>
    );
};

export default Page79;