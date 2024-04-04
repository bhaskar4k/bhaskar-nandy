import { React, useRef, useState, useEffect } from "react";
import emailjs from 'emailjs-com';
import EmailSendPopup from '../Components/EmailSendPopup';

function ConnectMe() {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [fromEmail, setFromEmail] = useState('');
    const [display_popup, set_display_popup] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.send('service_zo2wpcw', 'template_0u0sqqh', {
            to_name: "Bhaskar",
            from_name: name,
            sender_email: fromEmail,
            message: message,
        }, 'Zy4QA39MGMav9xrRQ')
            .then((response) => {
                console.log('Email sent successfully:', response);
                set_display_popup(true);
                setName('');
                setMessage('');
                setFromEmail('');

                setTimeout(() => {
                    set_display_popup(false);
                }, 6000)
            })
            .catch((error) => {
                console.error('Error sending email:', error);
            });
    };

    const textAreaRef = useRef(null);

    useEffect(() => {
        if (name === '' || message === '' || fromEmail === '') {
            document.getElementById("send_email_btn").disabled = true;
        } else {
            document.getElementById("send_email_btn").disabled = false;
        }
    })

    useEffect(() => {
        if (textAreaRef.current) {
            textAreaRef.current.style.height = 'auto';
            textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px';
        }
    }, [textAreaRef.current?.value]);

    return (
        <>
            <div className='connectMe_parent'>
                <h1 className='connectMe_h1'>Connect with me</h1>

                <div className="email_fields">
                    <p>Enter your name<span className="required_field">*</span></p>
                    <input type="text" className="email_sender_name" value={name} onChange={(e) => setName(e.target.value)} />

                    <p>Enter message<span className="required_field">*</span></p>
                    <textarea ref={textAreaRef} className="email_message" value={message} onChange={(e) => setMessage(e.target.value)} />

                    <p>Enter your email ID<span className="required_field">*</span></p>
                    <input type="email" className="emailid" value={fromEmail} onChange={(e) => setFromEmail(e.target.value)} />

                    <div className="send_btn_div">
                        <div></div>
                        <button type="submit" onClick={sendEmail} id="send_email_btn">Send</button>
                    </div>
                </div>

                {display_popup && <EmailSendPopup />}
            </div>
        </>
    );
}

export default ConnectMe;

