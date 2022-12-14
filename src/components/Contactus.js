import React from "react";
import "./contactus.css";
import { GoLocation } from "react-icons/go";
import { AiFillPhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
const Contactus = () => {
  return (
    <>
      <div className="container">
        <div id="contact" className="contact">
          <h2>GET IN TOUCH WITH US</h2>
          <h1>Contact Us</h1>
          <div className="contact-text">
            <div className="location">
              <div className="location-row">
                <GoLocation />
                <span>Our Location</span>
              </div>

              <p>
                Silver Mall,Tower2, Centrall parallel road, 6th 
              <p> October City,  Giza, Egypt.</p> 
              </p>
            </div>
            <div className="lets-talk">
              <div className="lets-talk-row">
                <AiFillPhone />
                <span>Let's Talk</span>
              </div>

              <p>Phone : +20 109 756 9714</p>
              <p>Whatsapp:0114 097 2214</p>
            </div>
            <div className="email">
              <div className="email-row">
                <AiOutlineMail />
                <span>E-mail Us</span>
              </div>

              <p>info@al-meshka.com</p>
            </div>
            <div className="form">
            
              <div className="name">
              <p>Your Name (required)</p>
              <div className="name-input">
              <BsFillPersonFill />
                <input type="text" placeholder="Enter Your Name" />
              </div>
                
              </div>
              <div className="name">
              <p>Your Email (required)</p>
              <div className="name-input">
              <AiOutlineMail />
                <input type="text" placeholder="Enter Your Email" />
              </div>
                
              </div>

              <div className="subject">
              <p>Subject</p>
              <div className="subject-input">
              <AiOutlineMail />
                <input type="text" placeholder="Enter Your Subject" />
              </div>
                
              </div>
              <div className="textarea">
                <p>Your Message</p>
                <textarea placeholder="What You Want To Say? " name="" id="" cols="40" rows="10"></textarea>
              </div>

          <button className="send" type="submit">Send</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;
