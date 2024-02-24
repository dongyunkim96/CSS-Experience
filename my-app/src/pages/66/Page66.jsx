import React from "react";
import { Center66, CheckboxWrapper66, Frame66, Sparkle66, SparkleWrapper66, SparklesContainer66, ToggleInput66, ToggleLabel66 } from "./Page66.styled";

const Page66 = () => {
    const degrees = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];

    return (
        <Frame66>
            <Center66>
                <CheckboxWrapper66>
                    <ToggleInput66 type="checkbox" id="cb" />
                    <ToggleLabel66 htmlFor="cb" className="toggle" />
                    <SparklesContainer66 className="sparkles">
                        {degrees.map((degree, index) => (
                            <SparkleWrapper66 key={index} style={{ transform: `rotate(${degree}deg)` }}>
                                <Sparkle66 className={`sparkle sparkle-${index + 1}`} />
                            </SparkleWrapper66>
                        ))}
                    </SparklesContainer66>
                </CheckboxWrapper66>
            </Center66>
        </Frame66>
    );
};

export default Page66;