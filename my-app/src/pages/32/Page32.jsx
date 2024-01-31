import React, { useState } from 'react';
import { 
    Frame32,
    Counter32,
    NumberSpan32,
    Minus32,
    Plus32,
    Number32
 } from './Page32.styled';

const Page32 = () => {
    const [number, setNumber] = useState(0);
    
    const updateNumber = (value) => {
        setNumber(number + value);
    };

    return (
        <Frame32>
            <Counter32>
                <Minus32 onClick={() => updateNumber(-1)}>
                    <div className='line'></div>
                </Minus32>
                <Number32>
                    <NumberSpan32 className={number > 0 ? "fadeOutUp32" : "fadeOutDown32"}>
                        {number}
                    </NumberSpan32>
                    <NumberSpan32 className={number > 0 ? "fadeInUp32" : "fadeInDown32"}>
                        {number}
                    </NumberSpan32>
                </Number32>
                <Plus32 onClick={() => updateNumber(1)}>
                    <div className='line-h'></div>
                    <div className='line-v'></div>
                </Plus32>
            </Counter32>
        </Frame32>
    )
};

export default Page32;