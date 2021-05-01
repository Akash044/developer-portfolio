import "./ContactMe.css";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import Navbar from "../Navbar/Navbar";

const ContactMe = () => {
  return ( <div>
    <Navbar />
    
    <div className="contact-me-container">
      <div className="first-half">
        <h1>let's work together</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quis
          repellat minus quaerat officia libero sequi in? Quia culpa adipisci
          saepe alias vitae! Id saepe atque cum ullam quia voluptas!
        </p>
        <h6> <FontAwesomeIcon style={{color:"#7050ef"}} icon={faEnvelope} /> akash.cse.ruet@gmail.com</h6>
        <h6><FontAwesomeIcon style={{color:"#7050ef"}} icon={faPhoneAlt} /> +8801737605991</h6>
      </div>
      <div className="second-half shadow" data-aos="fade-up">
        <div className="form-upper-portion">
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              {/* Email address */}
            </label>
            <input
              type="email"
              className="form-control in"
              id="exampleFormControlInput1"
              placeholder="&#xf0e0; email"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
            {/* Full name */}
            </label>
            <input
              type="email"
              className="form-control in"
              id="exampleFormControlInput1"
              placeholder="&#xf007; name"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              {/* Company name */}
            </label>
            <input
              type="text"
              className="form-control in"
              id="exampleFormControlInput1"
              placeholder="&#xf1ad; company name"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              {/* Subject */}
            </label>
            <input
              type="text"
              className="form-control in"
              id="exampleFormControlInput1"
              placeholder="&#x10f518; subject"
            />
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
          </label>
          <textarea
            className="form-control in"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="&#xf27a; your message"
          ></textarea>
        </div>
        <button className="btn send-btn">send message</button>
      </div>
    </div>
    </div>
  );
};

export default ContactMe;
