import React from "react";
import { Body97, Frame97, Head97, Puppet97 } from "./Page97.styled";

const Page97 = () => {
    return (
        <Frame97>
            <Puppet97>
                <Head97 />
                <Body97>
                    <div className="arm arm-left">
                        <div className="upper">
                            <div className="lower"></div>
                        </div>
                    </div>
                    <div className="arm arm-right">
                        <div className="upper">
                            <div className="lower"></div>
                        </div>
                    </div>
                    <div className="leg leg-left">
                        <div className="upper">
                            <div className="lower"></div>
                        </div>
                    </div>
                    <div className="leg leg-right">
                        <div className="upper">
                            <div className="lower"></div>
                        </div>
                    </div>
                </Body97>
            </Puppet97>
        </Frame97>
    );
};

export default Page97;