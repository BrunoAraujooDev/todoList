import style from './Header.module.css';
import {CalendarCheck} from "phosphor-react";

const Header = () => {

    return (
        <header className={style.header}>
            <div className={style.title}>
                <CalendarCheck size={40} />
                <h1 >Todo List</h1>
            </div>
        </header>
    )

}

export default Header;