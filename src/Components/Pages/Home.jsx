import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import SkillSection from '../SkillSection/SkillSection'
import ExperienceSection from '../ExperienceSection/ExperienceSection'
import ProjectsSection from '../ProjectsSection/ProjectsSection'
import Contact from '../Contact/Contact'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <SkillSection/>
      <ExperienceSection/>
      <ProjectsSection/>
      <Education/>
      <Contact/>
    </div>
  )
}

export default Home
