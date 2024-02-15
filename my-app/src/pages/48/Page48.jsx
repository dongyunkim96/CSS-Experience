import React, { useState } from 'react';
import { Back48, Bottom48, Center48, Cube48, Frame48, Front48, Left48, Top48, Right48 } from './Page48.styled';

const Page48 = () => {
    const [rotateX, setRotateX] = useState(70);
    const [rotateZ, setRotateZ] = useState(-45);

    return (
        <Frame48>
            <Center48>
                <Cube48
                  rotateX={rotateX}
                  rotateZ={rotateZ}
                  onClick={() => {
                    setRotateX(-120);
                    setRotateZ(135);
                  }}
                >
                    <Front48 />
                    <Back48 />
                    <Right48 />
                    <Left48 />
                    <Top48 />
                    <Bottom48 />
                </Cube48>
            </Center48>
        </Frame48>
    );
};

export default Page48;