import React from "react";
import {
    Frame46,
    Dot46,
    Ring46,
    rotateAnimation46Css,
} from './Page46.styled';

const Page46 = () => {
    return (
        <Frame46>
            {[...Array(6)].map((_, i) => (
                <Ring46 key={i} animation={rotateAnimation46Css(i * 5)}>
                    {[...Array(12)].map((_, j) => (
                        <Dot46 key={j} className={`dot dot-${j + 1}`} />
                    ))}
                </Ring46>
            ))}
        </Frame46>
    );
};

export default Page46;