import React, { useState, useEffect } from 'react';
import { Center51, Counter51, Frame51, PauseBtn51, PlayBtn51 } from './Page51.styled';

const Page51 = () => {
    const [curNum, setCurNum] = useState(0);
    const [paused, setPaused] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!paused) {
                setCurNum(prevNum => prevNum + 1);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [paused]);

    const handlePauseClick = () => {
        setPaused(true);
    };

    const handlePlayClick = () => {
        setPaused(false);
    };

    return (
        <Frame51>
            <Center51>
                <Counter51>{curNum.toString().padStart(4, '0')}</Counter51>
                <PauseBtn51 display={paused ? 'none' : 'flex'} onClick={handlePauseClick}>
                    <div className='line'></div>
                    <div className='line'></div>
                </PauseBtn51>
                <PlayBtn51 display={paused ? 'flex' : 'none'} onClick={handlePlayClick}>
                    <div className='right-arrow'></div>
                </PlayBtn51>
            </Center51>
        </Frame51>
    );
};

export default Page51;