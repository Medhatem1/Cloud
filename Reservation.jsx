import React, { useState } from "react";
import axios from "axios";

export default function Reservation() {
const handleDate=(e)=>{setForm({
  ...form,
  date: e.target.value
})}
const handleTime=(e)=>{setForm({
  ...form,
  time: e.target.value
})}
const handlePerson=(e)=>{setForm({
  ...form,
  person: e.target.value
})}
const handleName=(e)=>{setForm({
  ...form,
  Name: e.target.value,
});}
const handleMsg=(e)=>{setForm({
  ...form,
  msg: e.target.value
})}
const handleNum=(e)=>{setForm({
  ...form,
  num: e.target.value
})}
const handleEmail=(e)=>{ setForm({
  ...form,
  email: e.target.value,
});}
const [form,setForm]=useState({Name:"",date:"",time:"",person:"",msg:"",num:"",email:""})

const handleSubmit = (e) => {
  e.preventDefault();
  axios.post("http://localhost:3000/reservation",form)
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
      <div className="reserv-img">Reservation</div>
      <div className="reservation">
        <div className="mini-title">__ Reservation __</div>
        <div className="booking">Book a table</div>
        <div className="book-descr">
          Restaurant will be open for all days, Sunday night will be closed, All
          booking payment is secured with credit card, no charges will be aplly
          for online booking. no refundable.
        </div>
        <div className="request">
          Booking request +88-123-123456 or fill out the order form
        </div>
      </div>
      <div className="inputs">
        <div className="inputs1">
          <input type="date" className="kk" onChange={handleDate} value={form.date} />
          <input type="time" className="kk" onChange={handleTime} value={form.time} />
          <select name="persons" className="kk" id="" onChange={handlePerson} value={form.person}>
            <option value="">select one of the options below</option>
            <option value="1">1 Person</option>
            <option value="2">2 Person</option>
            <option value="3">3 Person</option>
            <option value="4">4 Person</option>
            <option value="5">5 Person</option>
            <option value="6">6 Person</option>
            <option value="7">7 Person</option>
            <option value="8">8 Person</option>
            <option value="9">9 Person</option>
          </select>
        </div>
        <div className="inputs2">
          <input type="text" className="kk" placeholder="Name" onChange={handleName} value={form.Name}/>
          <input type="tel" className="kk" placeholder="" onChange={handleNum} value={form.num}/>
          <input className="kk" type="email" placeholder="...@gmail.com" onChange={handleEmail} value={form.email}/>
        </div>
        <div className="message">
          <textarea
            name=""
            id=""
            cols="99"
            rows="5"
            className="kkk"
            placeholder="Message"
            onChange={handleMsg}
          ></textarea>
        </div>
      </div>
      <div className="button-reser" onClick={handleSubmit}>book a table</div>
    </>
  );
}
