import './Realisation.css'
import React, { useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Header from 'components/header/Header';
import { useParams } from "react-router-dom";
import Contact from 'components/contact/Contact';
import realisationsMap from 'assets/realisations/realisationsMap';

const Realisation = () => {
    let { slug } = useParams();
    const [isLoaded, setIsLoaded] = useState(false);
    const [errorMapSlug, setErrorMapSlug] = useState(false);
    //let errorMapSlug = false;
    let realisation = useState(null);

    if(!errorMapSlug) {
        realisationsMap.map((realisationMap, i) => {
            if(realisationMap.slug === slug) {
                import("assets/realisations/"+realisationMap.path).then( data => {
                    realisation = data; console.log(realisation); setIsLoaded(true);
                }).catch((err) => {console.log(err); setErrorMapSlug(true);} ); 
            } else if(realisationsMap.length === i+1 && isLoaded === false) {
                setErrorMapSlug(true);
            }
        });
    }

    const anchors = ["PRESENTATION", "CONTACT"];
    anchors.splice(1, 0, "FUNCTIONALITE P1", "FUNCTIONALITE P2");

    const RealisationData = () => (
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
                        <div className="section">
                            <h2></h2>
                        </div>
                        <div className="section">

                        </div>
                        <div className="section">

                        </div>
                        
                        <Contact/>

                    </main>
                );
            }}
        />
    );

    function RealisationLazy() {
        if (!errorMapSlug) {
            if(!isLoaded) {
                return <span>Loading...</span>
            } else {
                return <RealisationData/>
            }
        } else {
            return <span>Nous n'avons pas trouvé la réalisation {slug}.</span>
        }
    }

    return (
        
        <div>

            <Header/>
            
            <RealisationLazy/>

        </div>
    );
}

export default Realisation;