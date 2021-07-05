import './RealisationFeature.css';

const RealisationFeature = ({feature}) => {

    return(
        <div className="realisation-feature">
            {/*<div className="realisation-feature-img">
                <img className="" src={feature.image} alt=""/>
            </div>
            <div className="realisation-feature-title">
                <h3>{feature.title}</h3>
            </div>
            <div className="realisation-feature-text">
                {feature.text.map( (paragraphe, index) => {
                    return <p key={index}>{paragraphe}</p>
                })}
            </div>*/}
            <h3>{feature.title}</h3>
            <img className="" src={feature.image} alt=""/>
            {feature.text.map( (paragraphe, index) => {
                return <p key={index}>{paragraphe}</p>
            })}
        </div>
    );

}

export default RealisationFeature;