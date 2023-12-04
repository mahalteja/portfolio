import React, { useEffect } from "react";
import "./SkillsCard.css";
import { ui } from "../Assets/data";
import Item from "../Items/Item";
import AOS from "aos";
import "aos/dist/aos.css";

const SkillsCard = () => {
    useEffect(()=>{
        AOS.init({duration:2000})
    },[])
  return (
    <div className="card">
      <div className="card-heading">
        <h1 data-aos="fade-up">UI & UX Designing</h1>
      </div>
      <div className="card-items" data-aos="fade-up">
        {ui.map((item, i) => {
          return <Item {...item} />;
        })}
      </div>
    </div>
  );
};

export default SkillsCard;
