import './Realisation.css'
import React, { useState, useEffect } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Header from 'components/header/Header';
import { useParams, Link } from "react-router-dom";
import Contact from 'components/contact/Contact';
import realisationsMap from 'assets/realisations/realisationsMap';
import RealisationPresentation from 'components/realisation-presentation/RealisationPresentation';

const Realisation = ({mode, changeMode, handleStyleFpNav}) => {
    let { slug } = useParams();
    const [errorMapSlug, setErrorMapSlug] = useState(false);
    const [realisation, setRealisation] = useState(false);
    const [index, setIndex] = useState(1);
    const [anchors, setAnchors] = useState(["PRESENTATION", "CONTACT"]);
    //let anchors = ["PRESENTATION", "CONTACT"];

    function nextRealisation() {
        if(index === realisationsMap.length-1) {
            return realisationsMap[0];
        }
        return realisationsMap[index+1];
    }

    function previousRealisation() {
        if(index === 0) {
            return realisationsMap[realisationsMap.length-1];
        }
        return realisationsMap[index-1];
    }
    
    function RealisationLazy() {
        if (!errorMapSlug) {
            if(!realisation) {
                return (
                    <div className="section">Loading...</div>
                );
            } else {
                return (
                    <>
                        <RealisationPresentation mode={mode} changeMode={changeMode} realisation={realisation}/>
                        
                        <div className="section">
                            <div id="wrapper-features">
                                <h2>{realisation.title}</h2>
                            </div>
                        </div>
                    </>
                );
            }
        } else {
            return <div className="section">Nous n'avons pas trouvé la réalisation correspondant à l'url: {slug}.</div>
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
                    <main id="main-realisation">

                        <Header/>

                        <Link className="link-nav-realisation" to={'/realisation/'+previousRealisation().slug}>
                            Projets précédent<br/>
                            <span>{previousRealisation().titleNav}</span>
                        </Link>

                        <Link className="link-nav-realisation" to={'/realisation/'+nextRealisation().slug}>
                            Projets suivant<br/>
                            <span>{nextRealisation().titleNav}</span>
                        </Link>

                        <RealisationLazy/>

                        <Contact/>

                    </main>
                );
            }}
        />
    );

    useEffect(() => {
        function importRealisation() {
            const found = realisationsMap.find(realisation => realisation.slug === slug);
            if(found) {
                setIndex(realisationsMap.findIndex(realisation => realisation.slug === slug));
                import("assets/realisations/"+found.path).then( data => {
                    setRealisation(data.default[0]); /*anchors = ["PRESENTATION" ,"FONCTIONALITES" , "CONTACT"]*/setAnchors(["PRESENTATION" ,"FONCTIONALITES" , "CONTACT"]);
                }).catch((err) => {console.log(err); setErrorMapSlug(true);} );
            } else {
                setErrorMapSlug(true);
            }
        }
        importRealisation();
        return () => {
            setErrorMapSlug(false);
        }
    },[slug, index, realisation]);

    return (

        <RealisationView/>

    );
}

export default Realisation;