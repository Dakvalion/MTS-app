import { Navbar } from "./Navbar";
import { useUser } from './UserProvider'; 
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from "react";


export function Personal() {
    const { user } = useUser();
    const [copied, setCopied] = useState(false);
    



    const handleCopy = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 500);
    }

    function secretKey (str) {
        let strArr = str.split(" ");

        let seria = strArr[0].slice(0,1) + ('*'.repeat(3));
        let number = ('*'.repeat(5)) + strArr[1].slice(5);

        return `${seria} ${number}`;
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
                    <h3>{user.lastName} {user.firstName} {user.fatherName}</h3>
                    <p className="personal__main__info__text">{user.grade}</p>
                    <hr></hr>
                    <p className="personal__main__info__text">01.01.2001</p>
                    <p className="personal__main__info__text">{user.phone}</p>
                    <p className="personal__main__info__text">{user.email}</p>
                    <div className="personal__main__info__passport">
                        <span>Паспорт</span>
                        <span>{secretKey(user.passport)}</span>
                        <CopyToClipboard text={user.passport} onCopy={handleCopy}>
                            <button><img src="/copy.png" alt="copy" /></button>
                        </CopyToClipboard>
                    </div>
                </div>
                {copied && <div className="copy">Copy!</div>}
            </div>
        </div>
    )
}