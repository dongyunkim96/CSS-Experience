import React from "react";
import { Center91, Frame91, Loader91 } from "./Page91.styled";

const Page91 = () => {
    return (
        <Frame91>
            <Center91>
                <Loader91>
                    <div className="plane bottom"></div>
                    <div className="plane left"></div>
                    <div className="plane right"></div>
                    <div className="plane back"></div>
                    <div className="plane front"></div>
                    <div className="plane top"></div>
                    <div className="plane fill-top"></div>
                </Loader91>
            </Center91>
        </Frame91>    
    );
};

export default Page91;