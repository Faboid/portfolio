import { useEffect, useState } from 'react';
import FormInputField from './FormInputField';
import './ContactForm.css';

//needs: name, email, text message

export default function ContactForm({ emailcode, onSubmitSuccess, onSubmitFailure, onSubmitError }) {

    const [pending, setPending] = useState(false);
    const urlSubmit = "https://formsubmit.co/ajax/" + emailcode;

    function handleSubmit(e) {
        e.preventDefault();

        const data = e.target;

        //check honey
        if(data.defined.value !== "base") {
            console.log("aborted email submission: suspected bot");
            return;
        }

        if(pending) {
            console.log("stopping spam submissions");
            return;
        }
        
        const args = buildArgs(data);
        setPending(true);

        console.log("sending email");
        fetch(urlSubmit, args)
            .then(response => response.json())
            .then(data => {
                if(data.success === "true") {
                    onSubmitSuccess(data);
                } else {
                    onSubmitFailure(data);
                }
            })
            .catch(error => onSubmitError(error))
            .finally(() => setPending(false));

    }

    function buildArgs(data) {
        
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
        return args;

    }

    return (
        <form onSubmit={e => handleSubmit(e)} className='contact-form'>

            <input type="text" defaultValue="base" name='defined' className='hon-field'/>

            <div className='main-info'>
                <FormInputField type={"text"} name={"name"} placeholder={"Name"}/>
                <FormInputField type={"email"} name={"email"} placeholder={"Email"}/>
            </div>

            <FormInputField type={"text"} name={"message"} placeholder={"Message"} multiline={true}/>
            <SubmitBtn submitting={pending}/>

        </form>
    );
}

function SubmitBtn({ submitting }) {

    const [clicked, setClicked] = useState(false);
    const btnClassName = 'submit-button ' + (clicked ? 'clicked' : '');

    useEffect(() => {

        if(submitting) {
            setClicked(true);
            return;
        }

        //if removing "clicked", delay slightly to ensure the animation completes
        setTimeout(() => {
            setClicked(false);
        }, 500);

    }, [submitting]);

    return <button className={btnClassName} disabled={clicked} type='submit'>Send</button>;
}