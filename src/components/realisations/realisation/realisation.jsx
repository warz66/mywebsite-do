import './realisation.css'

const Realisation = ({realisation}) => {

    return (
        <div className="card-realisation">
            <img className="" src={realisation.image} alt=""/>
            <div className="card-realisation-text">
                <div className="card-realisation-tag">{realisation.techs}</div>
                <h4>{realisation.title}</h4>
                <p>{realisation.sum}</p>
            </div>
            <a href={realisation.path} className="card-realisation-more">En savoir plus</a>
        </div>
    );

}
    
export default Realisation;