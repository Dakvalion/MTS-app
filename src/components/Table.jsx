import { ApplicationForm } from "./ApplicationForm";
import { ChangeAppForm } from "./ChangeAppForm";
import { Modal } from "./Modal";
import { Navbar } from "./Navbar";
import { useState } from "react";
import { ViewApplication } from "./ViewApplication";
import classNames from 'classnames';
import { useApplications } from './UserProvider'; 
import { useUser } from './UserProvider';
//import { createContext, useContext } from "react";



export function Table() {
    const [modalActive, setModalActive] = useState(false);
    const [changeModalActive, setChangeModalActive] = useState(false);
    const [viewActive, setViewActive] = useState(false);
    const { applications } = useApplications();
    const { user } = useUser();
    

    return (
        <div className="personal__container">
            <Modal active={modalActive} setActive={setModalActive}>
                <ApplicationForm setActive={setModalActive}></ApplicationForm>
            </Modal>
            <Modal active={changeModalActive} setActive={setChangeModalActive}>
                <ChangeAppForm></ChangeAppForm>
            </Modal>
            <Modal active={viewActive} setActive={setViewActive}>
                <ViewApplication></ViewApplication>
            </Modal>
            <div className="personal__main_nav">
                <Navbar/>
            </div>
            <div className="table__container">
                <h3>Мои заявки</h3>
                <div className="table__container--inner">
                <button className="table__button button" onClick={() => {setModalActive(true)}}>Добавить заявку</button>
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
                {Array.isArray(applications) && applications.map((app) => (
                        <tr>
                        <td>{app.id}</td>
                        <td>{app.creationDate}</td>
                        <td><p className={classNames({
                                "table__application__body__status--review": app.status === 'WAITING',
                                "table__application__body__status--done": app.status === 'CONFIRMED',
                                "table__application__body__status--deny": app.status === 'CANCELED'})}>{app.status === 'WAITING' ? 'Отправлено на рассмотрение' : app.status === 'CONFIRMED' ? 'Обработано' : 'Отменено'}</p></td>
                        <td>{app.status === 'WAITING' ? <button className="table__application__body__button" onClick={() => {setChangeModalActive(true)}}>Изменить</button> : <button className="table__application__body__button" onClick={() => {setViewActive(true)}}>Просмотр</button>}</td>
                        </tr>
                    ))}
                </tbody>
                </table>
                </div>
            </div>
        </div>
        
    )
}