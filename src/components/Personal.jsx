import { Navbar } from "./Navbar";
import { useUser } from './UserProvider'; 

export function Personal() {
    const { user } = useUser();

    return (
        <div className="personal__container">
            <div className="personal__main_nav">
                <Navbar/>
            </div>
            <div className="personal__main">
                <div className="personal__main__img">
                    <img src="/Ellipse 1.png" alt="avatar" />
                </div>
                <div className="personal__main__info">
                    <h3>Иванов Иван Иванович</h3>
                    <p className="personal__main__info__text">Middle Mobile Dev</p>
                    <hr></hr>
                    <p className="personal__main__info__text">01.01.2001</p>
                    <p className="personal__main__info__text">+79175957578</p>
                    <p className="personal__main__info__text">ivanko.gmail.com</p>
                    <div className="personal__main__info__passport">
                        <span>Паспорт</span>
                        <span>4*** *****2</span>
                        <button><img src="/copy.png" alt="copy" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}