import React from "react";
import { Frame67, Parasol67, Pola67, ShadowPola67, ShadowTop67, Top67, TriangleRed67, TriangleShadow67, TriangleTop67 } from "./Page67.styled";

const Page67 = () => {
    return (
        <Frame67>
            <Parasol67>
                <ShadowPola67 />
                <Pola67 />
                <ShadowTop67>
                        <TriangleShadow67 rotation={0} />
                        <TriangleShadow67 rotation={30} />
                        <TriangleShadow67 rotation={60} />
                        <TriangleShadow67 rotation={90} />
                        <TriangleShadow67 rotation={120} />
                        <TriangleShadow67 rotation={150} />
                        <TriangleShadow67 rotation={180} />
                        <TriangleShadow67 rotation={210} />
                        <TriangleShadow67 rotation={240} />
                        <TriangleShadow67 rotation={270} />
                        <TriangleShadow67 rotation={300} />
                        <TriangleShadow67 rotation={330} />
                </ShadowTop67>
                <Top67>
                        <TriangleRed67 rotation={0} />
                        <TriangleTop67 rotation={30} />
                        <TriangleRed67 rotation={60} />
                        <TriangleTop67 rotation={90} />
                        <TriangleRed67 rotation={120} />
                        <TriangleTop67 rotation={150} />
                        <TriangleRed67 rotation={180} />
                        <TriangleTop67 rotation={210} />
                        <TriangleRed67 rotation={240} />
                        <TriangleTop67 rotation={270} />
                        <TriangleRed67 rotation={300} />
                        <TriangleTop67 rotation={330} />                    
                </Top67>
            </Parasol67>
        </Frame67>
    );
};

export default Page67;