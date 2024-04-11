import { ApplicationForm } from "./ApplicationForm";
import { ChangeAppForm } from "./ChangeAppForm";
import { Modal } from "./Modal";
import { Navbar } from "./Navbar";
import { useState } from "react";
import { ViewApplication } from "./ViewApplication";
//import { createContext, useContext } from "react";
//import { useApplications } from './UserProvider'; 



export function Table() {
    const [modalActive, setModalActive] = useState(false);
    const [changeModalActive, setChangeModalActive] = useState(false);
    const [viewActive, setViewActive] = useState(false);
    //const { applications } = useApplications();
    
    //это для отображения текста статуса
    //{app.status === 'review' ? 'Отправлено на рассмотрение' : app.status === 'done' ? 'Обработано' : 'Отменено'}
    //{app.status === 'review' ? 'Изменить' : 'Просмотр'

    return (
        <div className="personal__container">
            <Modal active={modalActive} setActive={setModalActive}>
                <ApplicationForm></ApplicationForm>
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
                    <tr>
                        <td>128576</td>
                        <td>23.07.2023</td>
                        <td><p className="table__application__body__status--review"/*{classnames({
                                "table__application__body__status--review": appl.status === 'review',
                                "table__application__body__status--done": appl.status === 'done',
                                "table__application__body__status--deny": appl.status === 'deny',
                                "table__application__body__status--active": appl.status === 'active',
                        })}*/ >Отправлено на рассмотрение</p></td>
                        <td><button className="table__application__body__button" onClick={() => {setChangeModalActive(true)}}>Изменить</button></td>
                    </tr>
                    <tr>
                        <td>128576</td>
                        <td>23.07.2023</td>
                        <td><p className="table__application__body__status--deny"/*{classnames({
                                "table__application__body__status--review": appl.status === 'review',
                                "table__application__body__status--done": appl.status === 'done',
                                "table__application__body__status--deny": appl.status === 'deny',
                                "table__application__body__status--active": appl.status === 'active',
                        })}*/ >Отменено</p></td>
                        <td><button className="table__application__body__button" onClick={() => {setViewActive(true)}}>Просмотр</button></td>
                    </tr>
                </tbody>
                </table>
                </div>
            </div>
        </div>
        
    )
}