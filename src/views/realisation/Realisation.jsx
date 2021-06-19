import './Realisation.css'
import React, { useState, useEffect } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Header from 'components/header/Header';
import { useParams } from "react-router-dom";
import Contact from 'components/contact/Contact';
import realisationsMap from 'assets/realisations/realisationsMap';

const Realisation = ({mode, changeMode, handleStyleFpNav}) => {
    let { slug } = useParams();
    const [isLoaded, setIsLoaded] = useState(false);
    const [errorMapSlug, setErrorMapSlug] = useState(false);
    let realisation = null;

    function importRealisation() {
        realisationsMap.map((realisationMap, i) => {
            if(realisationMap.slug === slug && !isLoaded) {
                import("assets/realisations/"+realisationMap.path).then( data => {
                    realisation = data.default[0]; setIsLoaded(true); console.log(realisation.title);
                }).catch((err) => {console.log(err); setErrorMapSlug(true);} ); 
            } else if(realisationsMap.length === i+1 && isLoaded === false) {
                setErrorMapSlug(true);
            }
        });
    }

    function RealisationLazy() {
        if (!errorMapSlug) {
            if(!isLoaded) {
                return <div className="section">Loading...</div>
            } else {
                return (
                    <div>
                        <div className="section">
                            <h2></h2>
                        </div>
                        <div className="section">

                        </div>
                    </div>
                );
            }
        } else {
            return <div className="section">Nous n'avons pas trouvé la réalisation {slug}.</div>
        }
    }

    const anchors = ["PRESENTATION" ,"FONCTIONALITES" , "CONTACT"];
    //anchors.splice(1, 0, "FUNCTIONALITE P1", "FUNCTIONALITE P2");

    const RealisationView = () => (

        <ReactFullpage
            licenseKey='OPEN-SOURCE-GPLV3-LICENSE'
            //anchors={anchors}
            navigation
            navigationTooltips={anchors}
            responsiveWidth= "1200"
            responsiveHeight="937"
            //verticalCentered= {false}
            onLeave={(origin, destination, direction) => {
            }}
            render={({ state, fullpageApi }) => {
    
                return (
                    <main>
                        <Header/>

                        <RealisationLazy/>

                        <Contact/>
                    </main>
                );
            }}
        />
    );

    useEffect(() => {
        handleStyleFpNav();
        importRealisation();
    }, [isLoaded]);

    return (

        <RealisationView/>

    );
}

export default Realisation;