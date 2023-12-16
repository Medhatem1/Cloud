import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import GoogleMapa from "../GoogleMap";
import axios from "axios";
import { useState } from "react";
import {useNavigate} from "react-router-dom"


export default function Contact() {
  const handleNameChange = (e) => {
    setForm({
      ...form,
      Name: e.target.value,
    });
  };
  const handleEmailChange = (e) => {
    setForm({
      ...form,
      email: e.target.value,
    });
  };
  const handleAgeChange = (e) => {
    setForm({
      ...form,
      age: e.target.value,
    });
  };
  const handleMessage = (e)=>{
    setForm({
      ...form,
      message: e.target.value
    })
  }
    
  const navigate=useNavigate();


const [form,setForm]=useState({Name:"",email:"",age:"0",message:""})
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3009/contact",form)
    .then(response=>{
      setForm(response.data);
      console.log(response.data)
    })
    .catch((err)=>{
      console.error(err)
    })
    
}
  return (
    <>
    <div className="contact">
      <div className="contact-image">
        <div className="contact-title">Contact Us</div>
      </div>
      <div className="FORM">
     <div className="form-container">
      <div className="question" data-aos="fade-up" data-aos-duration="1000">Got any questions?</div>
      <div className="contact-desc" data-aos="fade-up" data-aos-duration="1000">Use the form below to get in touch with the support team

</div>
<div className="qll">      <div className="gps-down">
        <h1>view our location</h1>
<GoogleMapa/>
      </div>
      <form action="">
        <input data-aos="fade-up" data-aos-duration="1000" type="text" placeholder="Your Name" value={form.Name} onChange={handleNameChange} required className="input-con"/>
        <input data-aos="fade-up" data-aos-duration="1000" type="email" placeholder="Your email" value={form.email} onChange={handleEmailChange}  required className="input-con"/>
        <input data-aos="fade-up" data-aos-duration="1000" type="number" placeholder="Your age" value={form.age} onChange={handleAgeChange} required className="input-con" />
<textarea data-aos="fade-up" data-aos-duration="1000" name="message" id="" cols="19" rows="3.5" value={form.message} onChange={handleMessage} placeholder="special request"></textarea>
<div data-aos="fade-up" data-aos-duration="1000" className="contact-button" onClick={handleSubmit}>send your message</div>
      </form>
     </div>
     </div>
    </div>
 
</div>

    </>
  )
}
