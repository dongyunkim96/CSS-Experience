import React, { useState } from "react";
import { Background99, Frame99, Icon99, Input99, Label99, Ring99, Stripes99 } from "./Page99.styled";

const Page99 = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <Frame99>
            <Input99 type="checkbox" id="button" checked={isChecked} onChange={handleCheckboxChange} />
            <Label99 htmlFor="button"></Label99>
            <Background99 className="bg" />
            <Icon99 className="icon" />
            <Ring99 className="ring" />
            <Stripes99 className="stripes">
                {[...Array(18).keys()].map(i => (
                    <div key={i} className={`s${i + 1}`} />
                ))}
            </Stripes99>
        </Frame99>
    );
};

export default Page99;