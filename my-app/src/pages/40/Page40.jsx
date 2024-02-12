import React, { useState } from 'react';
import { Frame40, Img40, ImgContainer40 } from './Page40.styled';

const Page40 = () => {
    const [activeImg, setActiveImg] = useState(null);

    const imageAnimation40 = (imgNumber) => {
        setActiveImg(imgNumber);
    };

    return (
        <Frame40>
            <ImgContainer40 position={{ top: '1%', left: '1%'}} active={activeImg === 1} onClick={() => imageAnimation40(1)}>
                <Img40 src="https://100dayscss.com/codepen/40-1.jpg" alt="" active={activeImg === 1} />
            </ImgContainer40>
            <ImgContainer40 position={{ top: '1%', left: '34%'}} active={activeImg === 2} onClick={() => imageAnimation40(1)}>
                <Img40 src="https://100dayscss.com/codepen/40-2.jpg" alt="" active={activeImg === 2} />
            </ImgContainer40>
            <ImgContainer40 position={{ top: '1%', left: '1%'}} active={activeImg === 3} onClick={() => imageAnimation40(1)}>
                <Img40 src="https://100dayscss.com/codepen/40-3.jpg" alt="" active={activeImg === 3} />
            </ImgContainer40>
            <ImgContainer40 position={{ top: '34%', left: '1%'}} active={activeImg === 4} onClick={() => imageAnimation40(1)}>
                <Img40 src="https://100dayscss.com/codepen/40-4.jpg" alt="" active={activeImg === 4} />
            </ImgContainer40>
            <ImgContainer40 position={{ top: '34%', left: '34%'}} active={activeImg === 5} onClick={() => imageAnimation40(1)}>
                <Img40 src="https://100dayscss.com/codepen/40-5.jpg" alt="" active={activeImg === 5} />
            </ImgContainer40>
            <ImgContainer40 position={{ top: '34%', left: '1%'}} active={activeImg === 6} onClick={() => imageAnimation40(1)}>
                <Img40 src="https://100dayscss.com/codepen/40-6.jpg" alt="" active={activeImg === 6} />
            </ImgContainer40>
            <ImgContainer40 position={{ top: '1%', left: '1%'}} active={activeImg === 7} onClick={() => imageAnimation40(1)}>
                <Img40 src="https://100dayscss.com/codepen/40-7.jpg" alt="" active={activeImg === 7} />
            </ImgContainer40>
            <ImgContainer40 position={{ top: '1%', left: '34%'}} active={activeImg === 8} onClick={() => imageAnimation40(1)}>
                <Img40 src="https://100dayscss.com/codepen/40-8.jpg" alt="" active={activeImg === 8} />
            </ImgContainer40>
            <ImgContainer40 position={{ top: '1%', left: '1%'}} active={activeImg === 9} onClick={() => imageAnimation40(1)}>
                <Img40 src="https://100dayscss.com/codepen/40-9.jpg" alt="" active={activeImg === 9} />
            </ImgContainer40>
        </Frame40>
    );
};

export default Page40;