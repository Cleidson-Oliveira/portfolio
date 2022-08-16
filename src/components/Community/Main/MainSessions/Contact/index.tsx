import { FormEvent, useRef, useState } from "react";

import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from 'react-toastify';

import style from "./style.module.scss";
import 'react-toastify/dist/ReactToastify.css';

export function Contact () {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const form = useRef<HTMLFormElement>(null);

    const sendMail = async (e: FormEvent) => {
        e.preventDefault();

        try {
            const canSend = name !== '' && email !== '' && subject !== '' && message !== '';

            if (!canSend) {
                throw new Error("Todos os campos devem ser preenchidos!");
            }

            const reference = form.current as HTMLFormElement;

            const res = await emailjs.sendForm(
                import.meta.env.VITE_MAILJS_SERVICE_ID,
                import.meta.env.VITE_MAILJS_TEMPLATE_ID,
                reference, 
                import.meta.env.VITE_MAILJS_PUBLIC_KEY,
            );
            
            if (res.status === 400) {
                throw new Error("Ocorreu um erro ao enviar a mensagem!");
            }

            setName('');
            setEmail('');
            setSubject('');
            setMessage('');

            toast.success("Mensagem enviada com sucesso!!!");

        } catch (error) {
            const message = (error as Error).message as string
            toast.error(message)
        }
    }

    return (
        <>
            <div className={style.contact}>
                <h2>Entre em contato, estou sempre a disposição</h2>

                <form 
                    ref={form}
                    onSubmit={sendMail}
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