import './Contact.css';
import Spacer from '../components/Spacer';
import ContactForm from '../components/ContactForm';
import config from '../config.json';
import FormSubmitMessageBox from '../components/FormSubmitMessageBox';
import { useState } from 'react';

export default function Contact() {

    const [resultMessage, setResultMessage] = useState("");
    const contactHeader = "Contact Me";
    const emailcode = config['emailcode'];

    function onSubmitSuccess(data) {
        console.log("The message has been submitted successfully.", data);
        setResultMessage(data.message);
    }

    function onSubmitFailure(data) {
        console.warn("The message has failed to be submitted.", data);
        setResultMessage(data.message);
    }

    function onSubmitError(error) {
        console.error("There has been an error trying to submit the message.", error);
        setResultMessage(error.message);
    }

    return (
        <div id='contact' className="contact">
            <Spacer height="3vh"/>
            <h3 data-content={contactHeader} className='contact-section-header'>{contactHeader}</h3>
            <Spacer height={"min(10vh, 4rem)"}/>
            <ContactForm 
                emailcode={emailcode} 
                onSubmitSuccess={onSubmitSuccess} 
                onSubmitFailure={onSubmitFailure}
                onSubmitError={onSubmitError}
                />
            <FormSubmitMessageBox message={resultMessage}/>
        </div>
    );
};