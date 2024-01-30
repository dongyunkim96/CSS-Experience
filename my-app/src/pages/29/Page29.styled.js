import styled from "styled-components";

export const Frame29 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  margin-top: -200px;
  margin-left: -200px;
  border-radius: 2px;
  box-shadow: 4px 8px 16px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background: #5ca4e9;
  color: #333;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

export const Center29 = styled.div`
  position: absolute;
  left: calc(50% - 125px);
  top: calc(50% - 20px);
  max-width: 250px;
`;

export const SearchWrapper29 = styled.div`
  position: relative;
`;

export const SearchInput29 = styled.input`
  outline: 0;
  border: 0;
  height: 40px;
  width: 200px;
  padding: 10px 46px 10px 16px;
  font-weight: 600;
  color: #4d8dcb;
  border-radius: 2px;
  border-bottom: 1px solid #4d8dcb;

  &::placeholder {
    color: #a4b9ce;
  }
`;

export const SearchButton29 = styled.button`
  border: 0;
  background: transparent;
  position: absolute;
  top: calc(50% - 10px);
  right: 12px;
  color: #4d8dcb;
  font-size: 18px;
`;

export const Suggestions29 = styled.ul`
  list-style-type: none;
  background: #fff;
  max-height: 140px;
  overflow-y: scroll;
`;

export const SuggestionItem29 = styled.li`
  padding: 8px 16px;
  font-size: 12px;
  color: #777;
  word-break: break-all;
  transition: all 300ms ease-out;

  &:first-of-type {
    padding-top: 16px;
  }

  &:last-of-type {
    padding-bottom: 16px;
  }

  &:hover {
    color: #5ca4e9;
    cursor: pointer;
  }
`;