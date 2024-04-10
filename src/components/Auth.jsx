import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useUser } from './UserProvider'; 

export function Auth() {

    const [userAuth, setUserAuth] = useState({ email:'', password: ''});
    const [errorMessage, setErrorMessage] = useState('');
    const { setUser } = useUser();
    const navigate = useNavigate();

    const handleEmailChange = (event) => {
        setUserAuth({...userAuth, email: event.target.value});
    }
    const handlePasswordChange = (event) => {
        setUserAuth({...userAuth, password: event.target.value});
    }


    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            //const user = authentificate(userAuth.email, userAuth.password);
            //setUser(user);
            navigate('/personal');
        } catch (error) {
            setErrorMessage('Неправильный логин или пароль');
        }
    }

    return (
        <div className='auth__container'>
            <h3>Войти в систему</h3>
            <form className="auth__form" onSubmit={ handleSubmit }>
                <input className="auth__form__input" type="email" name="email" value={userAuth.email}  onChange={ handleEmailChange } placeholder="Ваш e-mail"></input>
                <input className="auth__form__input" type="password" name="pass" value={userAuth.password} onChange={ handlePasswordChange } placeholder="Пароль"></input>
                <button className="auth__form__button button" type="submit" name="btn">Войти</button>
            </form>
            <div className="auth__message">{errorMessage}</div>
        </div>
    )
}