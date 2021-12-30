import React, { createContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
export const PreNextContext = createContext()

const PrevNextProvider = ({children}) => {
    const location = useLocation();
    const navigate = useNavigate()
    
    const query = new URLSearchParams(location.search)
    const page = parseInt(query.get('page')) || 0
    const limit = parseInt(query.get('limit')) || 10

    const handleNext = () =>{
        query.set('page', page + 10)
        query.set('limit', limit+10)
        navigate({search: query.toString()})
    } 
    const handlePre = () =>{
        query.set('page', page - 10)
        query.set('limit', limit -10)
        navigate({search: query.toString()})
    } 
    const afterPage = () => {
        query.set('page', page)
        query.set('limit', limit)
        navigate({pathname: '/',search: query.toString()})
    }
    return (
        <PreNextContext.Provider value={{page, limit, handleNext, handlePre, afterPage}}>
            {children}
        </PreNextContext.Provider>
    );
};

export default PrevNextProvider;