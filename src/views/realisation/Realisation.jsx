import './Realisation.css'
import React, { useState, useEffect } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Header from 'components/header/Header';
import { useParams, Link } from "react-router-dom";
import Contact from 'components/contact/Contact';
import realisationsMap from 'assets/realisations/realisationsMap';
import RealisationPresentation from 'components/realisation-presentation/RealisationPresentation';
import RealisationFeatures from 'components/realisation-features/RealisationFeatures';

const Realisation = ({mode, changeMode, handleStyleFpNav}) => {
    let { slug } = useParams();
    const [errorMapSlug, setErrorMapSlug] = useState(false);
    const[state, setState] = useState({
        realisation: false,
        index: 1,
        anchors: ["PRESENTATION", "CONTACT"],
    })

    console.log(state)

    function nextRealisation() {
        if(state.index === realisationsMap.length-1) {
            return realisationsMap[0];
        }
        return realisationsMap[state.index+1];
    }

    function previousRealisation() {
        if(state.index === 0) {
            return realisationsMap[realisationsMap.length-1];
        }
        return realisationsMap[state.index-1];
    }
    
    function RealisationLazy() {
        if (!errorMapSlug) {
            if(!state.realisation) {
                return (
                    <div id="realisation-loading-import" className="section bg-vr">
                        <div className="clignote">Loading...</div>
                    </div>
                );
            } else {
                return (
                    <>
                        <RealisationPresentation mode={mode} changeMode={changeMode} realisation={state.realisation}/>
                        
                        {state.realisation.features && <RealisationFeatures features={state.realisation.features}/>}
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
            navigationTooltips={state.anchors}
            responsiveWidth= "1200"
            responsiveHeight="937"
            //slidesNavigation={true}
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
                let index = realisationsMap.findIndex(realisation => realisation.slug === slug);
                import("assets/realisations/"+found.path).then( data => {
                    if (data.default[0].features) { var anchors =  ["PRESENTATION" ,"FONCTIONALITES" , "CONTACT"] } else { var anchors = ["PRESENTATION", "CONTACT"] }
                    setTimeout(function(){ setState({realisation: data.default[0], index: index, anchors: anchors});}, 500);
                }).catch((err) => {console.log(err); setErrorMapSlug(true);} );
            } else {
                setErrorMapSlug(true);
            }
        }
        importRealisation();
        return () => {
            setErrorMapSlug(false);
            setState( oldState => ({...oldState, realisation: false,anchors: ["PRESENTATION", "CONTACT"]}));
        }
    },[slug]);

    return (

        <RealisationView/>

    );
}

export default Realisation;