import React from "react";
import { Bar52, Center52, Dot52, Frame52 } from './Page52.styled';

const Page52 = () => {
    const bars = [];
    const barAmount = 40;
    const dotAmount = 12;

    for (let i = 0; i <  barAmount; ++i) {
        const dots = [];
        const rotate = (360 / barAmount) * i;
        for (let j = 0; j < dotAmount; ++j) {
            dots.push(<Dot52 key={j} index={j + 1} total={dotAmount} />);
        }
        bars.push(<Bar52 key={i} rotate={rotate}>{dots}</Bar52>);
    }

    return (
        <Frame52>
            <Center52>{bars}</Center52>
        </Frame52>
    );
};

export default Page52;