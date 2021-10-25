import './RealisationSpecs.css'
import Flickity from 'react-flickity-component'
import 'flickity/dist/flickity.min.css'
import RealisationSpec from 'components/realisation-specs/realisation-spec/RealisationSpec';
import { useEffect, useState } from 'react';

const RealisationSpecs = ({specs}) => {
    const [flkty, setFlkty] = useState(null);

    const flickityOptions = {
        /*freeScroll: true,*/
        contain: true,
        initialIndex: 0,
        groupCells: true,
        prevNextButtons: false,
        pageDots: true,
        watchCSS: true
    }

    function flktyResize() { // corrige disableImagesLoaded false => Can't perform a React state update on an unmounted component.
        if (flkty) {
            flkty.resize();
        }
    }

    useEffect(() => {
        if(flkty) {
            function changePointerEvents(value) {
                document.querySelectorAll(".img-with-lightbox-in-specs").forEach(el => {
                    el.style.pointerEvents = value;
                });
            }
            flkty.on('dragStart', () => {changePointerEvents('none')})
            flkty.on('dragEnd', () => {changePointerEvents('all')})
        }
    }, [flkty])

    return(

        <div className="section bg-dark">
            <div id="wrapper-specs" onLoad={flktyResize}>
                <h3>Spécifications</h3>
                {/*<p>Ici, je vous fait part des caractéristiques essentielles du projets.</p>*/}
                <Flickity
                    flickityRef={c => setFlkty(c)}
                    className={'carousel'} // default ''
                    elementType={'div'} // default 'div'
                    options={flickityOptions} // takes flickity options {}
                    disableImagesLoaded={true} // default false
                    reloadOnUpdate // default false
                    static // default false
                >   
                    {specs.map( (spec, index) => {
                            return <RealisationSpec spec={spec} key={index}/> 
                    })}
                </Flickity>
            </div>
        </div>

    );
}

export default RealisationSpecs;