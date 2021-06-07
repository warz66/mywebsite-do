import React, { useState, useEffect } from 'react';
import './Contact.css'

const Contact = () => {
    const [bgMode, setBgMode] = useState(true);
    const [activeErrorName, setActiveErrorName] = useState(false);
    const [activeErrorEmail, setActiveErrorEmail] = useState(false);
    const [activeErrorMessage, setActiveErrorMessage] = useState(false);
    const [activeMsgSucess, setActiveMsgSucess] = useState(false);

    function handleSubmit(e) {
        console.log('lol');
        e.preventDefault();
        setActiveMsgSucess(false);
        let submit = true;
        if(e.target.name.value === '') {
            setActiveErrorName(true);
            submit = false;
        }
        if(e.target.email.value === '') {
            setActiveErrorEmail(true);
            submit = false;
        }
        if(e.target.message.value === '') {
            setActiveErrorMessage(true);
            submit = false;
        }
        if(submit) {
            /*e.target.submit();*/
            setActiveMsgSucess(true)
            e.target.name.value = '';
            e.target.email.value = '';
            e.target.message.value = '';
        } else {
            return false;
        } 
    }

    useEffect(() => {
        
        function handleBg() {
            if(window.innerWidth > 1200) {
                setBgMode(true);
            } else {
                setBgMode(false); 
            }
        }
        handleBg();

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
                    <form id="form-contact" onSubmit={handleSubmit} method="post" action="">
                        <div>
                            <input className={activeErrorName ? "active-input-error" : ""} type="text" aria-label="name" name="name" placeholder="Name" onClick={() => {setActiveErrorName(false);setActiveMsgSucess(false)}}/>
                            <span className={`msg-error ${activeErrorName ? "active-msg-error" : ""}`}>Can't be empty</span>
                        </div>
                        <div>
                            <input className={activeErrorEmail ? "active-input-error" : ""} type="email" aria-label="email" name="email" placeholder="Email" onClick={() => {setActiveErrorEmail(false);setActiveMsgSucess(false)}}/>
                            <span className={`msg-error ${activeErrorEmail ? "active-msg-error" : ""}`}>Can't be empty</span>
                        </div>
                        <div>
                            <textarea className={activeErrorMessage ? "active-input-error" : ""} aria-label="message" name="message" placeholder="Message" rows="3" onClick={() => {setActiveErrorMessage(false);setActiveMsgSucess(false)}}/>
                            <span className={`msg-error ${activeErrorMessage ? "active-msg-error" : ""}`}>Can't be empty</span>
                        </div>
                        <span id="msg-send-sucess" style={activeMsgSucess ? {opacity: 1} : {opacity: 0}}>Message sent !</span>
                        <button type="submit" aria-label="submit form" form="form-contact">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20"><path fill="none" fillRule="evenodd" stroke="#fff" strokeWidth="2" d="M15 1l9 9-9 9M0 10h24"></path></svg>
                        </button>    
                    </form>
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