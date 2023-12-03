import React, {useEffect} from "react";
import "./HeroSection.css";
import Profile from "../Assets/Profile.png";
import AOS from 'aos'
import 'aos/dist/aos.css'

const HeroSection = () => {
  useEffect(()=>{
    AOS.init({duration:3000})
  },[])
  return (
    <div className="hero">
      <div className="hero-left" data-aos="fade-right">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="478"
          height="566"
          viewBox="0 0 478 566"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M477.258 292.193C477.688 414.515 445.717 507.262 324.789 545.287C206.248 582.562 98.4233 568.599 46.325 493.728C-14.1175 406.865 -11.7411 277.989 36.2195 181.838C88.3255 77.3765 199.886 -23.8694 314.6 6.23981C439.455 39.0107 476.82 167.714 477.258 292.193Z"
            fill="url(#paint0_linear_16_3)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_16_3"
              x1="430.325"
              y1="74.2835"
              x2="369.694"
              y2="982.352"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#530484" />
              <stop offset="1" stop-color="#040255" />
            </linearGradient>
          </defs>
        </svg>
        <img src={Profile} alt="" class="sc-idiyUo ikZshl" />
      </div>
      <div className="hero-right" data-aos="fade" >
        <div className="hero-right-heading" >
          <h1>Hi, I am</h1>
          <h2>Mahal Teja</h2>
          <h3>I am UI UX Designer</h3>
        </div>
        <p >
          I am a motivated and versatile individual, always eager to take on new
          challenges. With a passion for learning I am dedicated to delivering
          high-quality results. With a positive attitude and a growth mindset, I
          am ready to make a meaningful contribution and achieve great things.
        </p>
        <button >Check Resume</button>
      </div>
    </div>
  );
};

export default HeroSection;
