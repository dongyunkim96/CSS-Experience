import React, { useState } from 'react';
import './Page13.css';

const Page13 = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    
    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    }

    return (
        <div className='frame13'>
            <div className='center13'>
            <div className='imageFrame' onClick={toggleMenu}>
                    <img src='https://100dayscss.com/codepen/13-1.jpg' className='image' alt="13-1" />
                    <div className="plus">+</div>
                </div>
                <div className='imageFrame'>
                    <img src='https://100dayscss.com/codepen/13-2.jpg' className='image' alt="13-2" />
                    <div className="plus">+</div>
                </div>
                <div className='imageFrame'>
                    <img src='https://100dayscss.com/codepen/13-3.jpg' className='image' alt="13-3" />
                    <div className="plus">+</div>
                </div>
                <div className='imageFrame'>
                    <img src='https://100dayscss.com/codepen/13-4.jpg' className='image' alt="13-4" />
                    <div className="plus">+</div>
                </div>
            </div>
            <div className={`menu ${menuVisible ? 'menuVisible' : ""}`}>
                <div className={`header ${menuVisible ? 'headerToDown' : 'headerToUp'}`}></div>
                <div className='placeCross'>
                    <div className={`cross ${menuVisible ? 'crossToDown' : 'crossToUp'}`} onClick={toggleMenu}>+</div>                    
                </div>
                <div className={`centerIcon ${menuVisible ? 'iconToDown' : 'iconToUp'}`}></div>
                <div className={`content ${menuVisible ? 'contentToUp' : 'contentToDown'}`}>
                    <div className='name'>Julia Toth</div>
                    <div className='contacts'>
                        <button className='socials'><span className="fa fa-phone"></span></button>
                        <button className='socials'><span className="fa fa-comment"></span></button>
                        <button className='socials'><span className="fa fa-heart"></span></button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Page13;

