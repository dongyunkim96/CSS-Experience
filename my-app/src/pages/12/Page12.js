import React from 'react';
import { FaVolumeUp } from "react-icons/fa";
import {
    Container,
    Center,
    MainText,
    ToolTipText,
    Tooltip,
    Header,
    Content,
    Triangle
} from './Page12.styled.js';

const Page12 = () => {
    return (
        <Container>
            <Center>
                <MainText>
                    I know quite certainly that I myself have no special talent; curiosity,
                <ToolTipText>
                    <Tooltip className='tooltip'>
                        <Header>
                          [əbˈsɛʃ(ə)n]<p><FaVolumeUp /></p>                         
                        </Header>
                        <Content>
                            <b>Obsession</b>, a persistent disturbing preoccupation with an often
                            unreasonable idea or feeling.
                        </Content>
                        <Triangle></Triangle>
                    </Tooltip>
                    Obsession
                </ToolTipText>
                and dogged endurance, combined with self-criticism have brought me to my ideas.
                </MainText>
            </Center>
        </Container>
    );
};

export default Page12;