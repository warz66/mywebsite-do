import React, { useState } from 'react';
import './Form.css'

const Form = () => {
    const [activeErrorName, setActiveErrorName] = useState(false);
    const [activeErrorEmail, setActiveErrorEmail] = useState(false);
    const [activeErrorMessage, setActiveErrorMessage] = useState(false);
    const [activeMsgSucess, setActiveMsgSucess] = useState(false);

    function handleSubmit(e) {
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

            var xhr = new XMLHttpRequest;

            xhr.addEventListener('load', () => {
                console.log(xhr.responseText);
            });

            xhr.open('GET', 'https://mywebsite-do.vercel.app/index.php?sendto=' + e.target.email.value + 
                            '&name='+ e.target.name.value +
                            '&message='+ e.target.message.value);
            
            xhr.send();

            setActiveMsgSucess(true)
            e.target.name.value = '';
            e.target.email.value = '';
            e.target.message.value = '';
        } else {
            return false;
        } 
    }

    return (

        <form id="form-contact" onSubmit={handleSubmit}>
            <div>
                <input className={activeErrorName ? "active-input-error" : ""} type="text" aria-label="name" name="name" placeholder="Nom" onClick={() => {setActiveErrorName(false);setActiveMsgSucess(false)}}/>
                <span className={`msg-error ${activeErrorName ? "active-msg-error" : ""}`}>Ne peut-être vide</span>
            </div>
            <div>
                <input className={activeErrorEmail ? "active-input-error" : ""} type="email" aria-label="email" name="email" placeholder="Email" onClick={() => {setActiveErrorEmail(false);setActiveMsgSucess(false)}}/>
                <span className={`msg-error ${activeErrorEmail ? "active-msg-error" : ""}`}>Ne peut-être vide</span>
            </div>
            <div>
                <textarea className={activeErrorMessage ? "active-input-error" : ""} aria-label="message" name="message" placeholder="Message" rows="3" onClick={() => {setActiveErrorMessage(false);setActiveMsgSucess(false)}}/>
                <span className={`msg-error ${activeErrorMessage ? "active-msg-error" : ""}`}>Ne peut-être vide</span>
            </div>
            <span id="msg-send-sucess" style={activeMsgSucess ? {opacity: 1} : {opacity: 0}}>Message envoyé</span>
            <button type="submit" aria-label="submit form" form="form-contact">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20"><path fill="none" fillRule="evenodd" strokeWidth="2" d="M15 1l9 9-9 9M0 10h24"></path></svg>
            </button>    
        </form>

    );

}
    
export default Form;