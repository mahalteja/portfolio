import React, { useEffect } from "react";
import "./SkillsCard.css";
import { ui } from "../Assets/data";
import { frontend } from "../Assets/data";
import { others } from "../Assets/data";
import Item from "../Items/Item";
import AOS from "aos";
import "aos/dist/aos.css";

const SkillsCard = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="cards" >
      <div id="card" data-aos="fade-up">
        <div id="card-heading">
          <h1>{ui.nam}</h1>
        </div>
        <div id="card-items">
          {ui.skill.map((item, i) => {
            return <Item {...item} />;
          })}
        </div>
      </div>
      <div id="card" data-aos="fade-up">
        <div id="card-heading">
          <h1>{frontend.nam}</h1>
        </div>
        <div id="card-items">
          {frontend.skill.map((item, i) => {
            return <Item {...item} />;
          })}
        </div>
      </div>
      <div id="card" data-aos="fade-up">
        <div id="card-heading">
          <h1>{others.nam}</h1>
        </div>
        <div id="card-items">
          {others.skill.map((item, i) => {
            return <Item {...item} />;
          })}
        </div>
      </div>
      
    </div>
  );
};

export default SkillsCard;
