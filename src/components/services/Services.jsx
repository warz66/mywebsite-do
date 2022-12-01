import './Services.css'
import symfonyLogoDark from 'assets/images/symfony-logo-dark.svg'
import wordpressLogoDark from 'assets/images/wordpress-logo-dark.svg'
import vueReactLogoDark from 'assets/images/vue-react-logo-dark.svg'
import symfonyLogoLight from 'assets/images/symfony-logo-light.svg'
import wordpressLogoLight from 'assets/images/wordpress-logo-light.svg'
import vueReactLogoLight from 'assets/images/vue-react-logo-light.svg'
import htmlCssJsLogoDark from 'assets/images/html-css-js-logo-dark.svg'
import htmlCssJsLogoLight from 'assets/images/html-css-js-logo-light.svg'
import { useSelector } from 'react-redux'

const Services = ({sectionActive}) => {
    const mode = useSelector((state) => state.mode.value);

    return (

        <section id="services" className={`section bg-vr ${sectionActive ? " active" : ""}`}>
            <div id="wrapper-services">
                <h2>Mes services</h2>
                <p>Je réalise vos projets et fonctionnalités web sur mesure avec soin et professionnalisme et m'adapte aux technologies selon vos besoins.</p>
                <div id="box-services">
                    <div className="box-service">
                       <img className="logo-service" src={mode ? htmlCssJsLogoLight : htmlCssJsLogoDark} alt="logo html css js" />
                       <h3>Intégration</h3>
                        <p>J'intègre votre maquette graphique et animations en HTML/CSS/JS tout en respectant les règles et l'architecture technique d'optimisation pour le SEO.</p> 
                    </div>
                    <div className="box-service">
                       <img className="logo-service" src={mode ? vueReactLogoLight : vueReactLogoDark} alt="logo Vue & React" />
                       <h3>Frontend VueJS ou React</h3>
                        <p>Besoin de développer une application dynamique et réactive ? Je travaille avec les frameworks VueJS et React.</p> 
                    </div>
                    <div className="box-service">
                       <img className="logo-service" src={mode ? symfonyLogoLight : symfonyLogoDark} alt="logo Symfony" />
                       <h3>Framework Symfony</h3>
                       <p>Je développe la partie back end et front end de votre application en Symfony, framework PHP, basé sur la structure MVC (Model View Controller).</p> 
                    </div>   
                    <div className="box-service">
                       <img className="logo-service" src={mode ? wordpressLogoLight : wordpressLogoDark} alt="logo Wordpress" />
                       <h3>Développement Wordpress</h3>
                       <p>Vous recherchez une personne compétente pour développer un thème ou un plugin sur mesure ? Je maitrise les outils ACF et Divi Builder.</p> 
                    </div>       
                </div>    
            </div>            
        </section>

    );

}
    
export default Services;