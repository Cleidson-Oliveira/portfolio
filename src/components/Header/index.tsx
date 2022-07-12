import style from "./style.module.scss";

export default function Header () {
    return (
        <header className={style.header}>
            <div>
                <p>logo</p>
            </div>
            <nav>
                <ul className={style.menu}>
                    <li className={style.menuItem}>Home</li>
                    <li className={style.menuItem}>Projects</li>
                    <li className={style.menuItem}>Contact</li>
                    <li className={style.menuItem}>About me</li>
                </ul>
            </nav>
        </header>
    )
}