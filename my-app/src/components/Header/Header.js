import React from 'react';
import {
    HeaderContainer,
    Title,
    Nav,
    NavLink,
} from "./Header.styled";

const Header = () => {

    return (
        <HeaderContainer>
            <Title>Wellcome to Dongyun's CSS Practice Page</Title>
            <Nav>
                <NavLink to="/">Home</NavLink>
            </Nav>
        </HeaderContainer>
    );
};

export default Header;