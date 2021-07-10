import React, { useState, useEffect } from 'react';
import './App.css';
import Realisation from 'views/realisation/Realisation';
import Home from 'views/home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { resetSection } from 'features/locationNavFp';

function App() {
  const dispatch = useDispatch();
  const[mode, setMode] = useState(false);

  function handleStyleFpNav() {
    if (mode) {
      document.getElementById("fp-nav").classList.remove('fp-nav-dark'); 
      document.getElementById("fp-nav").classList.add('fp-nav-light'); 
    } else {
      document.getElementById("fp-nav").classList.remove('fp-nav-light'); 
      document.getElementById("fp-nav").classList.add('fp-nav-dark');
    }
  }
  
  function changeMode(e) {
    dispatch(resetSection());
    setMode(!mode);
  }

  useEffect(() => {
    const loadScriptByURL = (id, url, callback) => {
      const isScriptExist = document.getElementById(id);
   
      if (!isScriptExist) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        script.id = id;
        script.onload = function () {
          if (callback) callback();
        };
        document.body.appendChild(script);
      }
   
      if (isScriptExist && callback) callback();
    }
   
    // load the script by passing the URL
    const SITE_KEY="6LcLgocbAAAAAG51nOiXjdVpZR1w5cIclpm8vVF8";
    loadScriptByURL("recaptcha-key", `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`, function () {
      console.log("Script loaded!");
    });
  }, []);

  return (
    <div className={mode ? 'App light-mode' : 'App dark-mode'}>
      
      <Router>
        
        <Switch>
          <Route path="/realisation/:slug" render={() => <Realisation mode={mode} changeMode={changeMode} handleStyleFpNav={handleStyleFpNav}/>}/>
          <Route exact path="/" render={() => <Home mode={mode} changeMode={changeMode} handleStyleFpNav={handleStyleFpNav}/>}/>
        </Switch>

      </Router>

    </div>
  );
}

export default App;
