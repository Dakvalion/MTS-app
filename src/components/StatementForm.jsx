
export function StatementForm () {

    return (
        <div className="statement__container">
            <h3>Заявление № 129876</h3>
            <form className="statement__form">
                <table className="statement__form__table">
                    <tr>
                        <td><input type='text' name='userName' placeholder="ФИО" disabled></input></td>
                        <td><input type='text' name='passport' placeholder="Паспортные данные" disabled></input></td>
                    </tr>
                    <tr>
                        <td><input type='text' name='where' placeholder="Грейд" disabled></input></td>
                        <td><input type='text' name='where' placeholder="Куда командировка" disabled></input></td>
                    </tr>
                    <tr>
                        <td><input type='date' name='whenGo' placeholder="Дата начала" disabled></input></td>
                        <td rowspan="2"><textarea name='goals'  className="statement__form__goals" placeholder="Цель поездки" disabled></textarea></td>
                    </tr>
                    <tr>
                    <td><input type='date' name='whenArrive' placeholder="Дата окончания" disabled></input></td>
                    </tr>
                </table>
                <hr></hr>
                <textarea className='statement__form__comment' placeholder="Добавить комментарий"></textarea><br></br>
                <button className="statement__form__yes" type="submit">Принять</button>
                <button className="statement__form__no" type="submit">Отклонить</button>
            </form>

        </div>
    )
}