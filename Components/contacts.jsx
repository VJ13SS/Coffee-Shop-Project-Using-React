import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import bgImg from '/src/Images/bgImg4.jpg'

export default function Contacts(){
  const submitFunction = (e) =>{
    alert("Thank You for the Feedback ");
    e.preventDefault();
  }
  return(
    <div className = 'contacts-container'>
      
      <h2>Contact Us</h2>
      <div className = 'contacts' id = 'contact-us'>
        <div className = 'contact-field' id = 'contact-details'>
          <span>Coffee Shop Name</span>
          <span><FontAwesomeIcon icon={faMapMarkerAlt} />  123 Coffee Street, Brewtown, BT 45678</span>
          <span><FontAwesomeIcon icon={faPhone} />  (123) 456-7890</span>
          <span><FontAwesomeIcon icon={faEnvelope} />  info@coffeeshop.com</span>   
          <p>
            Hours of Operation:
            <br></br>
            <span>Monday - Friday: 7:00 AM</span>
            <br></br>
            <span>Saturday - Sunday: 8:00 AM</span>
          </p>
        </div>
        <div className = 'contact-field' id = 'contact-form'>
          <form onSubmit = {submitFunction}>
            <h5>Contact Form</h5>

            <input type = 'text' placeholder = 'Enter Your Name: '/>
            <input type = 'email' placeholder = 'Enter your Email:' />
            <textArea placeholder = 'Enter your Message: '></textArea>
            <button>Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}
