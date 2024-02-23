import React from "react";
import { Center58, Form58, Frame58, StyledSlice58 } from "./Page58.styled";

const Page58 = () => {
    const radius = 200;
    const speed = '6s';
    const fill = '#fff';
    const border = '#D33526';

    return (
        <Frame58>
            <Center58>
                <Form58 radius={radius}>
                    <StyledSlice58
                      i={19}
                      offset={0}
                      radius={radius}
                      size={radius}
                      fill={fill}
                      border={border}
                      speed={speed}
                    />
                    {[...Array(9)].map((_, index) => {
                        const i = index + 1;
                        const size = radius - 2 * i * i;
                        const offset = i * 15 - (i * i) / 2;
                        const id = i + 9;
                        return (
                            <React.Fragment key={i}>
                                <StyledSlice58
                                  i={i}
                                  offset={offset}
                                  radius={radius}
                                  size={size}
                                  left={((radius - size) / 2)}
                                  top={((radius - size) / 2)}
                                  fill={fill}
                                  border={border}
                                  speed={speed}
                                />
                                <StyledSlice58
                                  i={id}
                                  offset={-offset}
                                  radius={radius}
                                  size={size}
                                  left={((radius - size) / 2)}
                                  top={((radius - size) / 2)}
                                  fill={fill}
                                  border={border}
                                  speed={speed}
                                />                                
                            </React.Fragment>
                        );
                    })}
                </Form58>
            </Center58>
        </Frame58>
    );
};

export default Page58;