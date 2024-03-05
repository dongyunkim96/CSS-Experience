import React from "react";
import { Center96, Down96, Frame96, Shadow96 } from "./Page96.styled";

const Page96 = () => {
    return (
        <Frame96>
            <Center96>
                <Down96>
                    <div className="up">
                        <div className="squeeze">
                            <div className="rotate-in">
                                <div className="rotate-out">
                                    <div className="square"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Shadow96 />
                </Down96>
            </Center96>
        </Frame96>
    );
};

export default Page96;