import { AiFillHome, AiFillPhone } from "react-icons/ai";
import { FaUser, FaGraduationCap } from "react-icons/fa";
import { MdWork } from "react-icons/md";

import style from "./style.module.scss";

export default function Navigation () {
    return (
        <ul className={style.menu}>
            <li className={style.menuItem}>
                <button>
                    <AiFillHome />
                </button>
                <p>Home</p>
            </li>
            <li className={style.menuItem}>
                <button>
                    <MdWork />
                </button>
                <p>Projects</p>
            </li>
            <li className={style.menuItem}>
                <button>
                    <FaGraduationCap />
                </button>
                <p>Courses</p>
            </li>
            <li className={style.menuItem}>
                <button>
                    <AiFillPhone />
                </button>
                <p>Contact</p>
            </li>
            <li className={style.menuItem}>
                <button>
                    <FaUser />
                </button>
                <p>About me</p>
            </li>
        </ul>
    )
}
