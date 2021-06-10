import React, { useState, useRef } from 'react';
import './Form.css'

const Form = () => {
    const [activeErrorName, setActiveErrorName] = useState(false);
    const [activeErrorEmail, setActiveErrorEmail] = useState(false);
    const [activeErrorMessage, setActiveErrorMessage] = useState(false);
    const [activeMsgReturn, setActiveMsgReturn] = useState(false);
    const [activeMsgResult, setActiveMsgResult] = useState(false);
    const form = useRef(null)

    function sendMessageForm() {
        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), 5000)
        const data = new FormData(form.current)
        return fetch('http://localhost:80/index.php', { method: 'POST', body: data, signal: controller.signal })
            .then(res => {  return res.json() })
            .then(result => { return result })
            .catch(error => { return error });
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        setActiveMsgReturn(false);
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
            let msgFormReturn = document.getElementById('msg-send-result')

            setActiveMsgReturn(true);

            msgFormReturn.classList.add('clignote');
            
            setActiveMsgResult("En Attente...");

            const res = await sendMessageForm();

            msgFormReturn.classList.remove('clignote');

            if(res.result === "success") {
                setActiveMsgResult("Message Envoyé")
                msgFormReturn.style.color = 'var(--secondary)'
                e.target.name.value = '';
                e.target.email.value = '';
                e.target.message.value = '';
            } else {
                setActiveMsgResult("Problème d'envoi")
                msgFormReturn.style.color = 'var(--form-red-error)'
                console.log(res);
            }
        } else {
            return false;
        } 
    }

    return (

        <form ref={form} id="form-contact" onSubmit={handleSubmit}>
            <div>
                <input className={activeErrorName ? "active-input-error" : ""} type="text" aria-label="name" name="name" placeholder="Nom" onClick={() => {setActiveErrorName(false);setActiveMsgReturn(false)}}/>
                <span className={`msg-error ${activeErrorName ? "active-msg-error" : ""}`}>Ne peut-être vide</span>
            </div>
            <div>
                <input className={activeErrorEmail ? "active-input-error" : ""} type="email" aria-label="email" name="email" placeholder="Email" onClick={() => {setActiveErrorEmail(false);setActiveMsgReturn(false)}}/>
                <span className={`msg-error ${activeErrorEmail ? "active-msg-error" : ""}`}>Ne peut-être vide</span>
            </div>
            <div>
                <textarea className={activeErrorMessage ? "active-input-error" : ""} aria-label="message" name="message" placeholder="Message" rows="3" onClick={() => {setActiveErrorMessage(false);setActiveMsgReturn(false)}}/>
                <span className={`msg-error ${activeErrorMessage ? "active-msg-error" : ""}`}>Ne peut-être vide</span>
            </div>
            <span id="msg-send-result" style={activeMsgReturn ? {opacity: 1} : {opacity: 0}}>{activeMsgResult}</span>
            <button type="submit" aria-label="submit form" form="form-contact">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20"><path fill="none" fillRule="evenodd" strokeWidth="2" d="M15 1l9 9-9 9M0 10h24"></path></svg>
            </button>    
        </form>

    );

}
    
export default Form;