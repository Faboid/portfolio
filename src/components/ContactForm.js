import { useState } from 'react';
import './ContactForm.css';
import FormInputField from './FormInputField';

//needs: name, email, text message

export default function ContactForm() {

    return (
        <div className='contact-form'>

            <div className='main-info'>
                <FormInputField name={"name"} placeholder={"Name"}/>
                <FormInputField name={"email"} placeholder={"Email"}/>
            </div>

            <FormInputField name={"message"} placeholder={"Message"} multiline={true}/>
            <SubmitBtn/>

        </div>
    );
}

function SubmitBtn() {

    const [clicked, setClicked] = useState(false);
    let btnClassName = 'submit-button ' + (clicked ? 'clicked' : '');

    return <button 
        className={btnClassName}             
        onMouseDown={() => setClicked(true)}
        onAnimationEnd={() => setClicked(false)}
        disabled={clicked}
        >Send</button>;
}