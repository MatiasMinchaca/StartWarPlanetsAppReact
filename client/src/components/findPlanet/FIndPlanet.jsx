import React, { useContext } from 'react';
import { SearchPlanet } from '../../contex/UseSearchPlanet';
import { Container, Card, FavoriteButton } from './FindPlanet elements';
import {
    FaArrowLeft} from 'react-icons/fa'
import styled from 'styled-components';
import { PreNextContext } from '../../contex/UsePreNext';
import { FavoriteContext } from '../../contex/UseFavorite';

const Close = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    position: fixed;
    bottom: 0;
    left: 0;
    p{
        border: 1px solid white;
        color: yellow;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 30px;
        width: 80px;
        cursor: pointer;
        padding: 3px;
        background: #000000c2;
        border-radius: 5px;
        text-decoration: none;
    }
`;


const FIndPlanet = ({planets}) => {
//@ts-check
    const {afterPage} = useContext(PreNextContext)

    const {handleFavorites, favorites} = useContext(FavoriteContext)

    const { search } = useContext(SearchPlanet)
    
    if(!planets) return null
    
    const planet = planets.find(planet => planet.name === search)
    return (
        <>
        <Container>
            {
                planet !== undefined ?
                <Card key={planet.name}>
                    <FavoriteButton onClick={handleFavorites} className={
                                favorites.map(fav => fav.name == planet.name ? 'disable' : '')}>
                        Add favorite
                        <p name={planet.name}></p>
                        <p name={planet.climate}></p>
                        <p name={planet.diameter}></p>
                        <p name={planet.terrain}></p>
                    </FavoriteButton>
                    <h2>
                        {planet.name}
                    </h2>
                    <p>Climate: {planet.climate}</p>
                    <p>Diameter: {planet.diameter}</p>
                    <p>Terrain: {planet.terrain}</p>
                </Card> :
                search == 0?
                <h2>Here you will see the results of your search</h2>:
                <h2>No search results: {search}</h2>
            }
        </Container>
        <Close>
            <p className='close' onClick={afterPage} >
                <FaArrowLeft />
                Atras
            </p>
        </Close>
        </>
    );
};

export default FIndPlanet;