import React from "react";
import { Frame89, HorizontalStripes89, Stripe89, VerticalStripes89 } from "./Page89.styled";

const Page89 = () => {
    return (
        <Frame89>
            <HorizontalStripes89>
                {[...Array(100)].map((_, index) => (
                    <Stripe89 key={index} horizontal className={`stripe stripe-${index + 1}`} />
                ))}
            </HorizontalStripes89>
            <VerticalStripes89>
                {[...Array(100)].map((_, index) => (
                    <Stripe89 key={index} className={`stripe stripe-${index + 1}`} />
                ))}
            </VerticalStripes89>
        </Frame89>
    );
};

export default Page89;