import './app.css';
import {gql, useQuery} from '@apollo/client';
import Planets from './components/planets/Planets';
import { BrowserRouter as Router,
  Routes,
  Route } from 'react-router-dom';
import Loading from './components/loading/Loading'
import Header from './components/header/Header';
import SearchPlanetProvider from './contex/SearchPlanet';
import React from 'react';
import PrevNextProvider from './contex/PreNext';
import FindPlanet from './components/findPlanet/FIndPlanet'

const AllPlanets = gql`
  query {
    allPlanets {
      name
      diameter
      climate
      terrain
    }
  }
`;

function App() {
//@ts-check
//@ts-expect-error
  const {loading, data} = useQuery(AllPlanets);
  return (
    <Router>
        <SearchPlanetProvider>
          <PrevNextProvider>
          <Header />
          <Routes>
            <Route path='/' element={
              loading ?
              <Loading /> :
              <Planets planets={data?.allPlanets}/>
            }/>
            <Route  path='search' element={ 
              loading ?
              <Loading /> :
              <FindPlanet planets={data?.allPlanets} />
            } />
          </Routes>
              </PrevNextProvider>
          </SearchPlanetProvider>
      </Router>
    
  );
}

export default App;
