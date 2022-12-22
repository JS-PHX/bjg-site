import React, { useRef } from 'react';
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_mscgxyq',
      'template_i24q4zp',
      form.current,
      'WHpfLyqJPl10QF4qF'
        )
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset();
  };

  return (
    <div className='message'>
    <form ref={form} onSubmit={sendEmail}>
      <h1 className='contactTitle'>Contact Us</h1>
      <input placeholder="Name" type="text" name="user_name" />
      <input placeholder="E-Mail" type="email" name="user_email" /><br /><br />
      <textarea placeholder="Message" name="message" />
      <input className="emailButton" type="submit" value="Send" />
    </form>
    </div>
  );
};

export default ContactUs;