import './ContactForm.css';

//needs: name, email, text message

export default function ContactForm() {
    return (
        <div className='contact-form'>

            <div className='main-info'>

                <div className='input-container'>
                    <input name='name' placeholder='Name' className='input-field'/>
                </div>

                <div className='input-container'>
                    <input name='email' placeholder='Email' className='input-field'/>
                </div>

            </div>

            <div className='input-container'>
                <textarea name='message' placeholder='Message' className='input-field'/>
            </div>

            <button className='submit-button'>Submit</button>

        </div>
    );
}