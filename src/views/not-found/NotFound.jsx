import './NotFound.css';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import SwitchMode from 'components/switch-mode/SwitchMode';

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
                <SwitchMode/>
            </div>

            <Footer/>
        </>
    );
}

export default NotFound;