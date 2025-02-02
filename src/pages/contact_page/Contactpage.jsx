import React from "react";
import "./contactpage.css";
import Main_bg from "../../components/main_bg/Main_bg.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";

const Contactpage = () => {
  return (
    <section className="contactpage">
      <Navbar />
      <div className="contactpage_container">
        <div className="heading_container">
          <h1>Contact</h1>
        </div>
        <div className="contactpage_container_form">
          <div className="contact_details">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="number" placeholder="Phone Number" />
            <div className="socials">
              <img src="assets/Pixel Star.svg" alt="pixel star" />
              <img src="assets/Instagram_Icon.svg" alt="instagram icon" />
              <img src="assets/Github_Icon.svg" alt="github icon" />
              <img src="assets/LinkedIn_Icon.svg" alt="linkedin icon" />
              <img src="assets/Pixel Star.svg" alt="pixel star" />
            </div>
          </div>
          <div className="message_container">
            <textarea placeholder="Message"></textarea>
            <button>Submit</button>
          </div>
        </div>
      </div>
      <Main_bg />
    </section>
  );
};

export default Contactpage;
