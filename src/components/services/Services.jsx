import './Services.css'
import symfonyLogo from 'assets/images/symfony-logo.svg'
import wordpressLogo from 'assets/images/wordpress-logo.svg'
import vueReactLogo from 'assets/images/vue-react-logo.svg'

const Services = () => {

    return (

        <section id="services" className="section bg-vr">
            <div id="wrapper-services">
                <h2>Services</h2>
                <p>In viverra sapien quis finibus egestas. Curabitur quis mattis arcu. Suspendisse ac est nibh. Mauris at nibh ut magna convallis viverra. Vestibulum felis erat, lacinia id sodales porttitor, gravida quis nibh.</p>
                <div id="box-services">
                    <div className="box-service">
                       <img className="logo-service" src={vueReactLogo} alt="" />
                       <h3>Frontend VueJS ou React</h3>
                        <p>Si vous avez besoin de développer une application dynamique et réactive, je maitrise les frameworks VueJS et React.</p> 
                    </div>
                    <div className="box-service">
                       <img className="logo-service" src={symfonyLogo} alt="" />
                       <h3>Backend Symfony</h3>
                       <p>Je développe des applications PHP depuis plus de 11 ans et je maitrise les frameworks Symfony 5 et Laravel 6.</p> 
                    </div>   
                    <div className="box-service">
                       <img className="logo-service" src={wordpressLogo} alt="" />
                       <h3>Développement Wordpress</h3>
                       <p>Vous recherchez une personne pour développer un thème ou un plugin sur mesure ? Je maitrise les outils ACF, Bedrock, Timber, Themosis.</p> 
                    </div>       
                </div>    
            </div>            
        </section>

    );

}
    
export default Services;