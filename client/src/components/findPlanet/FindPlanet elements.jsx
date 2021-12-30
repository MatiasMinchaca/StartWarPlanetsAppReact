import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    h2{
        color: white;
    }
    a{
        color: white;
    }
`;

export const Card = styled.article`
    font-family: 'Days One';
    background: url(/images/background.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
    padding: 30px;
    margin: 20px;
    width: 250px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 15px;
    border: 1px solid white;
    h2{
        width: 100%;
        text-align: center;
    }
`;