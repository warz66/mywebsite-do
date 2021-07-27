import './Realisation.css'
import React, { useEffect, useReducer } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Header from 'components/header/Header';
import { useParams, Link } from "react-router-dom";
import Contact from 'components/contact/Contact';
import realisationsMap from 'assets/realisations/realisationsMap';
import RealisationPresentation from 'components/realisation-presentation/RealisationPresentation';
import RealisationFeatures from 'components/realisation-features/RealisationFeatures';
import { useDispatch } from 'react-redux';
import { handleStyleFpNav } from 'features/mode';

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
            return {...state, realisation: false};
        default:
            return initialState;    
    }
}

const RealisationLazy = (({stateR, slug}) => {
    if (!stateR.errorMapSlug) {
            return (
                <>  
                    <RealisationPresentation realisation={stateR.realisation}/>
                    
                    {stateR.realisation.features && <RealisationFeatures features={stateR.realisation.features}/>}
                </>
            );
    } else {
        return <div id="realisation-error" className="section bg-vr">Nous n'avons pas trouvé la réalisation correspondant à l'url: {slug}.</div>
    }
});

const RealisationView = ({stateR, dispatch, slug}) => {
    const dispatchRedux = useDispatch();

    function nextRealisation() {
        if(stateR.index === realisationsMap.length-1) {
            return realisationsMap[0];
        }
        return realisationsMap[stateR.index+1];
    }

    function previousRealisation() {
        if(stateR.index === 0) {
            return realisationsMap[realisationsMap.length-1];
        }
        return realisationsMap[stateR.index-1];
    }
    return (
        <ReactFullpage
            licenseKey='Dg4568-sdfg9879-sdfg78795'
            //anchors={anchors}
            navigation
            navigationTooltips={stateR.anchors}
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
                dispatchRedux(handleStyleFpNav());
            }}
            render={({ state/*, fullpageApi */}) => {

                /*console.log(state)

                if(state) {
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

                        <RealisationLazy stateR={stateR} slug={slug}/>

                        <Contact/>

                    </ReactFullpage.Wrapper>

                );
            }}
        />
    );
};

const Realisation = () => {
    let { slug } = useParams();
    const [state, dispatch] = useReducer(reducer, initialState);

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
            <RealisationView stateR={state} dispatch={dispatch} slug={slug}/>

            <div id="lightbox-container"></div>
        </>
    );
}

export default Realisation;