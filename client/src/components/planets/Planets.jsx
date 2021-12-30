import React, { useContext } from 'react';
import { FavoriteContext } from '../../contex/UseFavorite';
import { PreNextContext } from '../../contex/UsePreNext';
import PreNext from '../preNext/PreNext';
import { Card, Container, FavoriteButton } from './Planets elements';

const Planets = ({planets}) => {
    const {page, limit} = useContext(PreNextContext)
    const {handleFavorites, favorites} = useContext(FavoriteContext)
    if(!planets) return null
    let PagePlanets = []

    for (let i = page; i < limit; i++) {
        PagePlanets.push(planets[i])
    }

    return (
        <>
            <h1 className='titlePlanets'>
                Planets
            </h1>
            <Container>
                {
                    PagePlanets.map(planet => 
                        <Card key={planet.name} >
                            <FavoriteButton onClick={handleFavorites} className={
                                favorites.map(fav => fav.name == planet.name ? 'disable' : '')
                            }>
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
                        </Card>
                    )
                }
                {
                    
                }
            </Container>
            <PreNext />
        </>
    );
};

export default Planets;