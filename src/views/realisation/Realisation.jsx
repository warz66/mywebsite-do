import './Realisation.css'
import SwitchMode from 'components/switch-mode/SwitchMode';
import ScrollDown from 'components/scroll-down/ScrollDown';
import React, { useState, useEffect } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Header from 'components/header/Header';
import { useParams } from "react-router-dom";
import Contact from 'components/contact/Contact';
import realisationsMap from 'assets/realisations/realisationsMap';

const Realisation = ({mode, changeMode, handleStyleFpNav}) => {
    let { slug } = useParams();
    const [errorMapSlug, setErrorMapSlug] = useState(false);
    const [realisation, setRealisation] = useState(false);
    const [anchors, setAnchors] = useState(["PRESENTATION", "CONTACT"]);

    function importRealisation() {
        realisationsMap.map((realisationMap, i) => {
            if(realisationMap.slug === slug && !realisation) {
                import("assets/realisations/"+realisationMap.path).then( data => {
                    setRealisation(data.default[0]); setAnchors(["PRESENTATION" ,"FONCTIONALITES" , "CONTACT"]);
                }).catch((err) => {console.log(err); setErrorMapSlug(true);} ); 
            } else if(realisationsMap.length === i+1 && !realisation) {
                setErrorMapSlug(true);
            }
        });
    }

    console.log(realisation);
    
    function RealisationLazy() {
        if (!errorMapSlug) {
            if(!realisation) {
                return (
                    <div className="section">Loading...</div>
                );
            } else {
                return (
                    <>
                        <div className="section">
                            <div id="wrapper-presentation">
                                <h2>{realisation.title}</h2>
                                <ScrollDown/>
                                <SwitchMode mode={mode} changeMode={changeMode}/>
                            </div>
                        </div>
                        <div className="section">
                            <div id="wrapper-features">
                                <h2>{realisation.title}</h2>
                            </div>
                        </div>
                    </>
                );
            }
        } else {
            return <div className="section">Nous n'avons pas trouvé la réalisation {slug}.</div>
        }
    }

    const RealisationView = () => (

        <ReactFullpage
            licenseKey='OPEN-SOURCE-GPLV3-LICENSE'
            //anchors={anchors}
            navigation
            navigationTooltips={anchors}
            responsiveWidth= "1200"
            responsiveHeight="937"
            //verticalCentered= {false}
            afterLoad={() => {
                handleStyleFpNav();
            }}
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
        importRealisation();
    }, [realisation, anchors, errorMapSlug]);

    return (

        <RealisationView/>

    );
}

export default Realisation;