import React, { useContext } from 'react';
import { FavoriteContext } from '../../contex/UseFavorite';
import { Card, Container, RemoveFavoriteButton } from './Favorite elements';
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa';

const Favorite = () => {
    const { handleRemoveFavorites, favorites} = useContext(FavoriteContext);

    return (
        <>
            <h1 className='titlePlanets'>
                Favorites
            </h1>
            <Container>
                {
                    favorites.length > 0 ?
                    favorites.map(planet => 
                        <Card key={planet.name} >
                            <RemoveFavoriteButton climate='{planet.climate}' onClick={handleRemoveFavorites}>
                                Remove favorite
                                <p name={planet.name}></p>
                                <p name={planet.climate}></p>
                                <p name={planet.diameter}></p>
                                <p name={planet.terrain}></p>
                            </RemoveFavoriteButton>
                            <h2>
                                {planet.name}
                            </h2>
                            <p>Climate: {planet.climate}</p>
                            <p>Diameter: {planet.diameter}</p>
                            <p>Terrain: {planet.terrain}</p>
                        </Card>
                    ) :
                    <>
                        <h2>
                            You don't have any favorites added yet. 
                            <br />
                            Go back to home to add, or you have the search bar at the top left
                        </h2>
                    </>
                }
                <Link to='/'>
                    <p className='close'>
                        <FaArrowLeft />
                        Home
                    </p>
                </Link>
            </Container>
        </>
    );
};

export default Favorite;