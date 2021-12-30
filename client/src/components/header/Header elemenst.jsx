import styled from "styled-components";

export const Container = styled.header`
    display: flex; 
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    padding: 0 5%;
    position: fixed;
    top: 0;
    left: 0;
    background: #ffffff26;
`;

export const Block = styled.div`
    width: 100%;
    height: 50px;
`;

export const Search = styled.div`
    width: 300px;
    height: 30px;
    position: relative;
`;

export const InputSearch = styled.input`
    outline: none;
    width: 100%;
    height: 100%;
    background: #00000075;
    border: 1px solid white;
    color: white;
    padding-left: 10px;
    border-radius: 5px;
    :focus-visible{
        outline: none;
    }
`;

export const Logo = styled.img`
    width: 70px;
    height: 50px;
    
`;

export const Button = styled.button`
    width: 30px;
    height: 30px;
    position: absolute;
    right: 0;
    top: 0;
    border: none;
    background: #00000075;
    color: white;
    border-radius: 5px;
    cursor: pointer;
`;