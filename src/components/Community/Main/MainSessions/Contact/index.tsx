import style from "./style.module.scss";

export function Contact () {

    return (
        <>
            <div className={style.contact}>
                <h2>Entre em contato, estou sempre a disposição</h2>

                <form>
                    <label>
                        Name
                        <input type="text" name="name" placeholder="Type your name"/>
                    </label>
                    <label>
                        E-mail
                        <input type="email" name="email" placeholder="What is your email?"/>
                    </label>
                    <label>
                        Message
                        <textarea name="message" placeholder="Type your message for me here!"/>
                    </label>
                    <input type="submit" value="Send" />
                        
                </form>
            </div>
        </>
    )
}