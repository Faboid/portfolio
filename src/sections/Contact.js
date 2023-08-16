import './Contact.css';
import Spacer from '../components/Spacer';
import ContactForm from '../components/ContactForm';
import config from '../config.json';

export default function Contact() {

    const contactHeader = "Contact Me";
    const emailcode = config['emailcode'];

    function onSubmitSuccess(data) {
        console.log("The message has been submitted successfully.", data);
    }

    function onSubmitFailure(data) {
        console.warn("The message has failed to be submitted.", data);
    }

    function onSubmitError(error) {
        console.error("There has been an error trying to submit the message.", error);
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
        </div>
    );
};