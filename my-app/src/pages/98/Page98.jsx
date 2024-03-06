import React from "react";
import { Circle98, Edge98, Edges98, Elements98, Frame98, Square98 } from "./Page98.styled";

const Page98 = () => {
    return (
        <Frame98>
            <Edges98>
                <Edge98 className="edge t"></Edge98>
                <Edge98 className="edge l"></Edge98>
                <Edge98 className="edge r"></Edge98>
                <Edge98 className="edge b"></Edge98>
            </Edges98>
            <Elements98>
                <Square98 className="small c1"></Square98>
                <Square98 className="big c2"></Square98>
                <Square98 className="c3"></Square98>
                <Square98 className="small c4"></Square98>
                <Square98 className="c5"></Square98>
                <Square98 className="big c6"></Square98>
                <Square98 className="c7"></Square98>
                <Square98 className="small c8"></Square98>
                <Circle98 className="small c1"></Circle98>
                <Circle98 className="c2"></Circle98>
                <Circle98 className="small c3"></Circle98>
                <Circle98 className="big c4"></Circle98>
                <Circle98 className="c5"></Circle98>
                <Circle98 className="small c6"></Circle98>
                <Circle98 className="c7"></Circle98>
                <Circle98 className="small c8"></Circle98>
            </Elements98>
        </Frame98>
    );
};

export default Page98;