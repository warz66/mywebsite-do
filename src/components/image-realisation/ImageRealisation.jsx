import './ImageRealisation.css';
import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';

function Lightbox ({imageLarge, openLightbox, handleLightbox}) {
    return (
        <>
            <div className={`lightbox ${openLightbox ? 'is-active': ''}`} onClick={handleLightbox} data-display={openLightbox ? true : false} >
                <div className="lightbox-wrapper">
                    {openLightbox && <img src={imageLarge} alt="image large du projet" />}
                </div>
            </div>
        </>
    );
}

const ImageRealisation = ({image, comeFromSpecs = false}) => {
    const [openLightbox, setOpenLightbox] = useState(false);

    const handleLightbox = useCallback(() => {
        setOpenLightbox(!openLightbox);
    },[openLightbox]);

    useEffect(() => {
        if (image.large) {
            ReactDOM.render(
                <Lightbox imageLarge={image.large} openLightbox={openLightbox} handleLightbox={handleLightbox} />,
                document.getElementById('lightbox-container')
            );
        }
    },[openLightbox, image.large, handleLightbox]);

    return (
        <>
            {image.large ? <img className={comeFromSpecs ? "img-with-lightbox-in-specs" : ""} style={{cursor: "pointer" }} src={image.thumbnail} alt="image mini du projet" onClick={handleLightbox}/> : <img src={image} alt="image du projet" />}
        </>
        
    );
}

export default React.memo(ImageRealisation);