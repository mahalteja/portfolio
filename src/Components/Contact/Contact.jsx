import React, { useEffect } from 'react'
import "./Contact.css"
import AOS from "aos"
import "aos/dist/aos.css"


const Contact = () => {
  useEffect(()=>{
    AOS.init({duration:2000})
  },[])
  return (
    <div className='contact'>
      <h1 data-aos="fade">Contact</h1>
      <p data-aos="fade-up">Feel free to reach out to me for any questions or opportunities!</p>
      <div className="contact-details" data-aos="fade-up">
        <div><div className="contact-heading">Email Me </div><span>🚀</span></div>
        <input type="email"  placeholder='Enter Email'/>
        <input type="name" placeholder='Enter Your Name'/>
        <textarea name="" id="" cols="30" rows="5" placeholder='Message'></textarea>
        <button>Submit</button>
      </div>
    </div>
  )
}

export default Contact
