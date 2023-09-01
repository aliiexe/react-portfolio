import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

function Contact() {
    const formRef = useRef();
    const [success, setSuccess] = useState(false);
    const [buttonText, setButtonText] = useState('Send');

    const sendEmail = (e) => {
        e.preventDefault();

        if (formRef.current) {
            emailjs.sendForm('service_mh8fx2l', 'template_xw44xkr', formRef.current, '8LNefsQAfbsvtE4z6')
                .then((result) => {
                    console.log(result.text);
                    setSuccess(true);
                    setButtonText('Sent!');
                    setTimeout(() => {
                        setButtonText('Send');
                        setSuccess(false);
                    }, 5000);
                })
                .catch((error) => {
                    console.log(error.text);
                });

            formRef.current.reset();
        }
    };

    return (
        <section className='contact'>
            <div>
                <h1>Contact us!</h1>
                <p>Feel free to send us a message about anything you might need help with. We would love to hear from you!</p>
                <form id='contact-form' ref={formRef} onSubmit={sendEmail}>
                    <label htmlFor="user-name">Name :</label>
                    <input type="text" name='name' placeholder='Your name ...' required/>
                    <label htmlFor="user-email">Email :</label>
                    <input type="email" name="email" placeholder='example@gmail.com' required/>
                    <label htmlFor="message">Message :</label>
                    <textarea name="message" placeholder='Your message here...'></textarea>
                    <button type="submit" disabled={success}>{buttonText}</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
