import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useUser } from './UserProvider'; 

export function Auth() {
    const [errorMessage, setErrorMessage] = useState('');
    const { setUser } = useUser();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const plainFormData = Object.fromEntries(formData.entries());
        const formDataJsonString = JSON.stringify(plainFormData);

        fetch('http://localhost:8080/auth/authenticate', {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: formDataJsonString
        })
        .then(response => {
            if (!response.ok) {
                setErrorMessage('Неправильный логин или пароль');
            }
            return response.json();
        })
        .then( data => {
            setUser(data);
            console.log(data);
            navigate('/personal');
            setErrorMessage('')})
        .catch(error  => {
            console.log(error);
            setErrorMessage('Произошла ошибка при пердаче данных')})
    }

    return (
        <div className='auth__container'>
            <h3>Войти в систему</h3>
            <form className="auth__form" method='POST' onSubmit={ handleSubmit }>
                <input className="auth__form__input" type="email" name="username" placeholder="Ваш e-mail" required></input>
                <input className="auth__form__input" type="password" name="password"  placeholder="Пароль" required></input>
                <button className="auth__form__button button" type="submit" name="btn">Войти</button>
            </form>
            <div className="auth__message">{errorMessage}</div>
        </div>
    )
}