import React from "react";
import "./Footer.css";
import { footerIcons } from "../Assets/data";
import {Link} from 'react-scroll'

const Footer = () => {
    console.log(footerIcons.facebook);
  return (
    <div className="footer">
      <h1>Mahal Teja</h1>
      <ul className="footer-items">
        <li><Link to="hero" spy={true} smooth={true} offset={-400} duration={500} >About </Link></li>
        <li><Link to="skills" spy={true} smooth={true} offset={-400} duration={500} >Skills</Link></li>
        <li><Link to="experience" spy={true} smooth={true} offset={-100} duration={500} >Experince</Link></li>
        <li><Link to="" spy={true} smooth={true} offset={50} duration={500} >Projects</Link></li>
        <li><Link to="" spy={true} smooth={true} offset={50} duration={500} >Education</Link></li>
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
