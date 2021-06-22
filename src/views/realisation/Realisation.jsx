import './Realisation.css'
import SwitchMode from 'components/switch-mode/SwitchMode';
import ScrollDown from 'components/scroll-down/ScrollDown';
import React, { useState, useEffect } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Header from 'components/header/Header';
import { useParams, Link } from "react-router-dom";
import Contact from 'components/contact/Contact';
import realisationsMap from 'assets/realisations/realisationsMap';

const Realisation = ({mode, changeMode, handleStyleFpNav}) => {
    let { slug } = useParams();
    const [errorMapSlug, setErrorMapSlug] = useState(false);
    const [realisation, setRealisation] = useState(false);
    const [anchors, setAnchors] = useState(["PRESENTATION", "CONTACT"]);
    const [index, setIndex] = useState(1);

    console.log(errorMapSlug);

    function importRealisation() {
        const found = realisationsMap.find(realisation => realisation.slug === slug);
        if(found) {
            setIndex(realisationsMap.findIndex(realisation => realisation.slug === slug));
            import("assets/realisations/"+found.path).then( data => {
                setRealisation(data.default[0]); setAnchors(["PRESENTATION" ,"FONCTIONALITES" , "CONTACT"]);
            }).catch((err) => {console.log(err); setErrorMapSlug(true);} );
        } else {
            setErrorMapSlug(true);
        }
    }

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
                        <div className="section">
                            <div id="wrapper-presentation">
                                <h2>{realisation.title}</h2>
                                {/*<ScrollDown/>*/}
                                <SwitchMode mode={mode} changeMode={changeMode} text={false}/>
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
        importRealisation();
        return () => {
            setErrorMapSlug(false);
        }
    },[slug/*, realisation*/]);

    return (

        <RealisationView/>

    );
}

export default Realisation;