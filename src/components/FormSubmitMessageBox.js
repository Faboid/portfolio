import { createPortal } from "react-dom";
import "./FormSubmitMessageBox.css";

export default function FormSubmitMessageBox({ message }) {

    if(message === "") {
        return;
    }

    console.log(message);
    return createPortal(<MessageBox message={message}/>, document.body);

}

function MessageBox({ message }) {
    return (
        <section className="form-resultbox-wrapper" role="alert">
            <div className="form-resultbox">
                <p className="form-resultbox-message">{message}</p>
                <button className="form-resultbox-okbtn" value={"Ok"}/>
            </div>
        </section>
    );
}