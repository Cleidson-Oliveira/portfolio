import { Button } from "../../Organism/Button";

import { AiFillHome, AiFillPhone, AiFillSafetyCertificate } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { MdWork } from "react-icons/md";

import style from "./style.module.scss";
import { BsFillGearFill } from "react-icons/bs";

interface ResponsiveNavigationProps {
    controlerMenuMobile: () => void
}

export default function ResponsiveNavigation ({ controlerMenuMobile }: ResponsiveNavigationProps) {

    const handleFocus = (n: number) => {
        window.scrollTo(0, window.innerHeight * n)
    }

    return (
        <nav className={style.menu}>
            <Button onClick={() => {handleFocus(0)}}>
                <AiFillHome />
            </Button>

            <Button onClick={() => {handleFocus(1)}}>
                <FaUser />
            </Button>

            <Button onClick={() => {handleFocus(2)}}>
                <MdWork />
            </Button>
            
            <Button onClick={() => {handleFocus(3)}}>
                <AiFillSafetyCertificate />
            </Button>
            
            <Button onClick={() => {handleFocus(4)}}>
                <AiFillPhone />
            </Button>

            <Button onClick={() => {controlerMenuMobile()}}>
                <BsFillGearFill />
            </Button>
        </nav>
    )
}
