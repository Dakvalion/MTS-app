
export function ChangeAppForm () {
    return (
        <div className="application__container">
            <h3>Изменить заявку</h3>
            <form className="application__form">
                <table className="application__form__table">
                    <tr>
                        <td><input type='text' name='userName' placeholder="ФИО"></input></td>
                        <td><input type='text' name='passport' placeholder="Паспортные данные"></input></td>
                    </tr>
                    <tr>
                        <td><input type='text' name='where' placeholder="Куда командировка"></input></td>
                        <td><div className="application__form__select">
                                <select type='text' name='boss' placeholder="Кто утверждает">
                                    <option value="" disabled selected>Кто утверждает</option>
                                </select>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><input type='date' name='whenGo' placeholder="Дата начала"></input></td>
                        <td rowspan="2"><textarea name='goals'  className="application__form__goals" placeholder="Цель поездки"></textarea></td>
                    </tr>
                    <tr>
                    <td><input type='date' name='whenArrive' placeholder="Дата окончания"></input></td>
                    </tr>
                </table>
                <button className="application__form__button" type="submit">Изменить</button>
            </form>

        </div>
    )
}