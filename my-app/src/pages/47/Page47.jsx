import React from "react";
import { Frame47, Pixel47 } from "./Page47.styled";

const Page47 = () => {
    const initialCheckedPixels = [130, 131, 149, 150, 151, 152, 168, 169, 170, 171, 172, 173, 187, 188, 190, 191, 193, 194, 207, 208, 209, 210, 211, 212, 213, 214, 229, 232, 248, 250, 251, 253, 267, 269, 272, 274];
    const renderPixels = () => {
        const pixels = [];
        for (let i = 1; i <= 400; i++) {
            const isChecked = initialCheckedPixels.includes(i)
;            pixels.push(
                <Pixel47 key={i}>
                    <input type="checkbox" id={`pixel-${i}`} defaultChecked={isChecked} />
                    <label className="tab" htmlFor={`pixel-${i}`}></label>
                </Pixel47>
            );
        }
        return pixels;
    };
    
    return <Frame47>{renderPixels()}</Frame47>;
};

export default Page47;