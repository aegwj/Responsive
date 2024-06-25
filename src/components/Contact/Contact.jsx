
import './Contact.css';
import { useContext, useState, useEffect } from "react";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from '../../assets/white-arrow.png';
  
const Contact = () => {
    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f022a9f1-3508-4e0e-b6e2-9f9aaa3ec09a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  }
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>
          We would love to hear from you! Whether you have questions, feedback,
          or just want to say hello, feel free to drop us a message. Our team is
          ready to assist you.
        </p>
        <ul>
          <li> <img src={mail_icon} alt="" />info@yourcompany.com</li>
          <li><img src={phone_icon} alt="" />
           +123 456 7890
          </li>
          <li><img src={location_icon} alt="" />
            123 Your Street, Your City, <br />Your State,
            12345
          </li>
        </ul>

      </div>
      <div className='contact-col'>
        <form onSubmit={onSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" placeholder='Enter your name' required />
          <label >Phone Number</label>
          <input type="text" name="phone" id="phone" placeholder='Enter your phone number' required />
          <label >Write your messages here</label>
         <textarea name="messages"  rows="6" placeholder='Enter your message' required />
          <button type="submit" className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{ result}</span>
      </div>
    </div>
  );
};

export default Contact;
