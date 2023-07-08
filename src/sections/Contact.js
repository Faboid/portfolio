import './Contact.css';
import Spacer from '../components/Spacer';

export default function Contact() {
    return (
        <div className="contact">
            <Spacer height="5vh"/>
            <h1>Contact me</h1>
            <ContactForm/>
        </div>
    );
};

function ContactForm() {
    return (
        <div className='contact-form'>
            <div className='contact-form-inner'>
                <Spacer height={"2rem"}/>

                <form action='https://formsubmit.co/98a40627a7bb2ea3ec14d53eb826a378' method='POST'>

                    <input type='text' name='_hon' className='hon-pot'/>
                    <input type="hidden" name="_captcha" value="false"/>

                    <div className='form-input-container'>
                        <label className='form-input-label'>Name</label>
                        <input name='name' className='form-input'/>
                    </div>

                    <div className='form-input-container'>
                        <label className='form-input-label'>Email</label>
                        <input name='email' className='form-input'/>
                    </div>

                    {/*<div className='form-input-container'>
                        <label className='form-input-label'>Subject</label>
                        <input name='subject' className='form-input'/>
                    </div> */}

                    <div className='form-input-container'>
                        <label className='form-input-label'>Message</label>
                        <textarea name='message' className='form-input'/>
                    </div>

                    <button className='form-submit-btn'>Send</button>
                </form>

            </div>
        </div>
    );
}