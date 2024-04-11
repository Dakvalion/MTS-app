export function Modal ({active, setActive, children}) {
    return (
        <div className={ active ? "modal active" : "modal"} onClick={() => {setActive(false)}}>
            <div className={ active ? "modal__content active" : "modal__content"} onClick={(event) => { event.stopPropagation()}}>
                <button className="modal__content__button" onClick={() => {setActive(false)}}><img src="/close.png" alt="close" /></button>
                {children}
            </div>
        </div>
    )
}