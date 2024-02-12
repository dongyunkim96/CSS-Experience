import React, { useState } from 'react';
import { 
    ModalContainer41,
    Frame41,
    Title41,
    Paragraph41,
    Button41,
    Image41,
} from './Page41.styled';
import { GoAlert } from 'react-icons/go';

const Page41 = () => {
    const [isModalHidden, setIsModalHidden] = useState(false);

    const handleDismiss = () => {
        setIsModalHidden(true);
    }

    return (
        <Frame41>
            <ModalContainer41 hide={isModalHidden ? 1 : 0}>
                <Image41 width="80" height="65"><GoAlert /></Image41>
                <Title41>Oh Snap!</Title41>
                <Paragraph41>An error has occured while creating an error report.</Paragraph41>
                <Button41 onClick={handleDismiss}>Dismiss</Button41>
            </ModalContainer41>
        </Frame41>
    );
};

export default Page41;