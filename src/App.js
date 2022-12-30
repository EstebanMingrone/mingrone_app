import React from 'react';
import NavBar from './components/NavBar/NavBar.js';
import CardItemsContainer from './components/Items/CardItemsContainer.js';
import DetailsItem from './components/Items/DetailsItem.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = ()=> {
  return(
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={ <CardItemsContainer/> }/>
        <Route path='/item/:idItem' element={ <DetailsItem/> }/>
        <Route path='/category/:idCategory' element={ <CardItemsContainer/> }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
