
import Project from "../Project/Project";
import "../ProjectContainer/ProjectContainer.css"
import { Element } from "react-scroll";

import BestBuy from '../../assets/BestBuy.jpg'
import Spicejet from '../../assets/Spicejet.png'
import Store from '../../assets/Store.jpg'

const ProjectContainer = () => {
  

  const projects = [
    {
      img: BestBuy,
      title: "E-Commerce Automation",
      desc:
        "Java Automation Testing of E - Commerce Project",
      link: "https://github.com/TamsilAhmed/E-Commerce-Project.git",
    },
    {
      img: Spicejet,
      title: "Flight booking Automation",
      desc:
        "Java Automation Testing of Flight booking Website.",
      link: "https://github.com/TamsilAhmed/Spicejet-FlightBooking.git",
    },
    {
      img: Store,
      title: "E-Commerce Automation",
      desc:
        "Java Automation Testing of E-Commerce Website.",
      link: "https://github.com/TamsilAhmed/At-task.git",
    },
    

    
  ];

  return (
    <Element className="projectContainer" id="projects">
      <h1>Projects</h1>
      <p>
        Here are some projects which are changing many people lives
      </p>
       <div className="projectContainer__projects">
          {projects.map((project, index) => (
            <Project
              key={index}
              img={project.img}
              title = {project.title}
              desc={project.desc}
              link={project.link}
            />
          ))}
      </div>
     
    </Element>
  );
};

export default ProjectContainer;
