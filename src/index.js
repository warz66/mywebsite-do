import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from "@fullpage/react-fullpage";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const anchors = ["ACCUEIL", "A PROPOS", "SERVICES" , "REALISATIONS", "CONTACT"];

const FullpageWrapper = () => (
  <ReactFullpage
    licenseKey='OPEN-SOURCE-GPLV3-LICENSE'
    /*anchors={anchors}*/
    navigation
    navigationTooltips={anchors}
    responsiveWidth= "1200"
    responsiveHeight="937"
    //verticalCentered= {false}
    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      //console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console

      return (
        <div>
          <App/>
        </div>
      );
    }}
  />
);

ReactDOM.render(
  <React.StrictMode>
    <FullpageWrapper />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
