import { Link, NavLink } from "react-router-dom";
import { useUser } from './UserProvider';


export function Navbar() {

    const { user } = useUser();

    const getLinkForRole = () => {
        if (user && user.role === 'admin') {
            return { text: 'Мои заявки', path: '/table' };
        } else {
            return { text: 'Заявления', path: '/statements' };
        }
    };

    const { text, path } = getLinkForRole();

    return (
        <nav className="navbar">
            <ul className="navbar__ul">
                <li className="navbar__ul__li">
                    <NavLink to="/" className={({ isActive }) => isActive ? "active-class" : "non-active-class"}>Личный кабинет</NavLink>
                </li>
                <li className="navbar__ul__li">
                    <NavLink to={path} className={({ isActive }) => isActive ? "active-class" : "non-active-class"}>{text}</NavLink>
                </li>
                <li className="navbar__ul__li">
                    <Link to="/auth">Выйти</Link>
                </li>
            </ul>
            
        </nav>
    )
}