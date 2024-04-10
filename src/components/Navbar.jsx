import { Link } from "react-router-dom";



export function Navbar() {



    return (
        <nav className="navbar">
            <ul className="navbar__ul">
                <li className="navbar__ul__li">
                    <Link to="/">Личный кабинет</Link>
                </li>
                <li className="navbar__ul__li">
                    <Link to="/table">Заявления</Link>
                </li>
                <li className="navbar__ul__li">
                    <Link to="auth">Выйти</Link>
                </li>
            </ul>
            
        </nav>
    )
}