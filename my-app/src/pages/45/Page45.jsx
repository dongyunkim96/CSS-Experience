import React from "react";
import {
    Frame45,
    Center45,
    Button45
} from "./Page45.styled";

const Page45 = () => {
    return (
        <Frame45>
            <Center45>
                <Button45>
                    <span>Hover me</span>
                    <svg viewBox="0 0 180 60" className="border">
                        <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
                        <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
                    </svg>
                </Button45>
            </Center45>
        </Frame45>
    );
};

export default Page45;