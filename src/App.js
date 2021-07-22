import React, { useEffect } from 'react';
import './App.css';
import Realisation from 'views/realisation/Realisation';
import Home from 'views/home/Home';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from 'react-redux';

function App() {
  const mode = useSelector((state) => state.mode.value);

  function handleStyleFpNav() {
    if (mode) {
      document.getElementById("fp-nav").classList.remove('fp-nav-dark'); 
      document.getElementById("fp-nav").classList.add('fp-nav-light'); 
    } else {
      document.getElementById("fp-nav").classList.remove('fp-nav-light'); 
      document.getElementById("fp-nav").classList.add('fp-nav-dark');
    }
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
    loadScriptByURL("recaptcha-key", `https://www.google.com/recaptcha/api.js?render=${process.env.REACT_APP_CLE_GRECAPTCHA_API}`, function () {
      console.log("Script loaded!");
    });
  }, []);

  return (
    <div className={mode ? 'App light-mode' : 'App dark-mode'}>
      
      <Router>
        
        <Switch>
          <Route path="/realisation/:slug" render={() => <Realisation handleStyleFpNav={handleStyleFpNav}/>}/>
          <Route exact path="/" render={() => <Home handleStyleFpNav={handleStyleFpNav}/>}/>
        </Switch>

      </Router>

    </div>
  );
}

export default App;
