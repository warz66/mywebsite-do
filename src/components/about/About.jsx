import './About.css'
import krPortrait from 'assets/images/kr-portrait.png'
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
                        <img src={krPortrait} alt="" />
                    </div>
                    <div id="presentation-about-text">
                        <h2>A propos de moi</h2>
                        <p>
                            Pour commencer, l'ordinateur m'as naturellement attiré de par son accéssibilité, son environnement 'complet' et complexe, et ses possibilités créatives en tout genre. Parmis elle, il y'a le développement web, qui répond en moi à un certains besoins de construire et résoudre des problématiques de façon varié et technique tout en laissant place à mon imagination. Le web est tellement omniprésent qu'une bonne idée peut toucher le monde entier, on peut y créer les projets les plus fou, comme les plus simple, les plus utiles ou originaux... C'est un métier passion, c'est ma passion !<br/>
                            Titulaire d'un BTS IRIS (informatique et réseaux pour l'industrie et les services), cette formation ma donné de bonne base en programmation (C/C++), analyse et conception.<br/>  
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
                            {/*Keanu Reeves est un acteur canadien, né le 2 septembre 1964 à Beyrouth2,3 (Liban) et qui habite aux États-Unis, dont il est aussi citoyen4.<br/><br/>
                            Après avoir été révélé à la fin des années 1980 dans deux films buddy movie : L'Excellente Aventure de Bill et Ted (1989) et Point Break (1991), il fait une prestation remarquée dans Dracula (1992). Il s'impose ensuite comme un acteur incontournable du cinéma d'action avec les rôles de Jack Traven dans Speed (1994) et de Neo dans la trilogie Matrix (1999-2003).<br/><br/>
                            Parallèlement à sa carrière d'acteur, il est bassiste dans le groupe grunge Dogstar, de 1991 à 2002, et plus récemment dans le groupe Becky.<br/><br/>
                            Le 31 janvier 2005, il a reçu une étoile sur le Hollywood Walk of Fame à Los Angeles. Dans l'émission Entertainment Tonight en 2006, Keanu Reeves a été inclus dans le « Top 10 des stars préférées des Américains ».<br/><br/>
                            En 2014, il fait un retour remarqué en imposant un nouveau héros du cinéma d'action avec le film John Wick.<br/><br/>*/}
                        </p>
                        <div>
                            <div onClick={() => {fullpageApi.moveTo(5)}} className="btn">CONTACTEZ-MOI</div>
                            {/*<a href="\" className="btn">
                                CONTACTEZ-MOI
                            </a>*/}
                            <span><img src={mode ? signatureLight : signatureDark} alt="" /></span>
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