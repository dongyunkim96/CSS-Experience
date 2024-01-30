import React, { useState } from "react";
import {
    Frame29,
    Center29,
    SearchWrapper29,
    SearchInput29,
    SearchButton29,
    Suggestions29,
    SuggestionItem29
 } from "./Page29.styled";
 import { FaSearch } from "react-icons/fa";

const Page29 = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <Frame29>
            <Center29>
                <SearchWrapper29>
                    <SearchInput29
                      type="text"
                      className="search-input"
                      placeholder="Start typing ..."
                      value={inputValue}
                      onChange={handleInputChange}
                    />
                    <SearchButton29>
                        <FaSearch />
                    </SearchButton29>
                </SearchWrapper29>
                <Suggestions29>
                    {inputValue && (
                        <>
                          <SuggestionItem29>
                            <strong>{inputValue}</strong>
                          </SuggestionItem29>
                          <SuggestionItem29>The information of <strong>{inputValue}</strong></SuggestionItem29>
                          <SuggestionItem29>The name <strong>{inputValue}</strong> and something</SuggestionItem29>
                        </>
                    )}
                </Suggestions29>
            </Center29>
        </Frame29>
    );
};

export default Page29;