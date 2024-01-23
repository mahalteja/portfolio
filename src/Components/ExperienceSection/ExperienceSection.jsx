import React, {useEffect} from 'react'
import "./ExperienceSection.css"
import AOS from "aos"
import "aos/dist/aos.css"
import { circle } from '../Assets/data'
import {xros_logo } from '../Assets/data'
import Thub_logo from '../Assets/Thub_logo.png'
import PrepEdge_Logo from "../Assets/PrepEdge_logo.webp"

const ExperienceSection = () => {
    useEffect(()=>{
        AOS.init({duration:2000})
    },[])

  return (
    <div className='experience' id='experience'>
        <h1 data-aos="fade">Experience</h1>
        <p className='experience-p' data-aos="fade-up">My Experience as UI UX Designer in different Organisations and Projects</p>
      <div className="experience-section">
            <div className="experience-left">
                {circle}
                <div className="line"></div>
                {circle}

            </div>
            <div className="experience-right">
                <div className="xros-fellowship"  data-aos="fade-up">
                    <div className="xros-heading">
                        <img src={PrepEdge_Logo} alt="" />
                        <h2>UI UX Design Freelancer</h2>
                        <p className='subheading'>prepedge.co.in | December 2023–Present</p>
                        <hr />
                    </div>
                    <p id="xros-fellowship-p">I worked as the UI/UX designer at the Hacedor company. The XROS Fellowship Programme is a uniquely curated initiative aimed at supporting Indian developers working on XR technologies by providing fellowships, which will include a stipend and mentoring by industry experts. As part of the programme, I was recruited as an UI/UX designer at the Hacedor company. In the project, we designed an interactive website and platform for 3D clothing customization.</p>
                    <p id="xros-fellowship-p">Tools used: • Figma • Adobe Photoshop • Adobe Illustrator • Google Slides • Google Docs </p>
                </div>
                <div className="xros-fellowship"  data-aos="fade-up">
                    <div className="xros-heading">
                        <div>{xros_logo}</div>
                        <h2>XROS FELLOWSHIP</h2>
                        <p className='subheading'>xrosfellowship.ficci.in | April 2023–July 2023</p>
                        <hr />
                    </div>
                    <p id="xros-fellowship-p">I worked as the UI/UX designer at the Hacedor company. The XROS Fellowship Programme is a uniquely curated initiative aimed at supporting Indian developers working on XR technologies by providing fellowships, which will include a stipend and mentoring by industry experts. As part of the programme, I was recruited as an UI/UX designer at the Hacedor company. In the project, we designed an interactive website and platform for 3D clothing customization.</p>
                    <p id="xros-fellowship-p">Tools used: • Figma • Adobe Photoshop • Adobe Illustrator • Google Slides </p>
                </div>
                <div className="xros-fellowship" data-aos="fade-up">
                    <div className="xros-heading">
                        <img src={Thub_logo} alt="" />
                        <h2>UI & UX DESIGN INTERN & TRAINEE</h2>
                        <p className='subheading'>Technical Hub Pvt. Ltd. | Aug 2022 - Jan 2023</p>
                        <hr />
                    </div>
                    <p id="xros-fellowship-p">Learned Ui Ux Design, Frontend Development and completed <br/>Certification from Adobe on Visual Design.</p>
                    <p id="xros-fellowship-p">Skills Learned: • Figma • Adobe Photoshop • Adobe Illustrator • HTML • CSS • JavaScript </p>
                </div>

            </div>
      </div>
    </div>
  )
}

export default ExperienceSection
