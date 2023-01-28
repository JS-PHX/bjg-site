import React, { useRef } from 'react';
import emailjs from "@emailjs/browser";
import { motion } from 'framer-motion';

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
    <motion.div className='message'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0, transition: {duration: .01}}}
    >
    <form ref={form} onSubmit={sendEmail}>
      <h1 className='contactTitle'>Contact Us</h1>
      <input placeholder="Name" type="text" name="user_name" />
      <input placeholder="E-Mail" type="email" name="user_email" /><br /><br />
      <textarea placeholder="Message" name="message" />
      <input className="emailButton" type="submit" value="SEND" />
    </form>
    </motion.div>
  );
};

export default ContactUs;