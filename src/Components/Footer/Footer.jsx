import React from "react";
import "./Footer.css";
import { footerIcons } from "../Assets/data";

const Footer = () => {
    console.log(footerIcons.facebook);
  return (
    <div className="footer">
      <h1>Mahal Teja</h1>
      <ul className="footer-items">
        <li>About</li>
        <li>Skills</li>
        <li>Experince</li>
        <li>Projects</li>
        <li>Education</li>
      </ul>
      <ul className="social-media">
        <li>{footerIcons.facebook}</li>
        <li > {footerIcons.instagram}</li>
        <li onClick={()=>{
            window.location.href="https://www.linkedin.com/in/mahal-teja-006556248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        }} >{footerIcons.linkedin}</li>
        <li onClick={()=>{
            window.location.href="https://x.com/mahal_teja_?t=-BIEEyG48nDuMExkBgKo1w&s=09"
        }} >{footerIcons.twitter}</li>
      </ul>
      <p>© 2023 Mahal Teja. All rights reserved.</p>
    </div>
  );
};

export default Footer;
