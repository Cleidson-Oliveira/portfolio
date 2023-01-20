import Header from "../Header";
import Navigation from "../Navigation";
import { PageConfig } from "../PageConfig";
import Footer from "../Footer";

import style from "./style.module.scss";
import { Button } from "../Button";
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