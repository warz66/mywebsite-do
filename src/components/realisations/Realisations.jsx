import Flickity from 'react-flickity-component'
import portfolioRealisations from './portfolioRealisations';
import Realisation from 'components/realisations/realisation/realisation';
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
                    {portfolioRealisations.map( (realisation, index) => {
                            return <Realisation realisation={realisation} key={index}/> 
                    })}
                </Flickity>
            </div> 
        </section>

    );

}
    
export default Realisations;