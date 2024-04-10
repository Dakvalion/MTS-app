import { Navbar } from "./Navbar";

export function Table() {
    return (
        <div className="personal__container">
            <div className="personal__main_nav">
                <Navbar/>
            </div>
            <div className="table__container">
                <h3>Мои заявки</h3>
                <button className="table__button button">Добавить заявку</button>
                <table className="table__application">
                <thead className="table__application__head">
                    <tr>
                        <td className="table__application__head__first">№ заявления</td>
                        <td className="table__application__head__second">Дата подачи</td>
                        <td className="table__application__head__third">Статус</td>
                        <td className="table__application__head__fourth"></td>
                    </tr>
                </thead>
                <tbody className="table_application_body">

                </tbody>
                </table>
            </div>
        </div>
    )
}