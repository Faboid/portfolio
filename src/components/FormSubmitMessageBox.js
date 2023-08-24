import { createPortal } from "react-dom";
import "./FormSubmitMessageBox.css";
import { useEffect, useState } from "react";

export default function FormSubmitMessageBox({ title, message, resetState }) {

    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(() => message !== "");
    }, [message]);

    function onClose() {
        setShow(false);
        setTimeout(resetState, 300);
    }

    return createPortal(<MessageBox title={title} message={message} onClose={onClose} show={show}/>, document.body);
}

function MessageBox({ title, message, onClose, show }) {

    const [clicked, setClicked] = useState(false);
    const formboxClass = "form-resultbox " + (show ? "show" : "");
    const buttonClass = "form-resultbox-okbtn " + (clicked ? "clicked" : "");

    if(show && clicked) {
        setClicked(() => false);
    }

    function onClick() {
        setClicked(() => true);
        onClose();
    }

    return (
        <section className="form-resultbox-wrapper" role="alert">
            <div className={formboxClass}>
                <p className="form-resultbox-title">{title}</p>
                <p className="form-resultbox-message">{message}</p>
                <button className={buttonClass} disabled={clicked} onClick={() => onClick()}>Ok</button>
            </div>
        </section>
    );
}