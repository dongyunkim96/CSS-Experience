import React, { useState, useEffect} from 'react';
import {
    Frame,
    Center,
    CircleContainer,
    DateText,
    TimeText,
    Details,
    HeartIcon,
    Cal,
    AnimatedCircle
} from './Page10.styled';

const Page10 = () => {
    const [time, setTime] = useState(new Date());
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timeInterval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        const dateInterval = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(timeInterval);
            clearInterval(dateInterval);
        }
    }, []);

    return (
        <Frame>
            <Center>
                <CircleContainer>
                    <DateText>
                        {date.toLocaleDateString('en-us', {
                            weekday: 'short',
                            day: '2-digit',
                            month: 'short',
                            year: 'numeric',
                        })}
                    </DateText>
                    <TimeText>
                        {time.toLocaleTimeString('en-us', { hour12: false})}
                    </TimeText>
                    <Details>
                        <HeartIcon>
                            <i className='bx bxs-heart'></i> 81
                        </HeartIcon>
                        <Cal>1248 KCAL</Cal>
                    </Details>
                </CircleContainer>
                <AnimatedCircle />
            </Center>
        </Frame>
    );
};
export default Page10;