import './About.css'
import photoAbout from 'assets/images/photo-about.png'
import signatureDark from 'assets/images/signature-dark.svg'
import signatureLight from 'assets/images/signature-light.svg'
import { useSelector } from 'react-redux';

const About = ({sectionActive, fullpageApi}) => {
    const mode = useSelector((state) => state.mode.value);

    //console.log('about render');

    return (

        <section id="about" className={`section bg-dark ${sectionActive ? " active" : ""}`}>
            
            <div id="wrapper-about">

                <div id="presentation-about">
                    <div id="presentation-about-img">
                        <img src={photoAbout} alt="photo mini portrait"/>
                    </div>
                    <div id="presentation-about-text">
                        <h2>A propos de moi</h2>
                        <p>
                            Depuis toujours, l'informatique m'a naturellement attiré par son accessibilité, son environnement riche et complexe et ses possibilités créatives. Parmi elle, le développement web, nourrit mon besoin de construire et résoudre des problématiques de façon variées et techniques tout en laissant place à mon imagination. Tout est possible dans l'univers du web, on peut créer les projets les plus fous, les plus ambitieux comme les plus simples, les plus utiles ou originaux... C'est un 'métier passion', c'est ma passion !<br/>
                            Titulaire d'un BTS IRIS (informatique et réseaux pour l'industrie et les services), cette formation m'a donné de bonne base en algorithmique et programmation (C/C++) ainsi qu'en analyse et conception, ce qui m'a permis de m'introduire et d'évoluer plus aisément dans l'univers du développement web.<br/>  
                            J'ai une affinité particulière pour le design, l'interface et l'expérience utilisateur. J'aime intégrer un visuel et imaginer la navigation de l'internaute, ce qui m'a instinctivement rapproché des technologies Front-end. Je fais également du développement back-end avec une bonne expérience en Symfony/Php, ce Framework m'a donné une vision plus claire dans le développement de projets d'envergure. Ouvert à collaborer sur tous types de projets, je suis curieux et enthousiaste d'appréhender et maitriser d'autres technologies (Angular, TypeScript, Node.js...).
                        </p>
                        <div>
                            <div onClick={() => {fullpageApi.moveTo(5)}} className="btn">CONTACTEZ-MOI</div>
                            {/*<a href="\" className="btn">
                                CONTACTEZ-MOI
                            </a>*/}
                            <span><img src={mode ? signatureLight : signatureDark} alt="symbole light dark" /></span>
                        </div>
                    </div>
                </div>

                <div id="skill-about">
                    <div id="skill-title-v">
                        Mes Compétances
                    </div>
                    <div id="progressBars-about">
                        <div>
                            HTML & CSS
                            <span className="progressBar" style={{'--width-progressBar': '100%'}}></span>
                        </div>
                        <div>
                            REACT
                            <span className="progressBar" style={{'--width-progressBar': '75%'}}> </span>
                            </div>
                        <div>
                            SYMFONY 5
                            <span className="progressBar" style={{'--width-progressBar': '75%'}}></span>
                        </div>
                        <div>
                            JAVASCRIPT
                            <span className="progressBar" style={{'--width-progressBar': '75%'}}></span>
                        </div>
                        <div>
                            VUE
                            <span className="progressBar" style={{'--width-progressBar': '75%'}}> </span>
                            </div>
                        <div>
                            PHP
                            <span className="progressBar" style={{'--width-progressBar': '75%'}}></span>
                        </div>
                    </div>
                </div>

            </div>

        </section>

    );

}
    
export default About;