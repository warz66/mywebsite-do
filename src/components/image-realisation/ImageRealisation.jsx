import './ImageRealisation.css';
import React, { useState, useEffect } from 'react';
import { Transition } from 'react-transition-group';
import ReactDOM from 'react-dom';

const ImageRealisation = ({image}) => {
    const [openLightbox, setOpenLightbox ] = useState(false);

    console.log(image);

    function handleLightbox() {
        setOpenLightbox(!openLightbox);
    }

    const Lightbox = ({imageLarge, openLightbox}) => {
        return (
            <>
                <div className={`lightbox ${openLightbox ? 'is-active': ''}`} onClick={handleLightbox} data-display={openLightbox ? true : false} >
                    <div className="lightbox-wrapper">
                        <img src={imageLarge} alt="" />
                    </div>
                </div>
            </>
        );
    }

    function IfLightbox() {
        if(image.large) {
            return(
                <>
                    <img src={image.thumbnail} alt="" onClick={handleLightbox}/> 
                    {/*<Lightbox imageLarge={images.large} openLightbox={openLightbox} >*/}
                </>
            );
        } else {
            return <img src={image} alt="" />
        }
    }

    useEffect(() => {
        /*const lightboxDiv = React.createElement('div', { className: 'LightboxDiv' });
        console.log(lightboxDiv);*/
        if (image.large) {
            ReactDOM.render(
                <Lightbox imageLarge={image.large} openLightbox={openLightbox} />,
                document.getElementById('lightbox-container')
            );
        }
    },[openLightbox]);

    return (
        <IfLightbox />
    );
}

export default ImageRealisation;