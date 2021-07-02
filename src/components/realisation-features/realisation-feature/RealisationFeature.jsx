import './RealisationFeature.css';

const RealisationFeature = ({feature}) => {

    return(
        <div className="realisation-feature">
            <div>
                <img className="" src={feature.image} alt=""/>
            </div>
            <div>
                <h3>{feature.title}</h3>
            </div>
            <div>
                {feature.text.map( (paragraphe, index) => {
                    return <p key={index}>{paragraphe}</p>
                })}
            </div>
        </div>
    );

}

export default RealisationFeature;