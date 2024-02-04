import React, { useState } from "react";
import {
    Frame38,
    Logo38,
    LogoContainer38,
} from './Page38.styled';

const Page38 = () => {
  const [isWhiteLogoNormal, setIsWhiteLogoNormal] = useState(true);
  const [isPurpleLogoSmall, setIsPurpleLogoSmall] = useState(true);

  const handleFrameClick = () => {
    setIsWhiteLogoNormal((prev) => !prev);
    setIsPurpleLogoSmall((prev) => !prev);
  };

  return (
    <Frame38 onClick={handleFrameClick}>
        <LogoContainer38>
            <Logo38 
              className={`logo white ${isWhiteLogoNormal ? 'normal' : 'big'}`}
              isWhite
            >
                <path d="M-4.67739102e-15,21.1739614 L-5.32907052e-15,20 L34.6410162,0 L69.2820323,20 L69.2820323,21.1739614 C65.1281093,26.3215737 62.6410162,32.870341 62.6410162,40 C62.6410162,47.129659 65.1281093,53.6784263 69.2820323,58.8260386 L69.2820323,60 L34.6410162,80 L1.687539e-14,60 L1.62237105e-14,58.8260386 C4.15392303,53.6784263 6.64101615,47.129659 6.64101615,40 C6.64101615,32.870341 4.15392303,26.3215737 2.88213897e-13,21.1739614 Z"></path>
            </Logo38>
        </LogoContainer38>
        <LogoContainer38>
            <Logo38 
              className={`logo purple ${isPurpleLogoSmall ? 'small' : 'normal'}`}
            >
                <path d="M-4.67739102e-15,21.1739614 L-5.32907052e-15,20 L34.6410162,0 L69.2820323,20 L69.2820323,21.1739614 C65.1281093,26.3215737 62.6410162,32.870341 62.6410162,40 C62.6410162,47.129659 65.1281093,53.6784263 69.2820323,58.8260386 L69.2820323,60 L34.6410162,80 L1.687539e-14,60 L1.62237105e-14,58.8260386 C4.15392303,53.6784263 6.64101615,47.129659 6.64101615,40 C6.64101615,32.870341 4.15392303,26.3215737 2.88213897e-13,21.1739614 Z"></path>
            </Logo38>
        </LogoContainer38>
    </Frame38>
  );
};

export default Page38;