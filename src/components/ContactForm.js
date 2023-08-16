import { useState } from 'react';
import FormInputField from './FormInputField';
import './ContactForm.css';

//needs: name, email, text message

export default function ContactForm({ emailcode }) {

    const urlSubmit = "https://formsubmit.co/ajax/" + emailcode;

    function handleSubmit(e) {
        e.preventDefault();

        const data = e.target;

        //check honey
        if(data.defined.value !== "base") {
            console.log("aborted email submission: suspected bot");
            return;
        }
        
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
        
        const body = JSON.stringify({
            name: data.name.value,
            email: data.email.value,
            message: data.message.value
        });
        
        const args = { method: 'POST', headers: headers, body: body };

        console.log("sending email");
        fetch(urlSubmit, args)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));

    }

    return (
        <form onSubmit={e => handleSubmit(e)} className='contact-form'>

            <input type="text" defaultValue="base" name='defined' className='hon-field'/>

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
        onAnimationEnd={() => setClicked(false)}
        disabled={clicked}
        type='submit'
        >Send</button>;
}