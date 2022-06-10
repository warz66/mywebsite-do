import React from 'react';
import Flickity from 'react-flickity-component'
import RealisationCard from 'components/realisations/realisation-card/RealisationCard';
import portfolioRealisations from 'assets/realisations/realisationsMap';
import 'flickity/dist/flickity.min.css'
import './Realisations.css'

const Realisations = ({sectionActive}) => {

    const flickityOptions = {
        /*freeScroll: true,*/
        contain: true,
        initialIndex: 0,
        groupCells: true,
        prevNextButtons: false,
        pageDots: true,
        watchCSS: true,
        /*percentPosition: false*/
    }

    return (

        <section id="realisations" className={`section bg-dark ${sectionActive ? " active" : ""}`}>
            <div id="wrapper-realisations">
                <h2>Mes réalisations</h2>
                <p>Parcourez quelques-unes de mes réalisations et découvrez mon approche et mon analyse en développement web et intégration au travers de fiches projet et de leurs spécifications.</p>
                <Flickity
                    className={'carousel'} // default ''
                    elementType={'div'} // default 'div'
                    options={flickityOptions} // takes flickity options {}
                    disableImagesLoaded={false} // default false
                    reloadOnUpdate // default false
                    static // default false
                >   
                    {portfolioRealisations.map( (realisation, index) => {
                            return <RealisationCard realisation={realisation} key={index}/> 
                    })}
                </Flickity>
            </div> 
        </section>

    );

}
    
export default React.memo(Realisations);