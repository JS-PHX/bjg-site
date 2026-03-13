import React, { useRef, useState } from 'react';
import emailjs from "@emailjs/browser";
import { motion } from 'framer-motion';

export const ContactUs = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setLoading(false);
      setSuccess(true);
      form.current.reset();
    }, () => {
      setLoading(false);
      setError(true);
    });
  };

  return (
    <motion.div
      className='message'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.01 } }}
    >
      {success ? (
        <div className="successMessage">
          <p className="successTitle">Message Sent!</p>
          <p className="successText">Thanks for reaching out. We'll get back to you shortly.</p>
          <button className="successBtn" onClick={() => setSuccess(false)}>Return</button>
        </div>
      ) : (
        <form ref={form} onSubmit={sendEmail}>
          <p className='contactTitle'>Contact Us</p>
          <label className='formLabel'>Name</label>
          <input placeholder="Your name" type="text" name="user_name" required />
          <label className='formLabel'>Email</label>
          <input placeholder="your@email.com" type="email" name="user_email" required />
          <label className='formLabel'>Message</label>
          <textarea placeholder="How can we help you?" name="message" required />
          {error && (
            <p className="errorText">Something went wrong. Please try again.</p>
          )}
          <input
            className="emailButton"
            type="submit"
            value={loading ? "SENDING..." : "SEND"}
            disabled={loading}
          />
        </form>
      )}
    </motion.div>
  );
};

export default ContactUs;