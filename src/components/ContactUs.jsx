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
    ).then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
    form.current.reset();
  };

  return (
    <motion.div
      className='message'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.01 } }}
    >
      <form ref={form} onSubmit={sendEmail}>
        <p className='contactTitle'>Contact Us</p>

        <label className='formLabel'>Name</label>
        <input placeholder="Your name" type="text" name="user_name" required />

        <label className='formLabel'>Email</label>
        <input placeholder="your@email.com" type="email" name="user_email" required />

        <label className='formLabel'>Message</label>
        <textarea placeholder="How can we help you?" name="message" required />

        <input className="emailButton" type="submit" value="SEND" />
      </form>
    </motion.div>
  );
};

export default ContactUs;