import Header from "../Header";
import Navigation from "../../Population/Navigation";
import Footer from "../Footer";
import style from "./style.module.scss";

export default function Aside () {
    return (
        <div className={style.wrapper}>
            <Header />
            <Navigation />
            <Footer />
        </div>
    )
}