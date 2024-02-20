import React from "react";
import { Bottom55, Control55, Frame55, Indicator55, Ring55, Room55, TempOut55, TempRoom55, ThermostatContainer55 } from "./Page55.styled";

const Page55 = () => {
    return (
        <Frame55>
            <ThermostatContainer55>
                <Ring55>
                    <Bottom55 />
                </Ring55>
                <Control55>
                    <Indicator55 className="indicator" />
                    <TempOut55 className="temp-out">23°</TempOut55>
                    <TempRoom55 className="temp-room" color="#873183" spacing="-8px" paddingRight='12px'>19<span>°</span></TempRoom55>
                    <TempRoom55 className="temp-room two" color="#98317a" spacing="-6px" paddingRight="2px" opacity="0">20<span>°</span></TempRoom55>
                    <Room55 className="room">Bedroom</Room55>
                </Control55>
            </ThermostatContainer55>
        </Frame55>
    );
};

export default Page55;