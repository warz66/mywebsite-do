import './RealisationPresentation.css';
import SwitchMode from 'components/switch-mode/SwitchMode';
import { useState } from 'react';
import ImageRealisation from 'components/image-realisation/ImageRealisation';

const RealisationPresentation = ({mode, changeMode, realisation}) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className="section bg-vr">
            <div id="wrapper-presentation-1980">
                {!loaded && 
                    <div id="realisation-presentation-loading" className="clignote">
                        Loading...
                    </div>
                }
                {realisation && <div id="wrapper-presentation" style={loaded ? {opacity: 1} : {opacity: 0}} onLoad={() => setLoaded(true)}>
                    <div id="realisation-presentation-img">
                        {/*<img src={realisation.image} alt=""/>*/}
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
                <SwitchMode mode={mode} changeMode={changeMode} text={false}/>
            </div>
        </div>
    );

}

export default RealisationPresentation;