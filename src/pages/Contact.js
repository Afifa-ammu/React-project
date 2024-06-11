import React from 'react'
import './Contact.css'
import { FaAddressBook } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";

function Contact() {
  return (
    <div className='form'>
        <h1>Contact pages</h1>
        <div className="content">
              <div className="contactinfo">
              <FaAddressBook className='icons' />
                <h2>Address</h2>
              3/52 kallakurichi<br></br>
              606301
              </div>
              <div className="contactinfo">
              <FaSquarePhone className='icons' />
                <h2>Phone Number</h2>
               8220655063
              </div>
              <div className="contactinfo">
              <MdOutlineMail className='icons' />
              <h2>Email Address</h2>
              afifa2020cs@gmail.com
              </div>
        
           <div className="contents">
           <h3>Contact Details</h3>
           <form autoComplete='off'>
                <label>Name </label>
                  <input type='text' autoComplete='off' required =""/>
                 <br></br>
                  <label>Email </label>
                  <input type='email' autoComplete='off' required ="" />
                  <br></br>
                  <label>Mobile Number </label>
                  <input type='number' autoComplete='off' required =""/>
                  <br></br>
                  <button class ="btn btn-danger">Submit</button>
                  </form>
           </div>
          </div>
    </div>
  )
  }

export default Contact