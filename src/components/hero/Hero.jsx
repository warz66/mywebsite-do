import './Hero.css';
import SwitchMode from 'components/switch-mode/SwitchMode';
import ScrollDown from 'components/scroll-down/ScrollDown';
import cv from 'assets/rsc/CVOeslickDavid.pdf'
import keanu from 'assets/images/keanu-reeves.png'

const Hero = ({mode, changeMode}) => {

    return (

        <section id="hero" className="section bg-vr">
            <div id="wrapper-hero-1980">
                <div id="wrapper-hero">
                    <div id="hero-text">
                        <span>BONJOUR</span>
                        <h1>Je suis <span>Keanu</span> Reeves</h1>
                        <p>Développeur Web Junior Front-end / Symfony</p>
                        <a href={cv} download="CVOeslickDavid.pdf" className="btn">
                            DOWNLOAD CV
                        </a>
                    </div>
                    <div id="hero-img">
                        <img src={keanu} alt=""/>
                    </div>
                </div>
                <ScrollDown/>
                <SwitchMode mode={mode} changeMode={changeMode}/>
            </div>
        </section>

    );

}
    
export default Hero;