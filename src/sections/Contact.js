import './Contact.css';
import Spacer from '../components/Spacer';
import config from '../config.json';

export default function Contact() {
    return (
        <div id='contact' className="contact">
            <Spacer height="3vh"/>
            <h1>Contact me</h1>
            <ContactForm/>
        </div>
    );
};

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