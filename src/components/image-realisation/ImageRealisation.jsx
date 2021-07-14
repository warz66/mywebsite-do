import './ImageRealisation.css';
import React, { useState, useEffect } from 'react';
import { Transition } from 'react-transition-group';
import ReactDOM from 'react-dom';

const ImageRealisation = ({image}) => {
    const [openLightbox, setOpenLightbox ] = useState(false);

    function handleLightbox() {
        setOpenLightbox(!openLightbox);
    }

    function Lightbox ({imageLarge, openLightbox}) {
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
        return image.large ? <img src={image.thumbnail} alt="" onClick={handleLightbox}/> : <img src={image} alt="" />;
    }

    useEffect(() => {
        if (image.large) {
            ReactDOM.render(
                <Lightbox imageLarge={image.large} openLightbox={openLightbox} />,
                document.getElementById('lightbox-container')
            );
        }
    },[openLightbox, image.large]);

    return (
        <IfLightbox />
    );
}

export default ImageRealisation;