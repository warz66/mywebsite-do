import './RetourHaut.css';
import { useEffect, useState } from 'react';

const RetourHaut = () => {
    const [retourHautVisible, setRetourHautVisible] = useState(false);

    function retourHaut() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    useEffect(() => {
        function handleRetourHautVisible ()  {
            window.onscroll = function() {
                (window.pageYOffset > 1100) ? setRetourHautVisible(true) : setRetourHautVisible(false);
            };
        };
        window.addEventListener('DOMContentLoaded', handleRetourHautVisible());
        return(()=> {
            window.removeEventListener('DOMContentLoaded', handleRetourHautVisible());
        });
    },[]);

    return (

        <span 
            id="retour-haut-realisation" className={retourHautVisible ? "retour-haut-realisation-visible" : "retour-haut-realisation-invisible" } 
            onClick={() => retourHaut()}
        > </span>

    );

}
    
export default RetourHaut;