import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import Banner from './Components/Banner';
import Gameimg from './Components/Game';
import Foot from './Components/Footer'


function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />     
      <Gameimg />
      <Gameimg />
      <Gameimg />
      <Gameimg />
      <Foot />
      
    </div>
  );
}

export default App;
