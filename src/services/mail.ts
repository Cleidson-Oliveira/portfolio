import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

export const sendMail = async (
    canSend: boolean, 
    form: React.RefObject<HTMLFormElement>,
    callback: () => void
) => {

    try {
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

        callback();

        toast.success("Mensagem enviada com sucesso!!!");

    } catch (error) {
        const message = (error as Error).message as string
        toast.error(message)
    }
}