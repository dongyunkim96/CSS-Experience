import React from "react";
import { Box80, Boxes80, Frame80, Text80 } from "./Page80.styled";

const Page80 = () => {
    return (
        <Frame80>
            <Boxes80>
                <Box80 dark onClick={() => {}}>
                    <Text80>First</Text80>
                </Box80>
                <Box80 onClick={() => {}}>
                    <Text80>Second</Text80>
                </Box80>
                <Box80 dark onClick={() => {}}>
                    <Text80>Third</Text80>
                </Box80>
                <Box80 onClick={() => {}}>
                    <Text80>Fourth</Text80>
                </Box80>
            </Boxes80>
        </Frame80>
    );
};

export default Page80;