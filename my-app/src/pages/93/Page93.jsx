import React from "react";
import { Base93, Frame93, Hanger93, Inside93, Knob93, Line93, Lock93, Number93, Ring93 } from "./Page93.styled";

const Page93 = () => {
    return (
        <Frame93>
            <Lock93>
                <Hanger93>
                    <Inside93 />
                </Hanger93>
                <Base93>
                    <Ring93 className="ring">
                        {[...Array(40)].map((_, index) => (
                            <Line93 key={index} className={`line line-${index + 1}`} />
                        ))}
                        {[...Array(8)].map((_, index) => (
                            <Number93 key={index} className={`number number-${index}`}>
                                {index * 5}
                            </Number93>
                        ))}
                    </Ring93>
                    <Knob93 className="knob" />
                </Base93>
            </Lock93>
        </Frame93>
    );
};

export default Page93;