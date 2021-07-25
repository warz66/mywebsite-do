import './NotFound.css';
import Header from 'components/header/Header';

const NotFound = () => {
    return(
        <>
            <Header/> 

            <div id="not-found-page" className="bg-vr">
                <div>Erreur 404</div>
                <div>
                    Oops! Cette page <br />
                    n'existe pas.
                </div>
            </div>
        </>
    );
}

export default NotFound;