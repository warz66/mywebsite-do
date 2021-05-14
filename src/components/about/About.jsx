import './About.css'
import homer from 'assets/images/homer.png'
import signature from 'assets/images/signature.svg'

const About = () => {

    return (

        <section id="about" className="section bg-dark">
            
            <div id="wrapper-about">

                <div id="about-text">
                    <div>
                        <img src={homer} alt="" />
                    </div>
                    <div>
                        <h2>A propos de moi</h2>
                        <p>
                            Keanu Reeves est un acteur canadien, né le 2 septembre 1964 à Beyrouth2,3 (Liban) et qui habite aux États-Unis, dont il est aussi citoyen4.<br/><br/>
                            Après avoir été révélé à la fin des années 1980 dans deux films buddy movie : L'Excellente Aventure de Bill et Ted (1989) et Point Break (1991), il fait une prestation remarquée dans Dracula (1992). Il s'impose ensuite comme un acteur incontournable du cinéma d'action avec les rôles de Jack Traven dans Speed (1994) et de Neo dans la trilogie Matrix (1999-2003).<br/><br/>
                            {/*Parallèlement à sa carrière d'acteur, il est bassiste dans le groupe grunge Dogstar, de 1991 à 2002, et plus récemment dans le groupe Becky.<br/><br/>
                            Le 31 janvier 2005, il a reçu une étoile sur le Hollywood Walk of Fame à Los Angeles. Dans l'émission Entertainment Tonight en 2006, Keanu Reeves a été inclus dans le « Top 10 des stars préférées des Américains ».<br/><br/>
                            En 2014, il fait un retour remarqué en imposant un nouveau héros du cinéma d'action avec le film John Wick.<br/><br/>*/}
                        </p>
                        <span><img src={signature} alt="" /></span>
                    </div>
                </div>

            </div>

        </section>

    );

}
    
export default About;