import Header from "../Header";
import Footer from "../Footer";

import style from "./style.module.scss";

export default function Aside () {
    return (
        <div className={style.wrapper}>
            <Header />
            <Footer />
        </div>
    )
}