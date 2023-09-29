import React from "react";
import {
    Frame,
    Center,
    Ball,
    Blubb,
    Sparkle
} from './Page8.styled';

const Page8 = () => {
    return (
        <Frame>
            <Center>
              <Ball />
              {[...Array(8)].map((_, i) => (
                  <Blubb key={i} i={i} />
              ))}
              {[...Array(10)].map((_, i) => (
                  <Sparkle key={i} i={i} />
              ))}
            </Center>
        </Frame>
    );
};

export default Page8;