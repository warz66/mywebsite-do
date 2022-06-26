import './Hero.css';
import SwitchMode from 'components/switch-mode/SwitchMode';
import ScrollDown from 'components/scroll-down/ScrollDown';
import photoHero from 'assets/images/photo-hero.png'
import React, { useState } from 'react';

const Hero = ({fullpageApi}) => {
    const [imgLoaded, setImgLoaded] = useState(false);

    return (

        <section id="hero" className="section bg-vr">
            <div id="wrapper-hero-1980">
                <div id="wrapper-hero">
                    <div id="hero-text">
                        <span>BONJOUR</span>
                        <h1>Je suis <span>David</span> Oeslick</h1>
                        <p>Développeur Web Junior Front-end / Symfony</p>
                        <div onClick={() => {fullpageApi.moveTo(4)}} className="btn">MES REALISATIONS</div>
                        {/*<a href={cv} download="CVOeslickDavid.pdf" className="btn">
                            DOWNLOAD CV
                        </a>*/}
                    </div>
                    <div id="hero-img" style={imgLoaded ? {opacity: 1} : {opacity: 0}}>
                        <img src={photoHero} alt="" onLoad={() => setImgLoaded(true)}/>
                    </div>
                </div>
                <ScrollDown/>
                <SwitchMode/>
            </div>
        </section>

    );

}
    
export default Hero;