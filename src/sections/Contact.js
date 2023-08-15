import './Contact.css';
import Spacer from '../components/Spacer';
import ContactForm from '../components/ContactForm';
import config from '../config.json';

export default function Contact() {

    const contactHeader = "Contact Me";
    const emailcode = config['emailcode'];

    return (
        <div id='contact' className="contact">
            <Spacer height="3vh"/>
            <h3 data-content={contactHeader} className='contact-section-header'>{contactHeader}</h3>
            {/*<ContactForm/>*/}
            <Spacer height={"min(10vh, 4rem)"}/>
            <ContactForm emailcode={emailcode}/>
        </div>
    );
};
/*
function ContactForm() {

    const emailcode = config['emailcode'];
    const formAction = "https://formsubmit.co/" + emailcode;

    return (
        <div className='contact-form'>
            <div className='contact-form-inner'>
                <Spacer height={"2rem"}/>

                <form action={formAction} method='POST'>

                    <input type='text' name='_hon' className='hon-pot'/>
                    <input type="hidden" name="_captcha" value="false"/>

                    <div className='form-inputs'>

                        <div className='form-input-container'>
                            <label className='form-input-label'>Name</label>
                            <input name='name' className='form-input'/>
                        </div>

                        <div className='form-input-container'>
                            <label className='form-input-label'>Email</label>
                            <input name='email' className='form-input'/>
                        </div>

                        <div className='form-input-container'>
                            <label className='form-input-label'>Message</label>
                            <textarea name='message' className='form-input'/>
                        </div>

                    </div>

                    <button className='form-submit-btn'>Send</button>
                </form>

            </div>
        </div>
    );
}
*/