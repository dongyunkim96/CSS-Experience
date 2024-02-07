import React, { useState } from 'react';
import { 
    Frame39,
    MenuIcon39,
    Menu39,
} from './Page39.styled';

const Page39 = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <Frame39>
            <MenuIcon39
              className={isActive ? 'active' : 'paused'}
              onClick={toggleMenu}
              active={isActive}
            >
                <div className='line-top'></div>
                <div className='line-bottom'></div>                
            </MenuIcon39>
            <Menu39 active={isActive} className={isActive ? 'active' : ''}>
                <ul>
                    <li>
                        <span>Home</span>
                    </li>
                    <li>
                        <span>Work</span>
                    </li>
                    <li>
                        <span>Life</span>
                    </li>
                    <li>
                        <span>Spirit</span>
                    </li>
                </ul>
            </Menu39>
        </Frame39>
    );
};

export default Page39;