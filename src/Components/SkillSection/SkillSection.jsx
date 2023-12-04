import React, {useEffect} from 'react'
import "./SkillSection.css"
import SkillsCard from '../SkillsCard/SkillsCard'
import AOS from "aos";
import "aos/dist/aos.css"

const SkillSection = () => {
  useEffect(()=>{
    AOS.init({duration:2000})
  },[])
  return (
    <div className='skills'>
      <div className="skills-heading">
        <h1 data-aos="fade-up">Skills</h1>
        <p data-aos="fade-up">Here are some of my skills on which I have been working on</p>
      </div>
      <div className="skills-card">
        <SkillsCard/>
      </div>
    </div>
  )
}

export default SkillSection
