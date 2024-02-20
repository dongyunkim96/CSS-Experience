import React from "react";
import { Center54, Circle54, Cloud54, Frame54, Row54 } from "./Page54.styled";

const Page54 = () => {
    return (
        <Frame54>
            <Cloud54 size="2rem" height="3" left="50%" />
            <Cloud54 size="2rem" height="3" left="80%" />
            <Cloud54 size="3rem" height="3" left="10%" className="big" />
            <Center54>
                <Row54 className="row-one">
                    {[...Array(10)].map((_, index) => (
                        <Circle54 key={index} backgroundColor={index % 2 === 0 ? '#ff9100' : '#17b7d7'} borderRadius={index % 2 === 0 ? '50%' : '100%'} />
                    ))}
                </Row54>
                <Row54 className="row-two">
                    {[...Array(10)].map((_, index) => (
                        <Circle54 key={index} backgroundColor={index % 2 === 0 ? '#17b7d7' : '#62c5e2'} borderRadius={index % 2 === 0 ? '50%' : '100%'} />
                    ))}                    
                </Row54>
                <Row54 className="row-three">
                    {[...Array(10)].map((_, index) => (
                        <Circle54 key={index} backgroundColor={index % 2 === 0 ? '#62c5e2' : '#104a70'} borderRadius={index % 2 === 0 ? '50%' : '100%'} />
                    ))}
                </Row54>
            </Center54>
        </Frame54>
    );
};

export default Page54;