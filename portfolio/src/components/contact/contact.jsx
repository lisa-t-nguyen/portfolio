import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p3tnwlt', 'template_mgcvnob', form.current, 'ooZLb50-S0g3UVCF4')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
   <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>

    <div className="container contact_container">
      <div className="contact_options">
        <article className="contact_option">
          <MdEmail className='contact_option-icon'/>
          <h4>Email</h4>
          <a href='mailto:lisanguyensc@gmail.com' target='_blank'>Send an email</a>
        </article>
      </div>
      {/* END OF CONTACT OPTIONS */}

      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Full Name' required />
        <input type="email" name='email' placeholder='Your Email' required />
        <textarea name="message" rows="5" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>

    </div>
   </section>
  )
}

export default Contact