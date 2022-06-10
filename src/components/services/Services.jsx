import './Services.css'
import symfonyLogoDark from 'assets/images/symfony-logo-dark.svg'
import wordpressLogoDark from 'assets/images/wordpress-logo-dark.svg'
import vueReactLogoDark from 'assets/images/vue-react-logo-dark.svg'
import symfonyLogoLight from 'assets/images/symfony-logo-light.svg'
import wordpressLogoLight from 'assets/images/wordpress-logo-light.svg'
import vueReactLogoLight from 'assets/images/vue-react-logo-light.svg'
import { useSelector } from 'react-redux'

const Services = ({sectionActive}) => {
    const mode = useSelector((state) => state.mode.value);

    return (

        <section id="services" className={`section bg-vr ${sectionActive ? " active" : ""}`}>
            <div id="wrapper-services">
                <h2>Mes services</h2>
                <p>Besoin d'un service de qualité ? Je réalise vos projets web sur mesure avec soin et professionnalisme et m'adapte aux technologies selon vos besoins. Fini les aller-retours interminables parce que l'intégration ne correspond pas à 100% à vos maquettes, votre site sera tel que vous l'avez imaginé, les animations en plus.</p>
                <div id="box-services">
                    <div className="box-service">
                       <img className="logo-service" src={mode ? vueReactLogoLight : vueReactLogoDark} alt="" />
                       <h3>Intégration</h3>
                        <p>Je découpe, j'assemble et j'intègre votre maquette graphique en HTML / CSS tout en respectant les règles et l'architecture technique d'optimisation pour le SEO.</p> 
                    </div>
                    <div className="box-service">
                       <img className="logo-service" src={mode ? vueReactLogoLight : vueReactLogoDark} alt="" />
                       <h3>Frontend VueJS ou React</h3>
                        <p>Si vous avez besoin de développer une application dynamique et réactive, je travail avec les frameworks VueJS et React.</p> 
                    </div>
                    <div className="box-service">
                       <img className="logo-service" src={mode ? symfonyLogoLight : symfonyLogoDark} alt="" />
                       <h3>Framework Symfony</h3>
                       <p>Je peux développer la partie back end et front end de votre application en Symfony, framework PHP, basé sur la structure MVC (Model View Controller).</p> 
                    </div>   
                    <div className="box-service">
                       <img className="logo-service" src={mode ? wordpressLogoLight : wordpressLogoDark} alt="" />
                       <h3>Développement Wordpress</h3>
                       <p>Vous recherchez une personne pour développer un thème ou un plugin sur mesure ? Je maitrise les outils ACF et Divi Builder.</p> 
                    </div>       
                </div>    
            </div>            
        </section>

    );

}
    
export default Services;