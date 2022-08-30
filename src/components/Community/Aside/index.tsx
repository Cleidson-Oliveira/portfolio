import Header from "../Header";
import Navigation from "../../Population/Navigation";
import { PageConfig } from "../../Population/PageConfig";
import Footer from "../Footer";

import style from "./style.module.scss";
import { Button } from "../../Organism/Button";
import { MdClose } from "react-icons/md";

interface AsideProps {
    controlerMenuMobile: () => void
}
export default function Aside ({ controlerMenuMobile }: AsideProps) {
    return (
        <div className={style.wrapper}>
            <div className={style.ButtonCloseAsideMobile}>
                <Button onClick={controlerMenuMobile}><MdClose /></Button>
            </div>
            <Header />
            <Navigation />
            <PageConfig />
            <Footer />
        </div>
    )
}