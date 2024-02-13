import React from "react";
import {
    Container44, RectItem44,
} from "./Page44.styled";

const Page44 = () => {
    const rectangles = [];
    for (let i = 1; i <= 20; i++) {
        rectangles.push(
            <RectItem44
              key={i}
              className={`rect rect-${i}`}
              size={200 - i * 10}
              top={100 + i * 5}
              left={100 + i * 5}
              color={`rgb(${78 + i * 8}, ${78 + i * 8}, ${78 + i * 8})`}
              index={i}
              delay={(i - 1) * 0.0333333}
            />
        );
    }
    return (
        <Container44>{rectangles}</Container44>
    );
};

export default Page44;