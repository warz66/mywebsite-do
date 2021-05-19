import Flickity from 'react-flickity-component'
import archRealisation from 'assets/images/arch-realisation.jpg'
import photosnapRealisation from 'assets/images/photosnap-realisation.jpg'
import countriesRealisation from 'assets/images/countries-realisation.jpg'
import mairieRealisation from 'assets/images/mairie-realisation.jpg'
import clipboardRealisation from 'assets/images/clipboard-realisation.jpg'
import roomRealisation from 'assets/images/room-realisation.jpg'
import 'flickity/dist/flickity.min.css'
import './Realisations.css'

const Realisations = () => {

    const flickityOptions = {
        /*freeScroll: true,*/
        contain: true,
        initialIndex: 0,
        groupCells: true,
        prevNextButtons: false,
        pageDots: true,
        watchCSS: true
    }

    return (

        <section id="realisations" className="section bg-dark">
            <div id="wrapper-realisations">
                <h2>Réalisations</h2>
                <p>In viverra sapien quis finibus egestas. Curabitur quis mattis arcu. Suspendisse ac est nibh. Mauris at nibh ut magna convallis viverra. Vestibulum felis erat, lacinia id sodales porttitor, gravida quis nibh.</p>
                <Flickity
                    className={'carousel'} // default ''
                    elementType={'div'} // default 'div'
                    options={flickityOptions} // takes flickity options {}
                    disableImagesLoaded={false} // default false
                    reloadOnUpdate // default false
                    static // default false
                >
                    <div className="card-realisation">
                        <img className="" src={archRealisation} alt="" />
                        <div className="card-realisation-text">
                            <div className="card-realisation-tag">React</div>
                            <h4>Arch Studio multi-page website</h4>
                            <p>In this challenge, you'll be building a 4-page site that will look great in any portfolio. You'll even get the chance to play with mapping APIs if you choose the bonus.</p>
                        </div>
                        <a href="" className="card-realisation-more">En savoir plus</a>
                    </div>
                    <div className="card-realisation">
                       <img className="" src={photosnapRealisation} alt="" />
                       <div className="card-realisation-text">
                            <div className="card-realisation-tag">Vue</div>
                            <h4>Photosnap multi-page website</h4>
                            <p>In this challenge, you'll be building the marketing site for a photo-sharing app. This will be a perfect opportunity to put your CSS Grid skills to the test!</p>
                        </div>
                        <a href="" className="card-realisation-more">En savoir plus</a>
                    </div>
                    <div className="card-realisation">
                       <img className="" src={countriesRealisation} alt="" />
                       <div className="card-realisation-text">
                            <div className="card-realisation-tag">React</div>
                            <h4>REST Countries API with color theme switcher</h4>
                            <p>If you're wanting to test your JavaScript skills this is the challenge for you. Use whichever JS framework you prefer and pull data from the REST Countries API.</p>
                        </div>
                        <a href="" className="card-realisation-more">En savoir plus</a>
                    </div>
                    <div className="card-realisation">
                       <img className="" src={countriesRealisation} alt="" />
                       <div className="card-realisation-text">
                            <div className="card-realisation-tag">Vue</div>
                            <h4>REST Countries API with color theme switcher</h4>
                            <p>If you're wanting to test your JavaScript skills this is the challenge for you. Use whichever JS framework you prefer and pull data from the REST Countries API.</p>
                        </div>
                        <a href="" className="card-realisation-more">En savoir plus</a>
                    </div>
                    <div className="card-realisation">
                       <img className="" src={mairieRealisation} alt="" />
                       <div className="card-realisation-text">
                            <div className="card-realisation-tag">Symfony</div>
                            <h4>Web Solution Mairie</h4>
                            <p>Solution pour site institutionnel</p>
                        </div>
                        <a href="" className="card-realisation-more">En savoir plus</a>
                    </div>
                    <div className="card-realisation">
                       <img className="" src={clipboardRealisation} alt="" />
                       <div className="card-realisation-text">
                            <div className="card-realisation-tag">HTML / CSS</div>
                            <h4>Arch Studio multi-page website</h4>
                            <p>In this challenge, you'll be building a 4-page site that will look great in any portfolio. You'll even get the chance to play with mapping APIs if you choose the bonus.</p>
                        </div>
                        <a href="" className="card-realisation-more">En savoir plus</a>
                    </div>
                    <div className="card-realisation">
                       <img className="" src={roomRealisation} alt="" />
                       <div className="card-realisation-text">
                            <div className="card-realisation-tag">HTML / CSS / JS</div>
                            <h4>Arch Studio multi-page website</h4>
                            <p>In this challenge, you'll be building a 4-page site that will look great in any portfolio. You'll even get the chance to play with mapping APIs if you choose the bonus.</p>
                        </div>
                        <a href="" className="card-realisation-more">En savoir plus</a>
                    </div>
                    <div className="card-realisation">
                       <img className="" src={archRealisation} alt="" />
                       <div className="card-realisation-text">
                            <div className="card-realisation-tag">React</div>
                            <h4>Arch Studio multi-page website</h4>
                            <p>In this challenge, you'll be building a 4-page site that will look great in any portfolio. You'll even get the chance to play with mapping APIs if you choose the bonus.</p>
                        </div>
                        <a href="" className="card-realisation-more">En savoir plus</a>
                    </div>
                </Flickity>
            </div> 
        </section>

    );

}
    
export default Realisations;