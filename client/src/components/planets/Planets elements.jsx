import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    padding-bottom: 100px;
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
    position: relative;
    h2{
        width: 100%;
        text-align: center;
    }
    .disable{
        display: none;
    }
`;

export const FavoriteButton = styled.button`
    font-family: 'Days One';
    font-size: 12px;
    position: absolute;
    top: 0;
    right: 0;
    color: white;
    border-radius: 15px;
    border: 1px solid white;
    padding: 5px;
    background: none;
    cursor: pointer;
    p{
        display: none;
    }
`;
export const RemoveFavoriteButton = styled.button`
    font-family: 'Days One';
    font-size: 12px;
    position: absolute;
    top: 0;
    left: 0;
    color: white;
    border-radius: 15px;
    border: 1px solid white;
    padding: 5px;
    background: none;
    cursor: pointer;
    p{
        display: none;
    }
`;