import './RealisationPresentation.css';
import SwitchMode from 'components/switch-mode/SwitchMode';

const RealisationPresentation = ({mode, changeMode, realisation}) => {

    return (
        <div className="section bg-vr">
            <div id="wrapper-presentation">
                <img src={realisation.image} alt="" />
                <div id="realisation-presentation-text">
                    <h2>{realisation.title}</h2>
                    {realisation.presentation.map( (paragraphe, index) => {
                        return <p key={index}>{paragraphe}</p>
                    })}
                    <a href={realisation.linkGithub}>Dépôt github</a>
                    <a href={realisation.linkWebsite}>Voir le site</a>
                </div>
            </div>
            <SwitchMode mode={mode} changeMode={changeMode} text={false}/>
        </div>
    );

}

export default RealisationPresentation;