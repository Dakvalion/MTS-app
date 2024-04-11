import { Navbar } from "./Navbar";
//import { useUser } from './UserProvider'; 
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from "react";


export function Personal() {
    //const { user } = useUser();
    const [copied, setCopied] = useState(false);

    

    const handleCopy = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 500);
    }

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
                    <p className="personal__main__info__text">ivanko@gmail.com</p>
                    <div className="personal__main__info__passport">
                        <span>Паспорт</span>
                        <span>4*** *****2</span>
                        <CopyToClipboard text="4*** *****2" onCopy={handleCopy}>
                            <button><img src="/copy.png" alt="copy" /></button>
                        </CopyToClipboard>
                    </div>
                </div>
                {copied && <div className="copy">Copy!</div>}
            </div>
        </div>
    )
}