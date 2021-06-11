import React, { useEffect, useState } from 'react';
import './App.css';
import Header from 'components/header/Header';
import Realisation from 'views/realisation/Realisation';
import Home from 'views/home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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

  function changeMode(e) {
    setMode(e.target.checked);
  }

  useEffect(() => {
    handleStyleFpNav();
 }, [mode]);

  return (
    <div className={mode ? 'App light-mode' : 'App dark-mode'}>

      <Router>

        {<Header mode={mode}/>}
        
        <Switch>
          <Route path="/realisation/" component={Realisation}/>
          <Route exact path="/" render={() => <Home mode={mode} changeMode={changeMode} />}/>
          {/*<Route path="/realisation/" component={() => <Realisation fullpageApi={fullpageApi} />} />
          <Route exact path="/" component={() => <Home fullpageApi={fullpageApi} mode={mode} changeMode={changeMode} />}/>*/}
          {/*<Home mode={mode} changeMode={changeMode}/>*/}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
