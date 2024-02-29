import React from "react";
import { Book84, Frame84 } from "./Page84.styled";

const Page84 = () => {
    return (
        <Frame84>
            <Book84>
                <div className="title">
                    <div className="big">Judge<br />this<br />book</div>
                    <div className="small">by its cover</div>
                </div>
            </Book84>
        </Frame84>
    );
};

export default Page84;