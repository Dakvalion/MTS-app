
import { Modal } from "./Modal";
import { Navbar } from "./Navbar";
import { useState } from "react";
import { StatementForm } from "./StatementForm";
//import { createContext, useContext } from "react";
import { useApplications } from './UserProvider'; 
import classNames from 'classnames';



export function StatementTable() {
    const [modalActive, setModalActive] = useState(false);
    const { applications } = useApplications();

    return (
        <div className="personal__container">
            <Modal active={modalActive} setActive={setModalActive}>
                <StatementForm></StatementForm>  
            </Modal>
            <div className="personal__main_nav">
                <Navbar/>
            </div>
            <div className="table__container">
                <h3>Заявления</h3>
                <div className="table__container--inner">
                <table className="table__application">
                <thead className="table__application__head">
                    <tr>
                        <td className="table__application__head__first">№ заявления</td>
                        <td className="table__application__head__second">Дата подачи</td>
                        <td className="table__application__head__third">Статус</td>
                        <td className="table__application__head__fourth"></td>
                    </tr>
                </thead>
                <tbody className="table__application__body">
                    {applications.map((app) => (
                        <tr>
                        <td>{app.id}</td>
                        <td>{app.creationDate}</td>
                        <td><p className={classNames({
                                "table__application__body__status--review": app.status === 'WAITING',
                                "table__application__body__status--done": app.status === 'CONFIRMED',
                                "table__application__body__status--deny": app.status === 'CANCELED'})}>{app.status === 'WAITING' ? 'Активно' : app.status === 'CONFIRMED' ? 'Обработано' : 'Отменено'}</p></td>
                        <td><button className="table__application__body__button" onClick={() => {setModalActive(true)}}>Просмотр</button></td>
                        </tr>
                    ))}
                </tbody>
                </table>
                </div>
            </div>
        </div>
        
    )
}