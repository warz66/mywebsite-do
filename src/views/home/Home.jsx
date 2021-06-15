import './Home.css';
import React, { useEffect } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Header from 'components/header/Header';
import Hero from 'components/hero/Hero';
import About from 'components/about/About';
import Services from 'components/services/Services';
import Realisations from 'components/realisations/Realisations';
import Contact from 'components/contact/Contact';
import { useRouteMatch, useHistory, useLocation } from "react-router-dom";

const Home = (props) => {
    const colorGold = '#ffc979';
    const colorShark = '#25272c';
    const colorLightGrey = '#bdc2d1'; 
    const colorBrightGrey = '#3c4151';

    const location = useLocation();
    const history = useHistory();
    const route = useRouteMatch();
    let sectionActive = false;
    if(history.location.state) {
      //console.log(location);
      console.log(history);
      //console.log(route);
      sectionActive = history.location.state.section;
      //history.location.state = undefined;
      //history.replace("/", undefined);
      //window.history.replaceState(null, null, "/");
    }

    function handleStyleFpNav() {
        if (props.mode) {
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

    const anchors = ["ACCUEIL", "A PROPOS", "SERVICES" , "REALISATIONS", "CONTACT"];

    const FullpageWrapper = () => (
        <ReactFullpage
            licenseKey='OPEN-SOURCE-GPLV3-LICENSE'
            //anchors={anchors}
            navigation
            navigationTooltips={anchors}
            responsiveWidth= "1200"
            responsiveHeight="937"
            //verticalCentered= {false}
            onLeave={(origin, destination, direction) => {
              //console.log("onLeave event", { origin, destination, direction });
            }}
            render={({ state, fullpageApi }) => {
                //console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console
                if (state.initialized) {
                  //fullpageApi.moveTo(4);
                  if(history.location.state) {
                    history.location.state = undefined;
                  }
                }
                //location.state = 'undefined';
                handleStyleFpNav();
    
                return (
                    <main id="main">

                        <Header fullpageApi={fullpageApi} mode={props.mode}/>
        
                        <Hero mode={props.mode} changeMode={props.changeMode}/>
        
                        <About mode={props.mode} sectionActive={(sectionActive === "about") ? true : false}/>
        
                        <Services mode={props.mode} sectionActive={(sectionActive === "services") ? true : false}/>
        
                        <Realisations sectionActive={(sectionActive === "realisations") ? true : false}/>
        
                        <Contact sectionActive={(sectionActive === "contact") ? true : false}/>
        
                    </main>
                );
            }}
        />
    );
    
    //console.log(props.fullpageApi);
    //props.fullpageApi.reBuild();

    /*useEffect(() => {
        handleStyleFpNav();
    }, [props.mode]);*/
    
    return (

        <FullpageWrapper />
        /*<main id="main">

                <Hero mode={props.mode} changeMode={props.changeMode}/>

                <About mode={props.mode}/>

                <Services mode={props.mode}/>

                <Realisations/>

                <Contact/>

        </main>*/

    );
}

export default Home;