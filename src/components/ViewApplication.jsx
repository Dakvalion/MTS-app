export function ViewApplication() {
    return (
        <div className="application__container">
            <h3>Просмотр заявки</h3>
            <div className="application__form">
                <table className="application__form__table">
                    <tr>
                        <td><input type='text' name='userName' placeholder="ФИО" disabled></input></td>
                        <td><input type='text' name='passport' placeholder="Паспортные данные" disabled></input></td>
                    </tr>
                    <tr>
                        <td><input type='text' name='where' placeholder="Куда командировка" disabled></input></td>
                        <td><div className="application__form__select">
                                <input type="text" name='boss' disabled/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><input type='date' name='whenGo' placeholder="Дата начала" disabled></input></td>
                        <td rowspan="2"><textarea name='goals' placeholder="Цель поездки" disabled></textarea></td>
                    </tr>
                    <tr>
                    <td><input type='date' name='whenArrive' placeholder="Дата окончания" disabled></input></td>
                    </tr>
                </table>
                <hr></hr>
                <div className="comment">
                    <p className="comment__title">Комментарий:</p>
                    <p className="comment__text">тут будет комментарий</p>
                </div>
            </div>

        </div>
    )
}