import React from "react";
import { 
    Center35,
    Frame35,
    LoaderCircle35,
    Svg35,
    BackgroundCircle35,
} from "./Page35.styled";

const Page35 = () => {
    return (
        <Frame35>
            <Center35>
                <Svg35 viewBox="0 0 100 100">
                    <BackgroundCircle35 cx="50" cy="50" r="46" />
                    <LoaderCircle35 cx="50" cy="50" r="46" />
                </Svg35>
            </Center35>
        </Frame35>
    );
};

export default Page35;