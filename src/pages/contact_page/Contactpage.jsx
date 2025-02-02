import React, { useState } from "react";
import "./contactpage.css";
import Main_bg from "../../components/main_bg/Main_bg.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";

const Contactpage = () => {
  const [showPopup, setShowPopup] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "8bc01e9c-ca75-445e-97fe-569c562b2a81");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        setShowPopup(true);
        event.target.reset(); // Clear the form
        setTimeout(() => {
          setShowPopup(false);
        }, 3000); // Hide popup after 3 seconds
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section className="contactpage">
      <Navbar />
      <div className="contactpage_container">
        <div className="heading_container">
          <h1>Contact</h1>
        </div>
        <div className="contactpage_container_form">
          <form onSubmit={onSubmit}>
            <div className="contact_details">
              <input type="text" placeholder="Name" name="name" required />
              <input type="email" placeholder="Email" name="email" required />
              <input type="number" placeholder="Phone Number" name="phone" required />
              <div className="socials">
                <img src="assets/Pixel Star.svg" alt="pixel star" />
                <a href="https://www.instagram.com/revanshu_04" target="_blank" rel="noopener noreferrer"><img src="assets/Instagram_Icon.svg" alt="instagram icon" /></a>
                <a href="https://github.com/Rey004" target="_blank" rel="noopener noreferrer"><img src="assets/Github_Icon.svg" alt="github icon" /></a>
                <a href="https://www.linkedin.com/in/revanshu/?fbclid=PAY2xjawGrI71leHRuA2FlbQIxMQABplPXMwQVMSUFi4c-rqsYHZ58jtf9mIOToHqDklAmG7cMs9Bh7uH5i70J4w_aem_lCzZ0rWKtnVGQ4ks_o9Kmg" target="_blank" rel="noopener noreferrer"><img src="assets/LinkedIn_Icon.svg" alt="linkedin icon" /></a>
                <img src="assets/Pixel Star.svg" alt="pixel star" />

              </div>
            </div>
            <div className="message_container">
              <textarea placeholder="Message" name="message" required></textarea>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
      {showPopup && (
        <div className="success-popup">
          <p>Message has been sent!</p>
        </div>
      )}
      <Main_bg />
    </section>
  );
};

export default Contactpage;

