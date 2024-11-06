import React from "react";
import '../Styles/contact.css'
const Contact = () =>{
    return(
        <div className="contactPage">
            <div className="contact-Cont">
                
                <div className="cont-box">
                    <form action="https://api.web3forms.com/submit" method="POST">
                        <input type="hidden" name="access_key" value="57829ce7-af76-43ee-bc82-77c955e19ee2" />
                        <div className="cont-top">
                            <div className="fields">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" placeholder="Enter Your Name" id="" required />
                            </div>
                            <div className="fields">
                                <label htmlFor="email">Email</label>
                                <input type="text" name="email" placeholder="Enter Your Email Address" id="" required />
                            </div>
                        </div>
                        <div className="fields">
                            <label htmlFor="address">Address</label>
                            <input type="text" name="address" placeholder="Enter Your Address" id="" required />
                        </div>
                        <div className="fields2">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="" rows="5"  placeholder="Enter Your Message Here..." required></textarea>
                            {/* <input type="text" name="message" placeholder="Enter Your Message Here..." id="" /> */}
                        </div>
                        <input type="checkbox" name="botcheck" class="hidden" style={{display: "none"}} />
                        <div className="fields">
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;