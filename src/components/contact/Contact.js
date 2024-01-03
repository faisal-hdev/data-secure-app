import React from "react";
import "./ContactStyle.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="form-container">
          <form>
            <h3>
              <span>
                <span>Contact</span> Us
              </span>
            </h3>
            <div>
              <label>Name</label>
              <input type="text" placeholder="Enter Your Name" />
            </div>
            <div>
              <label>Email</label>
              <input type="text" placeholder="Enter Your Email" />
            </div>
            <div>
              <label>Message</label>
              <textarea
                placeholder="Enter Your Message"
                name="message"
                id=""
                cols="50"
                rows="10"
              ></textarea>
            </div>
            <div>
              <label>Name</label>
              <input type="text" placeholder="Enter Your Name" />
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
