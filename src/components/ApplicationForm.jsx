import { useApplications } from './UserProvider'; 



export function ApplicationForm({ setActive }) {
    const { setApplications } = useApplications();


    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const plainFormData = Object.fromEntries(formData.entries());
        const formDataJsonString = JSON.stringify(plainFormData);

        fetch('http://localhost:8080/api/trips', {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: formDataJsonString
        })
        .then(response => {
            if (!response.ok) {
                console.log('not ok')
            }
            return response.json();
        })
        .then( data => {
            console.log(data);
            setApplications(prevApplications => [...prevApplications, data]);
            event.target.reset();
            setActive(false);})
        .catch(error  => {
            console.log(error);})
    }
    



    return (
        <div className="application__container">
            <h3>Создание заявки</h3>
            <form className="application__form" onSubmit={handleSubmit}>
                <table className="application__form__table">
                    <tr>
                        <td><input type='text' name='fullName' placeholder="ФИО"></input></td>
                        <td><input type='text' name='passport' placeholder="Паспортные данные"></input></td>
                    </tr>
                    <tr>
                        <td><input type='text' name='destination' placeholder="Куда командировка"></input></td>
                        <td><div className="application__form__select">
                                <select type='text' name='bossId' placeholder="Кто утверждает">
                                    <option value="" disabled>Кто утверждает</option>
                                    <option value="1">Супер крутой Босс</option>
                                </select>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><input type='date' name='startDate' placeholder="Дата начала"></input></td>
                        <td rowSpan={2}><textarea name='goal' className="application__form__goals" placeholder="Цель поездки"></textarea></td>
                    </tr>
                    <tr>
                    <td><input type='date' name='endDate' placeholder="Дата окончания"></input></td>
                    </tr>
                </table>
                <button className="application__form__button" type="submit" >Отправить</button>
            </form>

        </div>
    )
}