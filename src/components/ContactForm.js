import { useRef, useState } from 'react';
import FormInputField from './FormInputField';
import './ContactForm.css';

//needs: name, email, text message

export default function ContactForm({ emailcode }) {

    const formRef = useRef(null);
    const formAction = "https://formsubmit.co/" + emailcode;

    function handleSubmit(e) {
        //implement validation
        console.log("submitting");
        formRef.current.submit();
    }

    return (
        <form action={formAction} ref={formRef} method="POST" className='contact-form'>

            <div className='main-info'>
                <FormInputField type={"text"} name={"name"} placeholder={"Name"}/>
                <FormInputField type={"email"} name={"email"} placeholder={"Email"}/>
            </div>

            <FormInputField type={"text"} name={"message"} placeholder={"Message"} multiline={true}/>
            <SubmitBtn submitForm={handleSubmit}/>

        </form>
    );
}

function SubmitBtn({ submitForm }) {

    const [clicked, setClicked] = useState(false);
    let btnClassName = 'submit-button ' + (clicked ? 'clicked' : '');

    function onSubmit(e) {
        console.log(e);
        setClicked(true);
        submitForm(e);
    }

    return <button 
        className={btnClassName}             
        onClick={(e) => onSubmit(e)}
        onAnimationEnd={() => setClicked(false)}
        disabled={clicked}
        type='submit'
        >Send</button>;
}