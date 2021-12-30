import React, { createContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const SearchPlanet = createContext()


const SearchPlanetProvider = ({children}) => {
    const capitalizarPrimeraLetra = str => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    const location = useLocation();
    const navigate = useNavigate()

    const query = new URLSearchParams(location.search)
    const search = query.get('search') || 0

    const handleSearch = (Search) => {
        query.set('search', search !== 0 ? capitalizarPrimeraLetra(Search) : search)
        navigate({pathname: '/search', search: query.toString()})
    }

    return (
        <SearchPlanet.Provider value={{search, handleSearch}}>
            {children}
        </SearchPlanet.Provider>
    );
};

export default SearchPlanetProvider;