import { FormEvent, useContext, useRef, useState } from "react";
import { sendMail } from "../../../../services/mail";
import { LanguageContext } from "../../../../contexts/Language/LanguagesContext";

import { ToastContainer } from 'react-toastify';

import style from "./style.module.scss";
import 'react-toastify/dist/ReactToastify.css';

export function Contact () {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const form = useRef<HTMLFormElement>(null);

    const { lang } = useContext(LanguageContext);

    const clearForm = () => {
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    }

    const handleSendMail = async (e: FormEvent) => {
        e.preventDefault();

        const canSend = name !== '' && email !== '' && subject !== '' && message !== '';

        sendMail(canSend, form, clearForm);
    }

    return (
        <>
            <div className={style.contact}>
                <h2>{ lang === "en-US" ? "Send me a message, I will love to read it" : "Entre em contato, estou sempre a disposição" }</h2>

                <form 
                    ref={form}
                    onSubmit={handleSendMail}
                >
                    <label> {lang === "en-US" ? "Name" : "Nome"}
                        <input 
                            type="text" 
                            name="name"
                            placeholder={lang === "en-US" ? "Type your name here!" : "Qual é o seu nome?"}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                    <label> E-mail
                        <input 
                            type="email" 
                            name="email" 
                            placeholder={lang === "en-US" ? "What is your e-mail?" : "Qual é o seu e-mail?"}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    <label> {lang === "en-US" ? "Subject" : "Assunto"}
                        <input 
                            type="text" 
                            name="subject" 
                            placeholder={lang === "en-US" ? "What is the subject of your message?" : "Sobre o que quer falar?"}
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                    </label>
                    <label> {lang === "en-US" ? "Message" : "Mensagem"}
                        <textarea
                            name="message" 
                            placeholder={lang === "en-US" ? "Type here your message for me!" : "Digite aqui sua mensagem!"}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </label>
                    <input type="submit" value={lang === "en-US" ? "Send" : "Enviar"} />
                        
                </form>
            </div>
            <ToastContainer />
        </>
    )
}