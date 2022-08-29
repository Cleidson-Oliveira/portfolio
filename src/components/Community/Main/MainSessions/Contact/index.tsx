import { FormEvent, useRef, useState } from "react";

import { ToastContainer, toast } from 'react-toastify';

import style from "./style.module.scss";
import 'react-toastify/dist/ReactToastify.css';
import { sendMail } from "../../../../../services/mail";

export function Contact () {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const form = useRef<HTMLFormElement>(null);

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
                <h2>Entre em contato, estou sempre a disposição</h2>

                <form 
                    ref={form}
                    onSubmit={handleSendMail}
                >
                    <label> Name
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Type your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                    <label> E-mail
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="What is your email?"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    <label> Subject
                        <input 
                            type="text" 
                            name="subject" 
                            placeholder="What is the subject of your message?"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                    </label>
                    <label> Message
                        <textarea
                            name="message" 
                            placeholder="Type here your message for me!"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </label>
                    <input type="submit" value="Send" />
                        
                </form>
            </div>
            <ToastContainer />
        </>
    )
}