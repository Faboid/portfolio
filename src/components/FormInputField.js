import { useState } from 'react';
import './FormInputField.css';

export default function FormInputField({ name, type, placeholder, multiline }) {

    const [hasValue, setHasValue] = useState(false);
    const labelClass = "input-label " + ((hasValue) ? "show" : "");

    function CheckIfEmpty(e) {
        let status = e.target.value.length > 0;
        if(status !== hasValue) {
            setHasValue(() => status);
        }
    }

    const inputField = (multiline) ?
        <textarea type={type} name={name} placeholder={placeholder} onChange={(e) => CheckIfEmpty(e)} className='input-field'/> :
        <input type={type} name={name} placeholder={placeholder} onChange={(e) => CheckIfEmpty(e)} className='input-field'/>;

    return (
        <div className='input-container'>
            <label className={labelClass} htmlFor={name}>{placeholder}</label>
            {inputField}
        </div>
    );
}