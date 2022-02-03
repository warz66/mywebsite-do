import './RealisationCard.css'
import { Link } from "react-router-dom";

const RealisationCard = ({realisation}) => {

    return (
        <div className="realisation-card">
            <img src={realisation.image} alt=""/>
            {/*<Link to={{ pathname: "/realisation/"+realisation.slug }}><img src={realisation.image} alt=""/></Link>*/}
            <div className="realisation-card-text">
                <div className="realisation-card-tag">{realisation.techs}</div>
                <h4>{realisation.title}</h4>
                {/*<Link to={{ pathname: "/realisation/"+realisation.slug }}><h4>{realisation.title}</h4></Link>*/}
                <p>{realisation.sum}</p>
            </div>
            <Link to={{ pathname: "/realisation/"+realisation.slug }} className="realisation-card-more">En savoir plus</Link>
        </div>
    );

}
    
export default RealisationCard;