
import Project from "../Project/Project";
import "../ProjectContainer/ProjectContainer.css"
import { Element } from "react-scroll";

import Weather from '../../assets/weather-app.png'
import PixelArt from '../../assets/Pics Art Generator.png'
import Flip from '../../assets/Flip Coin.png'

const ProjectContainer = () => {
  

  const projects = [
    {
      img: Weather,
      title: "Weather-App",
      desc:
        "A straightforward weather app that displays local weather information",
      link: "https://krishnamoorthy-k07.github.io/weather.github.io/",
    },
    {
      img: PixelArt,
      title: "Pixel Art Generator",
      desc:
        "An online tool for creating simple pixel art.",
      link: "https://krishnamoorthy-k07.github.io/pixel-art-generator.github.io/",
    },
    {
      img: Flip,
      title: "A Flip Coin Game",
      desc:
        "A simple flip-a-coin web application to make life easier.",
      link: "https://krishnamoorthy-k07.github.io/flip-a-coin/",
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
