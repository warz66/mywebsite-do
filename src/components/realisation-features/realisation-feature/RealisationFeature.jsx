import './RealisationFeature.css';

const RealisationFeature = ({feature}) => {

    return(
        <div className="realisation-feature">
            {/*<div className="realisation-feature-title">
                <h4>{feature.title}</h4>
            </div>*/}
            <div className="realisation-feature-text">
                <h4>{feature.title}</h4>
                {feature.text.map( (paragraphe, index) => {
                    return <p key={index}>{paragraphe}</p>
                })}
            </div>
            <div className="realisation-feature-img">
                <img className="" src={feature.image} alt=""/>
                <div className="realisation-feature-link">
                    {feature.linkGithub && <a href={feature.linkGithub} target="_blank" rel="noreferrer">Dépôt github</a>}
                    {feature.linkWebsite && <a href={feature.linkWebsite} target="_blank" rel="noreferrer">Voir le site</a>}
                </div>
            </div>
        </div>
    );

}

export default RealisationFeature;