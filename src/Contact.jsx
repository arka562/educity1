import React from 'react'
import './Contact.css'
import msg_icon from './assets/msg-icon.png';
import phn_icon from './assets/phone-icon.png';
import email_icon from './assets/mail-icon.png';
import address_icon from './assets/location-icon.png';
import white_arrow from './assets/white-arrow.png';

const Contact = () => {

    const [result, setResult] = React.useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "177167d0-f31b-4dd3-9fcf-61d6872c235b");
  
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
    };


  return (
    <div className='contact'>
      <div className="contact-info">
        <h3>Send us a message <img src={msg_icon} alt='' /></h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, fugiat impedit sunt voluptas hic, modi at labore repellendus recusandae obcaecati laborum amet eaque nulla molestiae non praesentium? Enim minima beatae illo, sunt animi distinctio similique dolorum et consequatur? Officia, molestiae! Officiis sit reiciendis beatae culpa assumenda voluptatem, cum inventore harum.</p>
        <ul>
          <li><img src={email_icon} alt='' /> contact@arka.com</li>
          <li><img src={phn_icon} alt='' />97294942902</li>
          <li><img src={address_icon} alt='' />Mullers tank road,  <br />Godda jharkhand </li>
        </ul>
      </div>
      <div className="contact-info">
          <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter your name' required /><br />
            <label>Your Phone Number</label>
            <input type="tel" name='phno' placeholder='Enter your number' required /><br />
            <label>Write your message here</label>
            <textarea name="review" id="review" placeholder='Enter the message' rows={8} required></textarea><br />
            <button class='btn dark-btn'>Submit <img src={white_arrow} alt='' /></button>
          </form>
          <span>{result}</span>
      </div>
      
    </div>
  )
}

export default Contact
