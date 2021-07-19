import './RealisationPresentation.css';
import SwitchMode from 'components/switch-mode/SwitchMode';
import { useState } from 'react';
import React from 'react';
import ImageRealisation from 'components/image-realisation/ImageRealisation';

const RealisationPresentation = ({realisation}) => {
    const [loaded, setLoaded] = useState(false);

    function onLoad() {
        if(!loaded) {
            setLoaded(true);
        }
    }

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

export default React.memo(RealisationPresentation);