import React from "react";
import { Ear95, Eye95, Frame95, Head95, Nose95, Nostril95, Pig95 } from "./Page95.styled";

const Page95 = () => {
    return (
        <Frame95>
            <Pig95>
                <Head95>
                    <Ear95 className="ear-l" />
                    <Ear95 className="ear-r" />
                    <Eye95 className="eye-l" />
                    <Eye95 className="eye-r" />
                    <Nose95>
                        <Nostril95 className="nostril-l" />
                        <Nostril95 className="nostril-r" />
                    </Nose95>
                </Head95>
            </Pig95>
        </Frame95>
    );
};

export default Page95;