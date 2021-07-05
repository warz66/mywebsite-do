import './Realisation.css'
import React, { useState, useEffect, useReducer } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Header from 'components/header/Header';
import { useParams, Link } from "react-router-dom";
import Contact from 'components/contact/Contact';
import realisationsMap from 'assets/realisations/realisationsMap';
import RealisationPresentation from 'components/realisation-presentation/RealisationPresentation';
import RealisationFeatures from 'components/realisation-features/RealisationFeatures';

const initialState = {
    errorMapSlug: false,
    realisation: false,
    index: 1,
    anchors: ["PRESENTATION", "CONTACT"]
};
  
function reducer(state, action) {
    switch (action.type) {
        case 'loaded':
            let anchors;
            state.realisation.features ? anchors = ["PRESENTATION" ,"FONCTIONALITES" , "CONTACT"]  : anchors = ["PRESENTATION", "CONTACT"];
            return {errorMapSlug: false, realisation: action.payload.realisation, index: action.payload.index, anchors: anchors};
        case 'errImport':
            return {errorMapSlug: true, realisation: false, index: action.payload.index, anchors: ["PRESENTATION", "CONTACT"] };
        case 'notFound':
            return {...state, errorMapSlug: true, realisation: false};
        default:
            throw new Error();
    }
}

const Realisation = ({mode, changeMode, handleStyleFpNav}) => {
    let { slug } = useParams();
    const [state, dispatch] = useReducer(reducer, initialState);

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
        if (!state.errorMapSlug) {
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
            /*afterLoad={() => {
                handleStyleFpNav();
            }}
            onLeave={(origin, destination, direction) => {
            }}*/
            render={({ state/*, fullpageApi */}) => {

                console.log('render view')

                if(state) {
                    if(state.initialized) {
                        handleStyleFpNav();
                    }
                }
                
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
                    dispatch({type: 'loaded', payload: {realisation: data.default[0], index: index}});
                }).catch((err) => {console.log(err); dispatch({type: 'errImport', payload: { index: index }});} );
            } else {
                dispatch({type: 'notFound'});
            }
        }
        importRealisation();
    },[slug]);

    return (

        <RealisationView/>

    );
}

export default Realisation;