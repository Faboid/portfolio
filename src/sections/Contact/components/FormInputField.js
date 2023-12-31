import { useState } from 'react';
import Visible from '../../../components/Visible';
import './FormInputField.css';

export default function FormInputField({ name, type, placeholder, submissionAttempted, onSubmissionAttempt, multiline }) {

    const [errorMessage, setErrorMessage] = useState("");
    const [hasValue, setHasValue] = useState(false);
    const labelClass = "input-label " + ((hasValue) ? "show" : "");
    const fieldClass = "input-field " + ((errorMessage !== "") ? "invalid" : "");
    const containerClass = "input-container " + ((errorMessage !== "") ? "invalid" : "");

    function CheckIfEmpty(e) {
        let status = e.target.value.length > 0;
        if(status !== hasValue) {
            setHasValue(() => status);
        }

        if(submissionAttempted) {
            evaluateError(e.target.value);
        }
    }

    function onInvalid(e) {
        e.preventDefault();
        onSubmissionAttempt();
        evaluateError(e.target.value);
    }

    function evaluateError(value) {
        let error = validate(value);

        //ignore if it's the same
        if(error === errorMessage) {
            return;
        }

        if(error) {
            console.log("Error in field " + name + ": " + error);
        }
        
        setErrorMessage(error);
    }

    function validate(value) {

        if(value === "") {
            return "Please fill out this field.";
        }

        //regex from https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email#validation
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        if(name === "email" && !emailRegex.test(value)) {
            return "Please insert a valid email address.";
        }

        return "";

    }

    const inputField = (multiline) ?
        <textarea type={type} onInvalid={onInvalid} required={true} name={name} placeholder={placeholder} onChange={CheckIfEmpty} className={fieldClass}/> :
        <input type={type} onInvalid={onInvalid} required={true} name={name} placeholder={placeholder} onChange={CheckIfEmpty} className={fieldClass}/>;

    return (
        <div className={containerClass}>
            <label className={labelClass} htmlFor={name}>{placeholder}</label>
            {inputField}
            <Visible show={submissionAttempted && errorMessage !== ""}>
                <span className='input-error' role='alert'>{errorMessage}</span>
            </Visible>
        </div>
    );
}