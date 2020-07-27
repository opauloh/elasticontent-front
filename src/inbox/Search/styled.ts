import styled from 'styled-components';

const Search = styled.div`    
    align-self: start;
    position: relative;
    min-width: 0px;
    min-height: 0px;
    display: flex;
    flex-direction: column;
    background-color: rgb(255, 255, 255);
    grid-row: 1 / auto;
    grid-column: 1 / auto;
    margin: 0px -1px;
    border-style: solid;
    border-color: rgb(232, 234, 237);
    border-image: initial;
    border-width: 0px 1px;
    transition: box-shadow 300ms ease 0s;
`;
const SearchWrapper = styled.div`
    flex-shrink: 0;
    display: grid;
    grid-template-columns: 1fr auto;
    -webkit-box-align: center;
    align-items: center;
    padding: 4px 8px;
    border-bottom: 1px solid rgb(232, 234, 237);
`;

const Input = styled.div`
    position: relative;
    min-width: 0px;
    grid-column: 1 / auto;
    grid-row: 1 / auto;
    padding: 0px 8px;
`;

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;




export const Styled = {
    Search,
    SearchWrapper,
    Input,
    InputWrapper
}