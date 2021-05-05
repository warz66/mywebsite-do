import './Hero.css';
import cv from 'assets/rsc/CVOeslickDavid.pdf'
import keanu from 'assets/images/matrix-keanu-reeves.png'

const Hero = () => {

    return (

        <section id="hero">
            <div id="wrapper-hero">
                <div id="hero-text">
                    <span>BONJOUR</span>
                    <h1>Je suis <span>David</span> Oeslick</h1>
                    <p>Développeur Web Front-end / Symfony</p>
                    <a href={cv} download="CVOeslickDavid.pdf" id="btn-dl-cv">
                        DOWNLOAD CV
                    </a>
                </div>
                <div id="hero-img">
                    <img src={keanu} alt=""/>
                </div>
            </div>
        </section>

    );

}
    
export default Hero;