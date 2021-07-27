import './RealisationPresentation.css';
import SwitchMode from 'components/switch-mode/SwitchMode';
import { useEffect, useState, useRef } from 'react';
import React from 'react';
import ImageRealisation from 'components/image-realisation/ImageRealisation';

const RealisationPresentation = ({realisation}) => {
    const [loaded, setLoaded] = useState(false);
    const [timeLoaded, setTimeLoaded] = useState();
    const [display, setDisplay] = useState(false);
    const t0 = useRef(performance.now());
    const t1 = useRef();

    function onLoad() {
        if(!loaded) {
            t1.current = performance.now();
            setLoaded(true);
        }
    }

    function handleDisplay() {
        if (timeLoaded > 800) {
            setDisplay(true);
        } else {
            let timer = 800 - timeLoaded;
            setTimeout(function(){ setDisplay(true) }, timer);
        }
    }

    useEffect(() => {
        if(loaded) {
            console.log(t1);
            console.log("Call to doSomething took " + (t1.current - t0.current) + " milliseconds.");
            setTimeLoaded(t1.current - t0.current);
            handleDisplay();
        }
        return () => {
            if(loaded) {
                t0.current = performance.now();
            }
        }
    },[loaded]);

    useEffect(() => {
        setLoaded(false);
        setDisplay(false);
    },[realisation]);

    return (
        <div className="section bg-vr">
            <div id="wrapper-presentation-1980">
                {!display && 
                    <div id="realisation-presentation-loading" className="clignote">
                        Loading...
                    </div>
                }
                {realisation && <div id="wrapper-presentation" style={display ? {opacity: 1} : {opacity: 0}} onLoad={() => onLoad()}>
                    <div id="realisation-presentation-img">
                        <ImageRealisation image={realisation.image}/>
                    </div>
                    <div id="realisation-presentation-title">
                        <h2>{realisation.title}</h2>
                    </div>
                    <div id="realisation-presentation-text">
                        <span>{realisation.techs}</span>
                        {realisation.presentation.map( (paragraphe, index) => {
                            return <p key={index}>{paragraphe}</p>
                        })}
                        <a href={realisation.linkGithub} target="_blank" rel="noreferrer">Dépôt github</a>
                        <a href={realisation.linkWebsite} target="_blank" rel="noreferrer">Voir le site</a>
                    </div>
                </div>}
                <SwitchMode text={false}/>
            </div>
        </div>
    );

}

export default RealisationPresentation;