import './Hero.css';
import SwitchMode from 'components/switch-mode/SwitchMode';
import ScrollDown from 'components/scroll-down/ScrollDown';
import cv from 'assets/rsc/CVOeslickDavid.pdf'
import keanu from 'assets/images/keanu-reeves.png'
import { useState } from 'react';

const Hero = () => {

    function ImgHero() {
        const [imgLoaded, setImgLoaded] = useState(false);

        return(
            <div id="hero-img" style={imgLoaded ? {opacity: 1} : {opacity: 0}}>
                <img src={keanu} alt="" onLoad={() => setImgLoaded(true)}/>
            </div>
        );
    }

    return (

        <section id="hero" className="section bg-vr">
            <div id="wrapper-hero-1980">
                <div id="wrapper-hero">
                    <div id="hero-text">
                        <span>BONJOUR</span>
                        <h1>Je suis <span>David</span> Oeslick</h1>
                        <p>Développeur Web Junior Front-end / Symfony</p>
                        <a href={cv} download="CVOeslickDavid.pdf" className="btn">
                            DOWNLOAD CV
                        </a>
                    </div>
                    <ImgHero/>
                </div>
                <ScrollDown/>
                <SwitchMode/>
            </div>
        </section>

    );

}
    
export default Hero;