import './FormInputField.css';

export default function FormInputField({ name, placeholder, multiline }) {

    const inputField = (multiline) ?
        <textarea name={name} placeholder={placeholder} className='input-field'/> :
        <input name={name} placeholder={placeholder} className='input-field'/>;

    return (
        <div className='input-container'>
            {inputField}
        </div>
    );
}