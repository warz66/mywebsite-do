import './RealisationPresentation.css';
import SwitchMode from 'components/switch-mode/SwitchMode';

const RealisationPresentation = ({mode, changeMode, realisation}) => {

    return (
        <div className="section bg-vr">
            <div id="wrapper-presentation-1980">
                <div id="wrapper-presentation">
                    <div id="realisation-presentation-img">
                        <img src={realisation.image} alt="" />
                    </div>
                    <div id="realisation-presentation-title">
                        <h2>{realisation.title}</h2>
                    </div>
                    <div id="realisation-presentation-text">
                        <span>{realisation.techs}</span>
                        {realisation.presentation.map( (paragraphe, index) => {
                            return <p key={index}>{paragraphe}</p>
                        })}
                        <a href={realisation.linkGithub} target="_blank">Dépôt github</a>
                        <a href={realisation.linkWebsite} target="_blank">Voir le site</a>
                    </div>
                </div>
                <SwitchMode mode={mode} changeMode={changeMode} text={false}/>
            </div>
        </div>
    );

}

export default RealisationPresentation;