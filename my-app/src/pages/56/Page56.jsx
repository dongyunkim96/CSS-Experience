import React from "react";
import { Center56, Flower56, Frame56, Petal56, Stigma56 } from "./Page56.styled";

const Page56 = () => {
    return (
        <Frame56>
            <Center56>
                <Flower56>
                    {[...Array(20)].map((_, index) => (
                        <Petal56 key={index} num={index}></Petal56>
                    ))}
                    <Stigma56 className="stigma"></Stigma56>
                </Flower56>
            </Center56>
        </Frame56>
    );
};

export default Page56;