import { Button } from "../../Organism/Button";

import { AiFillHome, AiFillPhone } from "react-icons/ai";
import { FaUser, FaGraduationCap } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { GrCertificate } from "react-icons/gr";


import style from "./style.module.scss";

export default function Navigation () {

    const handleFocus = (n: number) => {
        window.scrollTo(0, window.innerHeight * n)
    }
    return (
        <nav className={style.menu}>
            <Button onClick={() => {handleFocus(0)}}>
                <AiFillHome />
            </Button>

            <Button onClick={() => {handleFocus(1)}}>
                <MdWork />
            </Button>
            
            <Button onClick={() => {handleFocus(2)}}>
                <GrCertificate />
            </Button>
            
            <Button onClick={() => {handleFocus(3)}}>
                <AiFillPhone />
            </Button>
            
            <Button onClick={() => {handleFocus(4)}}>
                <FaUser />
            </Button>
        </nav>
    )
}
