import React from 'react';
import {
    HomeContainer,
    ButtonContainer,
    NumberButton
} from './Home.styled';

const Home = () => {
    const buttonCount = 100;
    const buttons = [];

    for (let i = 1; i <= buttonCount; i++) {
        buttons.push(
            <NumberButton key={i}>{i}</NumberButton>
        );
    };

    return(
        <HomeContainer>
            <h2>Days</h2>
            <ButtonContainer>
                {buttons}
            </ButtonContainer>
        </HomeContainer>
    );
}

export default Home;