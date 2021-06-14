import './Hero.css';
import cv from 'assets/rsc/CVOeslickDavid.pdf'
import keanu from 'assets/images/keanu-reeves.png'
//import arrowDown from 'assets/images/arrow-down.svg'

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
                <div id="scroll-down">
                    SCROLL DOWN
                    <svg xmlns="http://www.w3.org/2000/svg" width="8.08" height="37" viewBox="0 0 4.04 18.5"><g id="Calque_2" data-name="Calque 2"><g id="Calque_1-2" data-name="Calque 1"><path d="M2.52 15 2.52 0 1.52 0 1.52 15 0 15 2.02 18.5 4.04 15 2.52 15z"/></g></g></svg>
                </div>
                <div className="switch-mode">
                    <label>
                        <span className="switch-mode-text">{mode ? 'LIGHT MODE' : 'DARK MODE'}</span>
                        <input type="checkbox" defaultChecked={mode} onChange={changeMode}/>
                        <div className="switch">
                            <div></div>
                            <div></div>
                            <span></span>
                        </div>
                    </label>
                </div>
            </div>
        </section>

    );

}
    
export default Hero;