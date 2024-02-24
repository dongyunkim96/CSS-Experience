import React, { useState } from 'react';
import { Checkbox68, Frame68, Label68, Microphone68 } from './Page68.styled';

const Page68 = ({ bgColor }) => {
    const [checked, setChecked] = useState(false);

    const handleCheckboxChange = () => {
        setChecked(prev => !prev);
    };

    return (
        <Frame68 bgColor={bgColor}>
            <Checkbox68
              type="checkbox"
              id="cb-1"
              name='cb'
              className='checkbox'
              checked={checked}
              onChange={handleCheckboxChange}
            />
            <Label68 htmlFor="cb-1" className='label'></Label68>
            <Microphone68 bgColor={bgColor} checked={checked} className="microphone">
                <svg width="100px" height="100px" viewBox='0 0 100 100'>
                    <circle className='circle' cx="50" cy="50" r="47" />
                </svg>
                <div className='icon'>
                    <div className='body'>
                        <div className='fill'></div>
                    </div>
                    <div className='foot_v'></div>
                    <div className='foot_h'></div>
                </div>
                <div className='dots'>
                    <div className='dot dot-1'></div>
                    <div className='dot dot-2'></div>
                    <div className='dot dot-3'></div>
                </div>
            </Microphone68>
        </Frame68>
    );
};

export default Page68;