import './RealisationFeatures.css'
import Flickity from 'react-flickity-component'
import 'flickity/dist/flickity.min.css'
import RealisationFeature from 'components/realisation-features/realisation-feature/RealisationFeature';

const RealisationFeatures = ({features}) => {

    const flickityOptions = {
        /*freeScroll: true,*/
        contain: true,
        initialIndex: 0,
        groupCells: true,
        prevNextButtons: false,
        pageDots: true,
        watchCSS: true
    }

    return(

        <div className="section bg-dark">
            <div id="wrapper-features">
                <h3>Fonctionalités</h3>
                <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still.</p>
                <Flickity
                    className={'carousel'} // default ''
                    elementType={'div'} // default 'div'
                    options={flickityOptions} // takes flickity options {}
                    disableImagesLoaded={true} // default false
                    reloadOnUpdate // default false
                    static // default false
                >   
                    {features.map( (feature, index) => {
                            return <RealisationFeature feature={feature} key={index}/> 
                    })}
                </Flickity>
            </div>
        </div>

    );
}

export default RealisationFeatures;