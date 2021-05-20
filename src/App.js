import React, { useState } from 'react';
import './App.css';
import Header from 'components/header/Header';
import Home from 'views/home/Home';

function App() {
  const[mode, setMode] = useState(false);

  function changeMode() {
    setMode(!mode);
    console.log(mode);
  }

  return (
    <div className={mode ? 'App light-mode' : 'App dark-mode'}>

      <Header mode={mode} changeMode={changeMode}/>

      <Home/>

    </div>
  );
}

export default App;
