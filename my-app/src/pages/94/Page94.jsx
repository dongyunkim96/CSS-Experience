import React from "react";
import { Branch94, Frame94, Leafs94, TreeContainer94, Trunk94 } from "./Page94.styled";

const Page94 = () => {
    return (
        <Frame94>
            <TreeContainer94>
                <Leafs94 />
                <Trunk94>
                    <Branch94 height={20} top={0} />
                    <Branch94 height={30} top={20} style={{ transform: "rotate(-40deg)" }} />
                    <Branch94 height={40} top={40} style={{ transform: "rotate(40deg)" }} />
                    <Branch94 height={50} top={60} style={{ transform: "rotate(-40deg)" }} />
                    <Branch94 height={60} top={80} style={{ transform: "rotate(40deg)" }} />                    
                </Trunk94>
            </TreeContainer94>
        </Frame94>
    );
};

export default Page94;