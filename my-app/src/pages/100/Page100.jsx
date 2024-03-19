import React from "react";
import { Circle100, DD100, DiagonalLight, Dot100, EE100, Frame100, Light100, NN100, Word100 } from "./Page100.styled";

const Page100 = () => {
    return (
        <Frame100>
            <Word100>
                <EE100>
                    <Light100 style={{ top: 0, left: 0, height: '120px', width: '6px' }} />
                    <Light100 style={{ top: 0, left: 0, height: '6px', width: '63px' }} />
                    <Light100 style={{ top: '56px', left: '9px', height: '6px', width: '50px' }} />
                    <Light100 style={{ bottom: 0, right: 0, height: '6px', width: '63px' }} />
                </EE100>
                <NN100>
                    <Light100 style={{ top: 0, left: 0, height: '120px', width: '6px' }} />
                    <DiagonalLight style={{ top: '-10px', left: '20px' }} />
                    <Light100 style={{ top: 0, right: 0, height: '120px', width: '6px' }} />                                        
                </NN100>
                <DD100>
                    <Light100 style={{ top: 0, left: 0, height: '120px', width: '6px' }} />
                    <div style={{ position: 'absolute', top: 0, right: 0, height: '120px', width: '6px' }}>
                      <Circle100 />
                      <Dot100 style={{ top: '10px', right: '10px' }} />
                      <Dot100 style={{ bottom: '10px', right: '10px' }} />
                    </div>
                </DD100>
            </Word100>
        </Frame100>
    );
};

export default Page100;