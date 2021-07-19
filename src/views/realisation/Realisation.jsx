import './Realisation.css'
import React, { useEffect, useReducer } from "react";
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
    index: 0,
    anchors: ["PRESENTATION", "CONTACT"],
};
  
function reducer(state, action) {
    switch (action.type) {
        case 'loaded':
            let anchors;
            action.payload.realisation.features ? anchors = ["PRESENTATION" ,"FONCTIONALITES" , "CONTACT"] : anchors = ["PRESENTATION", "CONTACT"];
            return {errorMapSlug: false, realisation: action.payload.realisation, index: action.payload.index, anchors: anchors};
        case 'errImport':
            return {errorMapSlug: true, realisation: false, index: action.payload.index, anchors: ["PRESENTATION", "CONTACT"] };
        case 'notFound':
            return {...state, errorMapSlug: true, realisation: false};
        case 'reset':
            return initialState;
        default:
            return initialState;    
    }
}

const Realisation = ({handleStyleFpNav}) => {
    let { slug } = useParams();
    const [state, dispatch] = useReducer(reducer, initialState);
    
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
                return (
                    <>  
                        <RealisationPresentation realisation={state.realisation}/>
                        
                        {state.realisation.features && <RealisationFeatures features={state.realisation.features}/>}
                    </>
                );
        } else {
            return <div id="realisation-error" className="section bg-vr">Nous n'avons pas trouvé la réalisation correspondant à l'url: {slug}.</div>
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
            afterRender={() =>{
                handleStyleFpNav();
            }}
            render={({ state/*, fullpageApi */}) => {

                //console.log('render view')

                /*if(state) {
                    if(state.initialized) {
                        handleStyleFpNav();
                    }
                }*/
                
                return (

                    <ReactFullpage.Wrapper>

                        <Header/>

                        <Link className="link-nav-realisation" to={'/realisation/'+previousRealisation().slug} onClick={() => dispatch({type: 'reset'})}>
                            Projets précédent<br/>
                            <span>{previousRealisation().titleNav}</span>
                        </Link>

                        <Link className="link-nav-realisation" to={'/realisation/'+nextRealisation().slug} onClick={() => dispatch({type: 'reset'})}>
                            Projets suivant<br/>
                            <span>{nextRealisation().titleNav}</span>
                        </Link>

                        <RealisationLazy/>

                        <Contact/>

                    </ReactFullpage.Wrapper>

                );
            }}
        />
    );

    useEffect(() => {
        document.title = state.realisation.title+" | Réalisation"
    },[state.realisation]);

    useEffect(() => {
        function importRealisation() {
            //dispatch({type: 'reset'});
            const found = realisationsMap.find(realisation => realisation.slug === slug);
            if(found) {
                let index = realisationsMap.findIndex(realisation => realisation.slug === slug);
                var t0 = performance.now();
                import("assets/realisations/"+found.path).then( data => {
                    var t1 = performance.now();
                    console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")
                    dispatch({type: 'loaded', payload: {realisation: data.default[0], index: index}});
                }).catch((err) => {console.log(err); dispatch({type: 'errImport', payload: { index: index }});} );
            } else {
                dispatch({type: 'notFound'});
            }
        }
        importRealisation();
    },[slug]);

    return (
        <>
            <RealisationView/>

            <div id="lightbox-container"></div>
        </>
    );
}

export default Realisation;