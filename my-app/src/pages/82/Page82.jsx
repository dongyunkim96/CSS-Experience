import React, { useState } from "react";
import { BackSpan82, ButtonLabel82, Frame82, FrontSpan82, InputCheckbox82 } from "./Page82.styled";

const Page82 = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleClick = () => {
        setIsChecked(!isChecked)
    };

    return (
        <Frame82>
            <InputCheckbox82 className="cb" checked={isChecked} onChange={handleClick} />
            <ButtonLabel82 className="button" htmlFor="cb" isChecked={isChecked}>
                <FrontSpan82 className="front">{isChecked ? 'done' : 'send'}</FrontSpan82>
                <BackSpan82 className="back">done</BackSpan82>
            </ButtonLabel82>
        </Frame82>
    );
};

export default Page82;