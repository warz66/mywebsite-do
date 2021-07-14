import './RealisationFeature.css';
import ImageRealisation from 'components/image-realisation/ImageRealisation';

const RealisationFeature = ({feature}) => {

    return(
        <div className="realisation-feature">
            <div className="realisation-feature-text">
                <h4>{feature.title}</h4>
                {feature.text.map( (paragraphe, index) => {
                    return <p key={index}>{paragraphe}</p>
                })}
            </div>
            <div className="realisation-feature-img">
                <div className="realisation-feature-link">
                    {feature.linkGithub && <a href={feature.linkGithub} target="_blank" rel="noreferrer">Lien github</a>}
                    {feature.linkGithub && feature.linkWebsite && <span>/</span>}
                    {feature.linkWebsite && <a href={feature.linkWebsite} target="_blank" rel="noreferrer">Voir le site</a>}
                </div>
                {/*<img src={feature.image} alt=""/>*/}
                <ImageRealisation image={feature.image}/>
            </div>
        </div>
    );

}

export default RealisationFeature;