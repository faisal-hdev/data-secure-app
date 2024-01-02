import React from "react";
import "./FooterStyle.css";
import { SiDatabricks } from "react-icons/si";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiDribbble,
  FiGithub,
  FiMail,
} from "react-icons/fi";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="container">
          <div className="top">
            <div className="logo-footer">
              <SiDatabricks className="icon" />
              <h2>Secured</h2>
            </div>
            <BsFillArrowUpCircleFill className="icon" />
          </div>
          <div className="col-container">
            <div className="col">
              <h3>Navigation</h3>
              <p>Home</p>
              <p>Data</p>
              <p>Cloud</p>
              <p>Contact</p>
            </div>
            <div className="col">
              <h3>My Account</h3>
              <p>Home</p>
              <p>Data</p>
              <p>Cloud</p>
              <p>Contact</p>
            </div>
            <div className="col">
              <h3>Information</h3>
              <p>Home</p>
              <p>Data</p>
              <p>Cloud</p>
              <p>Contact</p>
            </div>
            <div className="col">
              <h3>Legal</h3>
              <p>Home</p>
              <p>Data</p>
              <p>Cloud</p>
              <p>Contact</p>
            </div>
            <form>
              <h3>Join Our Team</h3>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                id=""
              />
              <FiMail className="mail-icon" />
              <div className="social-group">
                <FiInstagram className="social-icon" />
                <FiFacebook className="social-icon" />
                <FiTwitter className="social-icon" />
                <FiLinkedin className="social-icon" />
                <FiDribbble className="social-icon" />
                <FiGithub className="social-icon" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
