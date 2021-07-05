import './RealisationFeatures.css'
import Flickity from 'react-flickity-component'
import 'flickity/dist/flickity.min.css'
import RealisationFeature from 'components/realisation-features/realisation-feature/RealisationFeature';
import { useEffect, useRef } from 'react';

const RealisationFeatures = ({features}) => {
    let flkty;

    const flickityOptions = {
        /*freeScroll: true,*/
        contain: true,
        initialIndex: 0,
        groupCells: true,
        prevNextButtons: false,
        pageDots: true,
        watchCSS: true
    }

    useEffect(() => {
        // returned function will be called on component unmount 
        return () => {
            /*flkty.destroy();
            console.log(flkty);*/
        }
      }, [])

    return(

        <div className="section bg-dark">
            <div id="wrapper-features">
                <Flickity
                    flickityRef={c => flkty = c}
                    className={'carousel'} // default ''
                    elementType={'div'} // default 'div'
                    options={flickityOptions} // takes flickity options {}
                    disableImagesLoaded={false} // default false
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