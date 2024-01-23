import React, { useEffect, useState } from "react";
import "./ProjectsSection.css";
import Snapminds from "../Assets/Snapminds.jpg"
import Portfolio from "../Assets/Portfolio.png";
import Mtumx from "../Assets/Mtumx.png";
import Food_Delivery from "../Assets/Food_Delivery.png";
import Consultancy_App from "../Assets/Consultancy_App.png";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const [cardClicked, setCardClicked] = useState(false);
  return (
    <div className="projects" id="projects">
      <div className="projects-heading">
        <h1 data-aos="fade">Projects</h1>
        <p data-aos="fade-up">
          I have worked on a wide range of projects. From web apps to android
          apps. Here are some of my projects.
        </p>
      </div>
      <div className="projects-items">
        <div className="projects-1" data-aos="fade-up">
          <img src={Snapminds} alt="" />
          <div id="content"
            onClick={() => {
              setCardClicked(!cardClicked);
            }}
          >
            <div id="content-heading">
              <h1>Snapminds Website</h1>
              <p>December 2023 - January 2024</p>
              <hr />
            </div>
            <div id="content-bottom">
              <p>
                Here the portfolio website designed in Figma and developed by
                using React js. It contains Personal the details, Projects and
                expereience.
              </p>
              <div id="content-bottom-skills">
                <ul>
                  <li>Reactjs</li>
                  <li>Html</li>
                  <li>Css</li>
                  <li>Figma</li>
                  <li>Photoshop</li>
                </ul>
              </div>
            </div>

            <div id="buttons" className={cardClicked ? "clicked" : ""}>
              <button
                id="button-1"
                onClick={() => {
                  window.location.href =
                    "https://www.figma.com/file/1kh61J1olb7NqTP8Kn6UYf/Untitled?type=design&node-id=86%3A32&mode=design&t=iujSfN3H1rnhUOY1-1";
                }}
              >
                View Figma File
              </button>
              <button
                id="button-2"
                onClick={() => {
                  window.location.href = "mahalteja.netlify.app";
                }}
              >
                View Live App
              </button>
            </div>
          </div>
        </div>
        <div className="projects-1" data-aos="fade-up">
          <img src={Portfolio} alt="" />
          <div id="content"
            onClick={() => {
              setCardClicked(!cardClicked);
            }}
          >
            <div id="content-heading">
              <h1>Portfolio Website</h1>
              <p>December 2023</p>
              <hr />
            </div>
            <div id="content-bottom">
              <p>
                Here the portfolio website designed in Figma and developed by
                using React js. It contains Personal the details, Projects and
                expereience.
              </p>
              <div id="content-bottom-skills">
                <ul>
                  <li>Reactjs</li>
                  <li>Html</li>
                  <li>Css</li>
                  <li>Figma</li>
                  <li>Photoshop</li>
                </ul>
              </div>
            </div>

            <div id="buttons" className={cardClicked ? "clicked" : ""}>
              <button
                id="button-1"
                onClick={() => {
                  window.location.href =
                    "https://www.figma.com/file/1kh61J1olb7NqTP8Kn6UYf/Untitled?type=design&node-id=86%3A32&mode=design&t=iujSfN3H1rnhUOY1-1";
                }}
              >
                View Figma File
              </button>
              <button
                id="button-2"
                onClick={() => {
                  window.location.href = "mahalteja.netlify.app";
                }}
              >
                View Live App
              </button>
            </div>
          </div>
        </div>
        <div className="projects-1" data-aos="fade-up">
          <img src={Mtumx} alt="" />
          <div
            id="content"
            onClick={() => {
              setCardClicked(!cardClicked);
            }}
          >
            <div id="content-heading">
              <h1>Virtual Fashion Galleria</h1>
              <p>April 2023–July 2023</p>
              <hr />
            </div>
            <div id="content-bottom">
              <p>
                Here the real time I am worked in the internship. Virtual
                Fashion Galleria is a platform where we can customize the 3D
                dress model to required ones.
              </p>
              <div id="content-bottom-skills">
                <ul>
                  <li>Reactjs</li>
                  <li>Html</li>
                  <li>Css</li>
                  <li>Figma</li>
                  <li>Photoshop</li>
                  <li>Illustrator</li>
                </ul>
              </div>
            </div>

            <div id="buttons" className={cardClicked ? "clicked" : ""}>
              <button
                id="button-1"
                onClick={() => {
                  window.location.href =
                    "https://www.figma.com/file/hKpoU0EQKzbW7U2Es3kmMp/Mtumx-Project?type=design&node-id=0%3A1&mode=design&t=vdilfJFZvweRgVfW-1";
                }}
              >
                View Figma File
              </button>
              <button
                id="button-2"
                onClick={() => {
                  window.location.href = "https://mtumx.com";
                }}
              >
                View Live App
              </button>
            </div>
          </div>
        </div>
        <div className="projects-1" data-aos="fade-up">
          <img src={Food_Delivery} alt="" />
          <div
            id="content"
            onClick={() => {
              setCardClicked(!cardClicked);
            }}
          >
            <div id="content-heading">
              <h1>Food delivery Website UI</h1>
              <p>March 2023</p>
              <hr />
            </div>
            <div id="content-bottom">
              <p>
                Here the food delivery website, Here we can order the food from
                nearby restaurants. it has been done to practice the learned
                skills.
              </p>
              <div id="content-bottom-skills">
                <ul>
                  <li>Reactjs</li>
                  <li>Html</li>
                  <li>Css</li>
                  <li>Figma</li>
                  <li>Photoshop</li>
                </ul>
              </div>
            </div>

            <div id="buttons" className={cardClicked ? "clicked" : ""}>
              <button
                id="button-1"
                onClick={() => {
                  window.location.href =
                    "https://www.figma.com/file/SkXEoC74wsRJ23jZkjKDjY/Food-Delivery-Website?type=design&node-id=0%3A1&mode=design&t=wtmGg4CSg6Phu9hF-1";
                }}
              >
                View Figma File
              </button>
              <button
                id="button-2"
                onClick={() => {
                  window.location.href =
                    "https://restaurentbymavin.netlify.app/";
                }}
              >
                View Live Link
              </button>
            </div>
          </div>
        </div>
        <div className="projects-1" data-aos="fade-up">
          <img src={Consultancy_App} alt="" />
          <div
            id="content"
            onClick={() => {
              setCardClicked(!cardClicked);
            }}
          >
            <div id="content-heading">
              <h1>Consultancy App UI</h1>
              <p>February 2023</p>
              <hr />
            </div>
            <div id="content-bottom">
              <p>
                By the learning the tool I am done the first project of app user
                interface using FIgma. It has a different pages like Courses,
                Articles, Popular, Chat etc.. It has prototyping and components
                we can see that by clicking on image
              </p>
              <div id="content-bottom-skills">
                <ul>
                  <li>Reactjs</li>
                  <li>Html</li>
                  <li>Css</li>
                  <li>Figma</li>
                  <li>Photoshop</li>
                </ul>
              </div>
            </div>

            <div id="buttons" className={cardClicked ? "clicked" : ""}>
              {/* <button ></button> */}
              <button
                id="button-2"
                onClick={() => {
                  window.location.href =
                    "https://www.figma.com/file/beZ2myoSDoBmJZRSC5k6dK/App-Ui?type=design&node-id=0%3A1&mode=design&t=K1WY6VWlRBUsBw25-1";
                }}
              >
                View Figma File
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
