import React from "react";
import { Center57, Frame57, Icosahedron57, Side57 } from "./Page57.styled";

const Page57 = () => {
    const sideStyles = [
        { borderColor: 'transparent transparent #F60196 transparent', transform: 'translateZ(129.2px) rotateZ(90deg) rotateX(159.095deg)' },
        { borderColor: 'transparent transparent #fff transparent', transform: 'translateZ(129.2px) rotateZ(-90deg) rotateX(159.095deg)' },
        { borderColor: 'transparent transparent #F60196 transparent', transform: 'translateZ(-129.2px) rotateZ(90deg) rotateX(-159.095deg)' },
        { borderColor: 'transparent transparent #fff transparent', transform: 'translateZ(-129.2px) rotateZ(-90deg) rotateX(-159.095deg)' },
        { borderColor: 'transparent transparent #F60196 transparent', transform: 'rotateY(-90deg) translateZ(129.2px) rotateX(20.905deg)' },
        { borderColor: 'transparent transparent #fff transparent', transform: 'rotateY(-90deg) translateZ(129.2px) rotateX(159.095deg)' },
        { borderColor: 'transparent transparent #F60196 transparent', transform: 'rotateY(-90deg) translateZ(-129.2px) rotateX(-20.905deg)' },
        { borderColor: 'transparent transparent #fff transparent', transform: 'rotateY(-90deg) translateZ(-129.2px) rotateX(-159.095deg)' },
        { borderColor: 'transparent transparent #F60196 transparent', transform: 'translateY(129.2px) rotateX(69.095deg)' },
        { borderColor: 'transparent transparent #fff transparent', transform: 'translateY(129.2px) rotateX(-69.095deg)' },
        { borderColor: 'transparent transparent #F60196 transparent', transform: 'translateY(-129.2px) rotateX(110.905deg)' },
        { borderColor: 'transparent transparent #fff transparent', transform: 'translateY(-129.2px) rotateX(-110.905deg)' },
        { borderColor: '#9B1FE8 transparent transparent transparent', transform: 'translateY(-129.2px) translateX(80px) rotateX(-135deg) rotateY(-35.264deg) rotateZ(-8deg)' },
        { borderColor: '#9B1FE8 transparent transparent transparent', transform: 'translateY(-129.2px) translateX(80px) rotateX(135deg) rotateY(35.264deg) rotateZ(-8deg)' },
        { borderColor: '#9B1FE8 transparent transparent transparent', transform: 'translateY(-129.2px) translateX(-80px) rotateX(-135deg) rotateY(35.264deg) rotateZ(8deg)' },
        { borderColor: '#9B1FE8 transparent transparent transparent', transform: 'translateY(-129.2px) translateX(-80px) rotateX(135deg) rotateY(-35.264deg) rotateZ(8deg)' },
        { borderColor: '#9B1FE8 transparent transparent transparent', transform: 'translateY(129.2px) translateX(80px) rotateX(45deg) rotateY(-35.264deg) rotateZ(-8deg)' },
        { borderColor: '#9B1FE8 transparent transparent transparent', transform: 'translateY(129.2px) translateX(80px) rotateX(-45deg) rotateY(35.264deg) rotateZ(-8deg)' },
        { borderColor: '#9B1FE8 transparent transparent transparent', transform: 'translateY(129.2px) translateX(-80px) rotateX(45deg) rotateY(35.264deg) rotateZ(8deg)' },
        { borderColor: '#9B1FE8 transparent transparent transparent', transform: 'translateY(129.2px) translateX(-80px) rotateX(-45deg) rotateY(-35.264deg) rotateZ(8deg)' }
      ];

      return (
        <Frame57>
            <Center57>
                <Icosahedron57>
                    {sideStyles.map((style, index) => (
                        <Side57 key={index} className={`side side-${index + 1}`} style={style}></Side57>
                    ))}
                </Icosahedron57>
            </Center57>
        </Frame57>
      );
};

export default Page57;