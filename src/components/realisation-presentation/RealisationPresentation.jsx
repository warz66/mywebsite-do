import './RealisationPresentation.css';
import SwitchMode from 'components/switch-mode/SwitchMode';
import { useEffect, useState, useRef } from 'react';
import React from 'react';
import ImageRealisation from 'components/image-realisation/ImageRealisation';

const RealisationPresentation = ({realisation}) => {
    const [loaded, setLoaded] = useState(false);
    const t0 = useRef(performance.now());
    const t1 = useRef();

    function onLoad() {
        if(!loaded) {
            t1.current = performance.now();
            console.log("Call to doSomething took " + (t1.current - t0.current) + " milliseconds.");
            let timeLoaded = t1.current - t0.current;
            if (timeLoaded > 700) {
                setLoaded(true);
            } else {
                let timer = 700 - timeLoaded;
                setTimeout(function(){ setLoaded(true) }, timer);
            }
        }
    }

    useEffect(() => {
        if(!realisation) {
            setLoaded(false);
            t0.current = performance.now();
        }
    },[realisation]);

    return (
        <div className="section bg-vr">
            <div id="wrapper-presentation-1980">
                {!loaded && 
                    <div id="realisation-presentation-loading" className="clignote">
                        Loading...
                    </div>
                }
                {realisation && <div id="wrapper-presentation" style={loaded ? {opacity: 1} : {opacity: 0}} onLoad={() => onLoad()}>
                    <div id="realisation-presentation-img">
                        <ImageRealisation image={realisation.image}/>
                    </div>
                    <div id="realisation-presentation-title">
                        <h2>{realisation.title}</h2>
                    </div>
                    <div id="realisation-presentation-text">
                        <span id="realisation-presentation-tech">{realisation.techs}</span>
                        {realisation.presentation.map((paragraphe, index) => {
                            return <p key={index} dangerouslySetInnerHTML={{ __html:paragraphe}}></p>
                        })}
                        {realisation.linkOther && <a className="realisation-presentation-link" href={realisation.linkOther.link} target="_blank" rel="noreferrer">{realisation.linkOther.title}</a>}
                        <a className="realisation-presentation-link" href={realisation.linkGithub} target="_blank" rel="noreferrer">Dépôt github</a>
                        <a className="realisation-presentation-link" href={realisation.linkWebsite} target="_blank" rel="noreferrer">Voir le site</a>
                    </div>
                </div>}
                <SwitchMode text={false}/>
            </div>
        </div>
    );

}

export default RealisationPresentation;