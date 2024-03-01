import React from "react";
import { Dot85, Frame85, Wave85 } from "./Page85.styled";

const Page85 = () => {
    const dots = Array.from({ length: 200 }, (_, i) => i + 1);

    return (
        <Frame85>
            <Wave85>
                {dots.map((i) => (
                    <Dot85 key={i} offset={i < 100 ? i * i / 70 : (200 - i) * (200 - i) / 70} />
                ))}
            </Wave85>
        </Frame85>
    );
};

export default Page85;