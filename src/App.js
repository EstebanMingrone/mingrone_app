import React from 'react';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/NavBar/ItemListContainer.js';

const App = ()=> {
  return(
    <>
    <NavBar></NavBar>
    <ItemListContainer title='¡Ups! A veces el mejor sonido es el silencio. Web en desarrollo.'/>
    </>
  )
}

export default App;
