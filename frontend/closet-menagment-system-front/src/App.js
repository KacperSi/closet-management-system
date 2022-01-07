import { useState } from 'react';

import './App.css';
import MenuButton from './components/MenuButton';
import MainHero from './components/MainHero';

function App() {
  return (
    <div className="App">
      <MenuButton></MenuButton>
      <MainHero></MainHero>      
    </div>
  );
}

export default App;
