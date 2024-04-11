
import { Modal } from "./Modal";
import { Navbar } from "./Navbar";
import { useState } from "react";
//import { createContext, useContext } from "react";
//import { useApplications } from './UserProvider'; 



export function StatementTable() {
    const [modalActive, setModalActive] = useState(false);
    //const { applications } = useApplications();

    return (
        <div className="personal__container">
            <Modal active={modalActive} setActive={setModalActive}>  
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
                    <tr>
                        <td>128576</td>
                        <td>23.07.2023</td>
                        <td><p className="table__application__body__status--active">Активно</p></td>
                        <td><button className="table__application__body__button">Просмотр</button></td>
                    </tr>
                </tbody>
                </table>
                </div>
            </div>
        </div>
        
    )
}