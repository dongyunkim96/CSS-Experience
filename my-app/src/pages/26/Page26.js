import React, { useState } from "react";
import './Page26.css';

const Page26 = () => {
    const [active, setActive] = useState(1);

    const handleButtonClick = () => {
        let nextActive = active + 1;
        if (nextActive > 3) {
            nextActive = 1;
        }
        setActive(nextActive);
    };

    return (
        <div className="frame26">
            {[1, 2, 3].map((number) => (
                <div
                  key={number}
                  className={`card26 ${active === number ? 'active' : 'inactive'}`}
                >
                    <div className="number-bg26"></div>
                    <div className="number26">{number}</div>
                    <div className="text26">
                        <span className="headline26">
                            {number === 1
                              ? 'The couch'
                              : number === 2
                              ? 'Falling is learning'
                              : 'Flowers and rainbows'}
                        </span>
                        <p>
                            {number === 1
                              ? 'If you want to grow, get outside your comfort zone.'
                              : number === 2
                              ? 'Pick yourself up, dust yourself off, and start again.'
                              : 'Always be yourself, unless you can be a unicorn.'}
                        </p>
                    </div>
                    <div className="button26" onClick={handleButtonClick}>
                        OK
                    </div>
            </div>
            ))}
        </div>
    );
};

export default Page26;