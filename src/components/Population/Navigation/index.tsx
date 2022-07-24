import { Button } from "../../Organism/Button";

import { AiFillHome, AiFillPhone } from "react-icons/ai";
import { FaUser, FaGraduationCap } from "react-icons/fa";
import { MdWork } from "react-icons/md";

import style from "./style.module.scss";

export default function Navigation () {
    return (
        <nav className={style.menu}>
            <Button>
                <AiFillHome />
            </Button>

            <Button>
                <MdWork />
            </Button>
            
            <Button>
                <FaGraduationCap />
            </Button>
            
            <Button>
                <AiFillPhone />
            </Button>
            
            <Button>
                <FaUser />
            </Button>
        </nav>
    )
}
