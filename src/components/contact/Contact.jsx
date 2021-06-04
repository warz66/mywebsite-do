import React, { useState, useEffect } from 'react';
import './Contact.css'

const Contact = () => {
    const [bgMode, setBgMode] = useState(true);

    useEffect(() => {
        
        function handleBg() {
            if(window.innerWidth > 1200) {
                setBgMode(true);
            } else {
                setBgMode(false); 
            }
        }
        handleBg();

        /*function handleFormBg() {
            if(window.innerWidth > 1100) {
                setBgMode(true);
            } else {
                setBgMode(false); 
            }
        }*/

        window.addEventListener('resize', handleBg);
        return () => {
            window.removeEventListener('resize', handleBg);
        }
    });

    return (

        <section id="contact" className="section">
            <div id="wrapper-contact" className={bgMode ? "" : "bg-vr"}>
                <div className={bgMode ? "bg-dark" : ""}>
                    <div id="form-msg-contact">
                        <p>
                            Let's make something new, different and more meanningful or make thing more visual or Conceptual ? <span>Just Say Hello !</span>
                        </p>
                    </div>
                </div>
                <div>
                    <div id="form-contact">

                    </div>
                </div>
                <div className={bgMode ? "bg-vr" : ""}>
                    <div id="info-contact">
                        <p>0655894578</p>
                        <p>myMail@mail.com</p>
                        <p>Cap Luberon</p>
                    </div>
                </div>
            </div>
            <footer className="bg-dark">
                <p>Copyright © 2021 Freelance_Theme, All rights Reserved.</p>
                <p>Created by DavidO_Design</p>
            </footer>
        </section>

    );

}
    
export default Contact;