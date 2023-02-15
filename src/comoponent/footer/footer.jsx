import React from "react";
import "./footer.css";
import Logo from "../../assets/logo.png";
import {
  InboxIcon,
  PhoneIcon,
  LocationMarkerIcon,
  LoginIcon,
  UserIcon,
  LinkIcon,
} from "@heroicons/react/outline";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <hr />
      <div className="cfooter">
        <div className="clogo">
          <img src={Logo} alt="" />
          <span>amazon</span>
        </div>
        <div className="block">
          <div className="details">
            <span>Contact Us</span>
            <span className="pnglines">
              <LocationMarkerIcon className="icon" />
              <span>111 north avenue Orlando, FL 32801</span>
            </span>
            <span className="pnglines">
              <PhoneIcon className="icon" />
              <a href="tel:9380247969">9380247969</a>
            </span>
            <span className="pnglines">
              <InboxIcon className="icon" />
              <a href="sindheganesh2004@gmail.com">support@me</a>
            </span>
          </div>
        </div>

        <div className="block">
          <div className="details">
            <span>Account</span>
            <span className="pnglines">
              <LoginIcon className="icon" />
              Sign In
            </span>
          </div>
        </div>

        <div className="block">
          <div className="details">
            <span>Company</span>
            <span className="pnglines">
              <UserIcon className="icon" />
              About Us
            </span>
          </div>
        </div>

        <div className="block">
          <div className="details">
            <span>Resources</span>
            <span className="pnglines">
              <LoginIcon className="icon" />
              <p>Safety Privacy & Terms</p>
            </span>
          </div>
        </div>
      </div>

      <div className="copyRight">
        <span>Copyright @2023 by Amazon, Inc.</span>
        <span>All rights reserved</span>
      </div>
    </div>
  );
};

export default Footer;
