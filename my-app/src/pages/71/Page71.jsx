import React, { useState } from 'react';
import { Frame71, KeyLabel71, Keyboard71, RadioButton71, Screen71 } from './Page71.styled';

const Page71 = () => {
    const [screenText, setScreenText] = useState('');

    const handleInputChange = (event) => {
        setScreenText(event.target.nextElementSibling.textContent);
    };

    return (
        <Frame71>
            <Screen71>{screenText}</Screen71>
            <Keyboard71 onChange={handleInputChange}>
                <RadioButton71 type="radio" name='keys' id="key-a" />
                <KeyLabel71 htmlFor="key-a">A</KeyLabel71>
                <RadioButton71 type="radio" name='keys' id="key-b" />
                <KeyLabel71 htmlFor="key-b">B</KeyLabel71>
                <RadioButton71 type="radio" name='keys' id="key-c" />
                <KeyLabel71 htmlFor="key-c">C</KeyLabel71>
                <RadioButton71 type="radio" name='keys' id="key-d" />
                <KeyLabel71 htmlFor="key-d">D</KeyLabel71>
                <RadioButton71 type="radio" name='keys' id="key-e" />
                <KeyLabel71 htmlFor="key-e">E</KeyLabel71>
                <RadioButton71 type="radio" name='keys' id="key-f" />
                <KeyLabel71 htmlFor="key-f">F</KeyLabel71>
                <RadioButton71 type="radio" name='keys' id="key-g" />
                <KeyLabel71 htmlFor="key-g">G</KeyLabel71>
                <RadioButton71 type="radio" name='keys' id="key-h" />
                <KeyLabel71 htmlFor="key-h">H</KeyLabel71>
                <RadioButton71 type="radio" name='keys' id="key-i" />
                <KeyLabel71 htmlFor="key-i">I</KeyLabel71>
                <RadioButton71 type="radio" name='keys' id="key-j" />
                <KeyLabel71 htmlFor="key-j">J</KeyLabel71>
                <RadioButton71 type="radio" name='keys' id="key-k" />
                <KeyLabel71 htmlFor="key-k">K</KeyLabel71>
                <RadioButton71 type="radio" name='keys' id="key-l" />
                <KeyLabel71 htmlFor="key-l">L</KeyLabel71>
                <RadioButton71 type="radio" name='keys' id="key-m" />
                <KeyLabel71 htmlFor="key-m">M</KeyLabel71>
                <RadioButton71 type="radio" name='keys' id="key-n" />
                <KeyLabel71 htmlFor="key-n">N</KeyLabel71>
                <RadioButton71 type="radio" name='keys' id="key-o" />
                <KeyLabel71 htmlFor="key-o">O</KeyLabel71>
                <RadioButton71 type="radio" name='keys' id="key-p" />
                <KeyLabel71 htmlFor="key-p">P</KeyLabel71>
                <RadioButton71 type="radio" name='keys' id="key-q" />
                <KeyLabel71 htmlFor="key-q">Q</KeyLabel71>
                <RadioButton71 type="radio" name='keys' id="key-r" />
                <KeyLabel71 htmlFor="key-r">R</KeyLabel71>
                <RadioButton71 type="radio" name='keys' id="key-s" />
                <KeyLabel71 htmlFor="key-s">S</KeyLabel71>
                <RadioButton71 type="radio" name='keys' id="key-t" />
                <KeyLabel71 htmlFor="key-t">T</KeyLabel71>
                <RadioButton71 type="radio" name='keys' id="key-u" />
                <KeyLabel71 htmlFor="key-u">U</KeyLabel71>
                <RadioButton71 type="radio" name='keys' id="key-v" />
                <KeyLabel71 htmlFor="key-v">V</KeyLabel71>
                <RadioButton71 type="radio" name='keys' id="key-w" />
                <KeyLabel71 htmlFor="key-w">W</KeyLabel71>
                <RadioButton71 type="radio" name='keys' id="key-x" />
                <KeyLabel71 htmlFor="key-x">X</KeyLabel71>
                <RadioButton71 type="radio" name='keys' id="key-y" />
                <KeyLabel71 htmlFor="key-y">Y</KeyLabel71>
                <RadioButton71 type="radio" name='keys' id="key-z" />
                <KeyLabel71 htmlFor="key-z">Z</KeyLabel71>
                <RadioButton71 type="radio" name='keys' id="key-" />
                <KeyLabel71 htmlFor="key-"></KeyLabel71>
                <RadioButton71 type="radio" name='keys' id="key-" />
                <KeyLabel71 htmlFor="key-"></KeyLabel71>
                <RadioButton71 type="radio" name='keys' id="key-" />
                <KeyLabel71 htmlFor="key-"></KeyLabel71>
                <RadioButton71 type="radio" name='keys' id="key-" />
                <KeyLabel71 htmlFor="key-"></KeyLabel71>
                <RadioButton71 type="radio" name='keys' id="key-0" />
                <KeyLabel71 htmlFor="key-0">0</KeyLabel71>
                <RadioButton71 type="radio" name='keys' id="key-1" />
                <KeyLabel71 htmlFor="key-1">1</KeyLabel71>
                <RadioButton71 type="radio" name='keys' id="key-2" />
                <KeyLabel71 htmlFor="key-2">2</KeyLabel71>
                <RadioButton71 type="radio" name='keys' id="key-3" />
                <KeyLabel71 htmlFor="key-3">3</KeyLabel71>
                <RadioButton71 type="radio" name='keys' id="key-4" />
                <KeyLabel71 htmlFor="key-4">4</KeyLabel71>
                <RadioButton71 type="radio" name='keys' id="key-5" />
                <KeyLabel71 htmlFor="key-5">5</KeyLabel71>
                <RadioButton71 type="radio" name='keys' id="key-6" />
                <KeyLabel71 htmlFor="key-6">6</KeyLabel71>
                <RadioButton71 type="radio" name='keys' id="key-7" />
                <KeyLabel71 htmlFor="key-7">7</KeyLabel71>
                <RadioButton71 type="radio" name='keys' id="key-8" />
                <KeyLabel71 htmlFor="key-8">8</KeyLabel71>
                <RadioButton71 type="radio" name='keys' id="key-9" />
                <KeyLabel71 htmlFor="key-9">9</KeyLabel71>
            </Keyboard71>
        </Frame71>
    );
};

export default Page71;