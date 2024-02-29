import React from "react";
import { Frame83, Ring83, Stripe83, WarpContainer83 } from "./Page83.styled";

const Page83 = () => {
  const numberOfRings = 30;
  const numberOfStripes = 24;
  const animationDuration = '4s';
  const rings =[];

  for (let i = 1; i <= numberOfRings; i++) {
    const timeOffset = `${(i - 1) * (parseInt(animationDuration) / numberOfRings) * -1}s`;
    const ringStripes = [];
    for (let j = 1; j <= numberOfStripes; j++) {
        const degree = ((360 / numberOfStripes) * (j - 1)) - (Math.random() * 10);
        const offset = 100 - (Math.random() * 40);
        ringStripes.push(<Stripe83 key={j} degree={degree} offset={offset} />);
    }
    rings.push(<Ring83 key={i} index={i} timeOffset={timeOffset}>{ringStripes}</Ring83>);
  }

  return (
    <Frame83>
        <WarpContainer83>
            {rings}
        </WarpContainer83>
    </Frame83>
  );
};

export default Page83;