import React, { useEffect, useState } from 'react';
import './App.css';
import Header from 'components/header/Header';
import Home from 'views/home/Home';

function App() {
  const[mode, setMode] = useState(false);
  const colorGold = '#ffc979';
  const colorShark = '#25272c';
  const colorLightGrey = '#bdc2d1'; 
  const colorBrightGrey = '#3c4151';

  function handleStyleFpNav() {
    if (mode) {
      for (const s of document.getElementsByClassName("fp-tooltip")) {
        s.style.setProperty('color', colorBrightGrey);
      }
      for (const s of document.querySelectorAll('#fp-nav ul li a span')) {
        s.style.setProperty('background', colorShark);
      }
    } else {
      for (const s of document.getElementsByClassName("fp-tooltip")) {
        s.style.setProperty('color', colorLightGrey);
      }
      for (const s of document.querySelectorAll('#fp-nav ul li a span')) {
        s.style.setProperty('background', colorGold);
      }
    }
  }
  handleStyleFpNav();

  function changeMode() {
    setMode(!mode);
  }

  useEffect(() => {
    handleStyleFpNav();
 }, [mode]);

  return (
    <div className={mode ? 'App light-mode' : 'App dark-mode'}>

      <Header mode={mode} changeMode={changeMode}/>

      <Home mode={mode} changeMode={changeMode}/>

    </div>
  );
}

export default App;
