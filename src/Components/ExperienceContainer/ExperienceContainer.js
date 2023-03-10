import React from "react";
import { Element } from "react-scroll";
import "./ExperienceContainer.css";
import { StyledEngineProvider } from '@mui/material/styles';
import Demo from '../Demo/demo';

const ExperienceContainer = () => {
  return (
    <Element className="experienceContainer" id="exp">
      <h1>Experience & Qualification</h1>
      <div className="demoContainer">
      <StyledEngineProvider injectFirst>
        <Demo />
      </StyledEngineProvider>

      </div>
      
    </Element>
  );
};

export default ExperienceContainer;
