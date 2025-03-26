import React from 'react'
import './contact.css'
import msg_icon from '../../assets/placeholder/msg_icon.png'
import mail_icon from '../../assets/placeholder/mail_icon.png'
import phone_icon from '../../assets/placeholder/phone_icon.png'
import location_icon from '../../assets/placeholder/location_icon.png'
import white_arrow from '../../assets/placeholder/white_arrow.png'
const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7940b902-7947-45d8-ad4a-e59a3385f623");

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
        <div className='contact_col'>
            <h3>Want to hire me? Or mayhaps connect? Send me a message!
                <img src={msg_icon} alt=''/>
            </h3>
            <p>Feel free to reach out through this contact form, or alternatively through one of the
               socials below. I'm always open to new opportunities and connections! Wether you want to
               talk biz or just chat, I'm all ears!</p>
            <ul>
                <li><img src={mail_icon} alt=''/>marcosdma.compeng@outlook.com</li>
                <li><img src={phone_icon} alt=''/>+1 437-982-2994</li>
                <li><img src={location_icon} alt=''/>308 Brunswick Ave, Toronto, ON<br/>
                M5R 2Y9, Canada</li>
            </ul>
        </div>
        <div className='contact_col'>
            <form onSubmit={onSubmit}> 
                <label>Your Name (required)</label>
                <input type='text' name='name' placeholder='Name' required/>

                <label>Your E-Mail (required)</label>
                <input type='email' name='mail' placeholder='Email' required/>

                <label>Your Phone Number</label>
                <input type='tel' name='phone' placeholder='Phone Number'/>

                <label>Subject</label>
                <input type='text' name='subject' placeholder='Subject'/>

                <label>Message (required)</label>
                <textarea name='message' rows='6' placeholder='Message' required></textarea>
                
                <button type='submit' className='btn dark_btn'>Submit! 
                  <img src={white_arrow} alt="" />
                </button>
            </form>
            {/* Make dynamic Sending message that is random */}
            {/* Sending... */}
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact
