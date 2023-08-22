import { createPortal } from "react-dom";
import "./FormSubmitMessageBox.css";
import { useEffect, useState } from "react";

export default function FormSubmitMessageBox({ title, message, onClose }) {

    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(() => message !== "");
    }, [message]);

    console.log(show);
    return createPortal(<MessageBox title={title} message={message} onClose={onClose} show={show}/>, document.body);
}

function MessageBox({ title, message, onClose, show }) {

    const formboxClass = "form-resultbox " + (show ? "show" : "");

    return (
        <section className="form-resultbox-wrapper" role="alert">
            <div className={formboxClass}>
                <p className="form-resultbox-title">{title}</p>
                <p className="form-resultbox-message">{message}</p>
                <button className="form-resultbox-okbtn" onClick={() => onClose()}>Ok</button>
            </div>
        </section>
    );
}