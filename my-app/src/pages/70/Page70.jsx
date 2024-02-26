import React from "react";
import { Card70, CardsContainer70, Frame70 } from "./Page70.styled";

const Page70 = () => {
    const CardComponent = ({ day, number }) => {
        return (
            <Card70 onClick={() => void(0)}>
                <span className="text">{day}</span>
                <span className="number">{number}</span>
            </Card70>
        );
    };

    return (
        <Frame70>
            <CardsContainer70>
                <CardComponent day="Friday" number="15" />
                <CardComponent day="Saturday" number="16" />
                <CardComponent day="Sunday" number="17" />
                <CardComponent day="Monday" number="18" />
            </CardsContainer70>
        </Frame70>
    );
};

export default Page70;