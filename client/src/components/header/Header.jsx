import React, {useState, useContext} from 'react';
import { Container, Logo, Search, Button, InputSearch, Block } from './Header elemenst';
import {SearchPlanet} from '../../contex/SearchPlanet'
import {FaSearch} from 'react-icons/fa'

const Header = () => {
    
    const { handleSearch } = useContext(SearchPlanet)

    const [ searchInput, setSearchInput ] = useState('') 
    const handleInputChange = (e) =>{
        setSearchInput(e.target.value)
        handleSearch(e.target.value)
    }

    return (
        <>
        <Container>
            <Search>
                <InputSearch type='text' name='searchInput' placeholder='Search planet' onChange={handleInputChange} onClick={handleInputChange}/>
                <Button onClick={() => searchInput !== '' ? handleSearch(searchInput) : null}>
                    <FaSearch />
                </Button>
            </Search>
            <Logo src='/images/logo.png'/>
        </Container>
        <Block>

        </Block>
        </>
    );
};

export default Header;