import { Link } from "react-router-dom";
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
                    <Link to="/">Личный кабинет</Link>
                </li>
                <li className="navbar__ul__li">
                    <Link to={path}>{text}</Link>
                </li>
                <li className="navbar__ul__li">
                    <Link to="/auth">Выйти</Link>
                </li>
            </ul>
            
        </nav>
    )
}