import React, {  createContext, useState } from 'react';
export const FavoriteContext = createContext()


const FavoriteProvider = ({children}) => {

    const [favorites, setFavorites] = useState([])

    const handleFavorites = (e) => {
        const wardFav = {
            name: e.target.children[0].getAttribute('name'),
            climate: e.target.children[1].getAttribute('name'),
            diameter: e.target.children[2].getAttribute('name'),
            terrain: e.target.children[3].getAttribute('name')
        }
        setFavorites([...favorites,wardFav])
    }

    const handleRemoveFavorites = (e) => {
        const NewFav = favorites.filter(planet => planet.name !== e.target.children[0].getAttribute('name'))
        setFavorites(NewFav)
    }


    return (
        <FavoriteContext.Provider value={{handleFavorites, handleRemoveFavorites, favorites}}>
            {children}
        </FavoriteContext.Provider>
    );
};

export default FavoriteProvider;