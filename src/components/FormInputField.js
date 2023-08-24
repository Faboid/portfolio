import { useState } from 'react';
import Visible from './Visible';
import './FormInputField.css';

export default function FormInputField({ name, type, placeholder, submissionAttempted, onSubmissionAttempt, multiline }) {

    const [errorMessage, setErrorMessage] = useState("");
    const [hasValue, setHasValue] = useState(false);
    const labelClass = "input-label " + ((hasValue) ? "show" : "");

    function CheckIfEmpty(e) {
        let status = e.target.value.length > 0;
        if(status !== hasValue) {
            setHasValue(() => status);
        }

        if(submissionAttempted) {
            setError(e.target.validationMessage);
        }
    }

    function onInvalid(e) {
        e.preventDefault();
        onSubmissionAttempt();
        setError(e.target.validationMessage);
    }

    function setError(error) {
        if(error) {
            console.log("Error in field " + name + ": " + error);
        }
        
        setErrorMessage(error);
    }

    const inputField = (multiline) ?
        <textarea type={type} onInvalid={onInvalid} required={true} name={name} placeholder={placeholder} onChange={CheckIfEmpty} className='input-field'/> :
        <input type={type} onInvalid={onInvalid} required={true} name={name} placeholder={placeholder} onChange={CheckIfEmpty} className='input-field'/>;

    return (
        <div className='input-container'>
            <label className={labelClass} htmlFor={name}>{placeholder}</label>
            {inputField}
            <Visible show={submissionAttempted && errorMessage !== ""}>
                <span className='input-error' role='alert'>{errorMessage}</span>
            </Visible>
        </div>
    );
}