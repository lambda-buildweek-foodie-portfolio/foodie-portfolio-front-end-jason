import React from 'react';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
import Header from './Components/Header/Header';

library.add(faStroopwafel)

function App() {
  return (
    <div className="App">
      <Header/>
      <SearchBar/>
    </div>
  );
}

export default App;
