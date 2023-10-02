import React from 'react';
import {
    Frame,
    InvisibleMan,
    LeftLeg,
    RightLeg,
    Shoe,
    Floor
} from './Page11.styled';

const Page11 = () => {
    return (
        <Frame>
            <InvisibleMan>
                <LeftLeg>
                    <Shoe />
                </LeftLeg>
                <RightLeg>
                    <Shoe />
                </RightLeg>
            </InvisibleMan>
            <Floor />
        </Frame>
    );
};

export default Page11;