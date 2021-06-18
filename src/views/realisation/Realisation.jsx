import './Realisation.css'
import React, { useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Header from 'components/header/Header';
import { useLocation } from "react-router-dom";
import Contact from 'components/contact/Contact';

const Realisation = ({fullpageApi}) => {
    const location = useLocation();
    const [isLoaded, setIsLoaded] = useState(false);
    const realisation = useState(null);

    /*console.log(fullpageApi);
    fullpageApi.destroy('all');*/

    //const realisation = React.lazy(() => import("assets/realisations/"+location.state.realisationPath));

    import("assets/realisations/"+location.state.realisationPath).then( data => {
        realisation = data; console.log(realisation); setIsLoaded(true);
    });

    console.log(realisation);

    /*function RealisationData() {
        return (
            <h1>ça marche !!!</h1>
        );
    }*/

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
        if(!isLoaded) {
            return <span>coucou</span>
        } else {
            return <RealisationData/>
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