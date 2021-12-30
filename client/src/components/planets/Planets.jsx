import React, { useContext } from 'react';
import { PreNextContext } from '../../contex/PreNext';
import PreNext from '../preNext/PreNext';
import { Card, Container } from './Planets elements';



const Planets = ({planets}) => {
    const {page, limit} = useContext(PreNextContext)
    
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
                    <Card key={planet.name}>
                        <h2>
                            {planet.name}
                        </h2>
                        <p>Climate: {planet.climate}</p>
                        <p>Diameter: {planet.diameter}</p>
                        <p>Terrain: {planet.terrain}</p>
                    </Card>)
                }
                {
                    
                }
            </Container>
            <PreNext />
        </>
    );
};

export default Planets;